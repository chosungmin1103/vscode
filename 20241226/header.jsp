<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="CP" value="${pageContext.request.contextPath }" />

    <h2>MY PAGE</h2>
 <body id="container">
    <header>
      <div class="div">
        <button type="button" class="button" onclick="goToHome()">HOME</button>
        <button type="button" class="button" onclick="logout()">LOGOUT</button>
      </div>
    </header>

    <style>
      body {
        width: 1280px;
        height: 768px;
        margin: 10px auto;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
      }
      header {
        font-weight: bolder;
        background-color: aquamarine;
        text-align: left;
        padding: 10px;
        margin: 10px 0;
        border-radius: 20px;
        font-size: larger;
      }
      h2 {
        margin: 0;
      }
      .button {
        background-color: skyblue;
        color: black;
        border: none;
        padding: 10px 30px;
        border-radius: 50px;
        cursor: pointer;
      }


      form {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      form label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        font-weight: bold;
      }
      form input {
        flex: 1;
        max-width: 300px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
      }

    </style>