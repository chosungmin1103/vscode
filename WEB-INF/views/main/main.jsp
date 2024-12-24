<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="CP" value="${pageContext.request.contextPath }" />




<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="shortcut icon" href="/ehr/resources/assets/images/favicon.ico" type="image/x-icon" >
<link rel="stylesheet" href="/ehr/resources/assets/css/main/main.css?date=<%=new Date()%>">


<title>Main</title>
<script src="/ehr/resources/assets/js/jquery_3_7_1.js"></script> 
<script src="/ehr/resources/assets/js/cmn/common.js"></script>
<script src="/ehr/resources/assets/js/login/login.js"></script> 
</head>
<body>
    <div id="container">
        <!-- header-->
        <jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>
        <!--// header-------------------------------------------------->

        <!-- aside-->
        <jsp:include page="/WEB-INF/views/include/aside.jsp"></jsp:include>
        <!--// aside--------------------------------------------------->

        <!-- main-->
        <main id="contents">
            <h2>본문</h2>
        </main>
        <!--// main---------------------------------------------------->

        <!-- footer-->
        <jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
        <!--// footer-------------------------------------------------->
    </div>
</body>
</html>