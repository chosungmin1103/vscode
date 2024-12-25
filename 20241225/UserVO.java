package com.example.controller;

public class UserVO {

	// CTRL + SHIFT + Y : 소문자
	// CTRL + SHIFT + X : 대문자
	private String MEM_ID; // 사용자ID
	private String MEM_NAME; // 이름
	private String MEM_PASSWORD;// 비밀번호
	private String MEM_REG_DT; // 등록일

	public UserVO(String userId, String name, String password, String reg_dt) {
		super();
		this.MEM_ID = userId;
		this.MEM_NAME = name;
		this.MEM_PASSWORD = password;
		this.MEM_REG_DT = reg_dt;
	}

	public String getUserId() {
		return MEM_ID;
	}

	public void setUserId(String userId) {
		this.MEM_ID = userId;
	}

	public String getName() {
		return MEM_NAME;
	}

	public void setName(String name) {
		this.MEM_NAME = name;
	}

	public String getPassword() {
		return MEM_PASSWORD;
	}

	public void setPassword(String password) {
		this.MEM_PASSWORD = password;
	}

	public String getReg_dt() {
		return MEM_REG_DT;
	}

	public void setReg_dt(String reg_dt) {
		this.MEM_REG_DT = reg_dt;
	}
}