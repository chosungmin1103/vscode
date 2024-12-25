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