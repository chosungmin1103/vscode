package com.example.controller;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserDao {
	
	//등록 
	   
	 
       
	public int doSave(UserVO inVO) throws ClassNotFoundException, SQLException {
		//1. DB연결을 위한 Connection
		//2. SQL을 담은 PreparedStatement,Statement를 생성
		//3. PreparedStatement를 실행한다.
		//4. 실행결과 받기 ResultSet 받아서 저장.(x)
		//5. Connection,PreparedStatement,ResultSet의 자원 반납.
		//6. JDBC API에 대한 예외 처리
		
		int flag = 0;
		
		//1 
		String DB_URL      = "jdbc:oracle:thin:@localhost:1521:xe";
		String DB_USER     = "scott";
		String DB_PASSWORD = "pcwk";
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
		System.out.println("1.conn:"+conn);
		
		StringBuilder sb = new StringBuilder(200);
		sb.append("INSERT INTO member (\n");
	       sb.append("user_id,\n");
	       sb.append("name,\n");
	       sb.append("password,\n");
	       sb.append("reg_date\n");
	       sb.append(") VALUES ( \n");
	       sb.append("?,          \n");
	       sb.append("?,\n");
	       sb.append("?,\n");
	       sb.append("SYSDATE )\n");
	       sb.append("");
	       System.out.println("2.sql:\n"+sb.toString());
	       
	       //2.
	       PreparedStatement pstmt = conn.prepareStatement(sb.toString());
	       //2.1 param 설정
	       pstmt.setString(1, inVO.getUserId());
	       pstmt.setString(2, inVO.getName());
	       pstmt.setString(3, inVO.getPassword());
	       
	       System.out.println("3.param:"+inVO.toString());
	       
	       //3. 실행
	       flag = pstmt.executeUpdate();
	       
	       System.out.println("4.flag:"+flag);
	       
	       //5. return반납
	       pstmt.close();
	       conn.close();
	      
	       
		return flag;
	}
	
	
	//단건 조회 
	/*
	 * SELECT
       user_id,
       name,
       password,
       TO_CHAR(reg_date,'YYYY/MM/DD HH24:MI:SS') reg_dt
       FROM
       member
       WHERE user_id = :user_id
	 */
	public UserVO doSelectOne(UserVO inVO) {
		UserVO outVO = null;
		
		return outVO;
	}
	
}

