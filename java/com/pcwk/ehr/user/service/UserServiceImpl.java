/**
 * Package Name : com.pcwk.ehr.user.service <br/>
 * Class Name: UserService.java              <br/>
 * Description:                              <br/>
 * Modification imformation :                <br/> 
 * ------------------------------------------<br/>
 * 최초 생성일 : 2024-11-28                      <br/>
 *
 * ------------------------------------------<br/>
 * @author :acorn
 * @since  :2024-09-09
 * @version: 0.5
 */
package com.pcwk.ehr.user.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.transaction.support.TransactionSynchronizationManager;

import com.pcwk.ehr.cmn.DTO;
import com.pcwk.ehr.user.dao.UserDao;
import com.pcwk.ehr.user.domain.Level;
import com.pcwk.ehr.user.domain.UserVO;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;


@Service
public class UserServiceImpl implements UserService {
	final Logger log = LogManager.getLogger(getClass());

	@Autowired
	UserDao userDao;

	@Autowired
	private MailSender mailSender;

	public UserServiceImpl() {

	}


	/**
	 * 회원삭제
	 * 
	 * @param inVO
	 * @return 1(성공)/0(실패)
	 * @throws SQLException
	 */
	@Override
	public int doDelete(UserVO inVO) throws SQLException {
		return userDao.doDelete(inVO);
	}

	/**
	 * 회원 수정
	 * 
	 * @param inVO
	 * @return 1(성공)/0(실패)
	 * @throws SQLException
	 */
	@Override
	public int doUpdate(UserVO inVO) throws SQLException {
		return userDao.doUpdate(inVO);
	}

	/**
	 * 회원 목록 페이징 처리
	 * 
	 * @param dto
	 * @return List<UserVO>
	 */
	@Override
	public List<UserVO> doRetrieve(DTO dto) {
		return userDao.doRetrieve(dto);
	}

	/**
	 * 회원 상세 조회
	 * 
	 * @param inVO
	 * @return UserVO
	 * @throws SQLException
	 * @throws EmptyResultDataAccessException
	 * @throws NullPointerException
	 */
	@Override
	public UserVO doSelectOne(UserVO inVO) throws SQLException, EmptyResultDataAccessException, NullPointerException {
		return userDao.doSelectOne(inVO);
	}

	/**
	 * 회원등록(가입)
	 * 
	 * @param inVO
	 * @return 1(성공)/0(실패)
	 * @throws SQLException
	 */
	@Override
	public int doSave(UserVO inVO) throws SQLException {
		if (null == inVO.getGrade())
			inVO.setGrade(Level.BASIC);

		return userDao.doSave(inVO);
	}

	// 등업 가능 확인 메서드
	private boolean canUpgradeLevel(UserVO user) {
		// 현제 등급, 등업 조건
		Level currentLevel = user.getGrade();

		switch (currentLevel) {
		case BASIC:
			return (user.getLogin() >= MIN_LOGIN_COUNT_FOR_SILVER);
		case SILVER:
			return (user.getRecommend() >= MIN_RECOMMEND_COUNT_FOR_GOLD);
		case GOLD:
			return false;
		default:
			throw new IllegalArgumentException("Unknown Level:" + currentLevel);
		}
	}

	// 등업 수행
	protected void upgradeLevel(UserVO user) throws SQLException {

		user.upgradeLevel();// 다음 Level

		userDao.doUpdate(user);

		sendUpgradeEmail(user);// 등업 대상자에게 email 발송!
	}

	/**
	 * 등업 대상자에게 email 발송!
	 * 
	 * @param user
	 */
	private void sendUpgradeEmail(UserVO user) {
		// 보내는 사람
		// 받는 사람
		// 제목
		// 내용

		try {
			SimpleMailMessage message = new SimpleMailMessage();
			// 보내는 사람
			message.setFrom("jamesol@naver.com");

			// 받는 사람
			message.setTo(user.getEmail());

			// 제목
			message.setSubject("등업 안내!");

			// 내용:
			// {이상무}님의 등급이 {GOLD로} 등업 되었습니다.

			message.setText(user.getName() + "님의 등급이 " + user.getGrade() + " 등업 되었습니다.");

			mailSender.send(message);
		} catch (Exception e) {
			log.debug("┌───────────────────────────────────────┐");
			log.debug("│ **Exception**                         │" + e.getMessage());
			log.debug("└───────────────────────────────────────┘");
		}

		log.debug("┌───────────────────────────────────────┐");
		log.debug("│ **mail send To**                      │" + user.getEmail());
		log.debug("└───────────────────────────────────────┘");
	}

	/**
	 * 회원 등업
	 * 
	 * @throws SQLException
	 */
	@Override
	public void upgradeLevels() throws SQLException {
		// 1. 전체회원 조회
		// 2. BASIC,SILVER,GOLD 등업 조건
		// 사용자의 등급: BASIC, SILVER, GOLD
		//
		// 1. BASIC : 기입후 50-회 이상 로그인
		// 2. SILVER: SILVER이면서 30회 이상 추천
		// 3. GOLD : 최고 등급
		// 3. 등업

		// 1.
		List<UserVO> users = userDao.getAll();

		// 2.
		for (UserVO user : users) {

			if (true == canUpgradeLevel(user)) {
				upgradeLevel(user);
			}

		} // --for end

	}

}
