<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="shortcut icon" href="/ehr/resources/assets/images/favicon.ico" type="image/x-icon" >
<script src="/ehr/resources/assets/js/jquery_3_7_1.js"></script>
<script src="/ehr/resources/assets/js/cmn/common.js"></script>
<script src="/ehr/resources/assets/js/user/user_list.js"></script>

<style> 
table {
    width: 720px;
    border-collapse: collapse;
    font-size: 16px;
}

thead th {
    background-color: #007bff;
    color: white;
    padding: 10px;
    text-align: center;
}

tbody td {
    border: 1px solid #dddddd;
    padding: 10px;
}

.text-left {
    text-align: left;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
}

.highlight {
    font-weight: bold;
    color: #d9534f;
}

tbody tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
}
</style>
<title>회원목록</title>
</head>
<body>
    <h2>회원목록</h2>
    검색 조건: ${search}

    <div>
        <input type="button" value="조회" id="doRetrieveBtn"> 
        <input type="button" value="등록" id="moveToRegBtn">
    </div>    

    <!-- 검색 조건 -->
    <form action="#" name="userForm" id="userForm" method="get" enctype="application/x-www-form-urlencoded">
        <input type="hidden" name="pageNo" id="pageNo" >
        <div>
            <label for="searchDiv">구분</label>
            <select id="searchDiv" name="searchDiv">
                <option value="">전체</option>
                <option value="10" <c:if test="${10 == search.searchDiv}">selected</c:if>>회원ID</option>
                <option value="20" <c:if test="${20 == search.searchDiv}">selected</c:if>>이름</option>  
                <option value="30" <c:if test="${30 == search.searchDiv}">selected</c:if>>이메일</option>
            </select>
            <input type="search" name="searchWord" id="searchWord" value="${search.searchWord}">
            <select name="pageSize" id="pageSize">
                <option value="10" <c:if test="${10 == search.pageSize}">selected</c:if>>10</option>
                <option value="20" <c:if test="${20 == search.pageSize}">selected</c:if>>20</option>
                <option value="30" <c:if test="${30 == search.pageSize}">selected</c:if>>30</option>
                <option value="50" <c:if test="${50 == search.pageSize}">selected</c:if>>50</option>
                <option value="100" <c:if test="${100 == search.pageSize}">selected</c:if>>100</option>
            </select>            
        </div>            
    </form>

    <!-- 데이터 테이블 -->
    <table id="listTable" border="1">
        <thead>
            <tr>
                <th>번호</th>
                <th>회원ID</th>
                <th>이름</th>
                <th>이메일</th>
                <th>등급</th>
                <th>로그인</th>
                <th>추천</th>
                <th>등록일</th>
            </tr>
        </thead>
        <tbody>
            <c:choose>
                <c:when test="${not empty list}">
                    <c:forEach var="vo" items="${list}">
                        <tr>
                            <td class="text-center">${vo.getNo()}</td>
                            <td class="text-left highlight">${vo.userId}</td>
                            <td class="text-center">${vo.name}</td>
                            <td>${vo.email}</td>
                            <td class="text-center">${vo.grade}</td>
                            <td class="text-right">${vo.login}</td>
                            <td class="text-right">${vo.recommend}</td>
                            <td class="text-center">${vo.regDt}</td>
                        </tr>
                    </c:forEach>
                </c:when>
                <c:otherwise>
                    <tr>
                        <td colspan="8" class="text-center">데이터가 없습니다.</td>
                    </tr>
                </c:otherwise>
            </c:choose>
        </tbody>
    </table>
</body>
</html>