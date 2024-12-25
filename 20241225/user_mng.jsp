<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
// 1. 데이터베이스 연결 설정
String dbUrl = "jdbc:mysql://localhost:3306/your_database_name"; // DB URL 수정해야됨
String dbUser = "your_username"; // DB 사용자명 "YAMU"
String dbPassword = "your_password"; // DB 비밀번호 "YAMU1234"
Connection conn = null;
PreparedStatement pstmt = null;
ResultSet rs = null;

try {
    Class.forName("com.mysql.cj.jdbc.Driver"); // MySQL 드라이버 로드
    conn = DriverManager.getConnection(dbUrl, dbUser, dbPassword);

    // 2. 예약 데이터 가져오기
    String sql = "SELECT reservation_date, hospital_name, reservation_status FROM reservation_table WHERE user_id = ?";
    pstmt = conn.prepareStatement(sql);
    pstmt.setString(1, (String) session.getAttribute("userId")); // 세션에서 userId 가져오기
    rs = pstmt.executeQuery();

    // 3. 데이터를 출력
    while (rs.next()) {
        String reservationDate = rs.getString("reservation_date");
        String hospitalName = rs.getString("hospital_name");
        String reservationStatus = rs.getString("reservation_status");
%>
<% 
    }
} catch (Exception e) {
    out.println("<div class='reservation-block'>데이터를 불러오는 중 오류가 발생했습니다.</div>");
    e.printStackTrace();
} finally {
    // 4. 자원 정리
    if (rs != null) try { rs.close(); } catch (SQLException e) {}
    if (pstmt != null) try { pstmt.close(); } catch (SQLException e) {}
    if (conn != null) try { conn.close(); } catch (SQLException e) {}
}
%>
<c:set var="CP" value="${pageContext.request.contextPath }" />    
 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<title>정보관리</title>
<script src="/ehr/resources/assets/js/user/user_mng.js"></script>
</head> 
    <body id="container">
        <!-- header 홈,로그아웃 버튼-->
        <jsp:include page="/YAMU/header.jsp"></jsp:include>
        <!--// header-------------------------------------------------->
      
        <!--메인 페이지 개인정보 수정과 예약 정보를 볼 수 있음-->
      <main id="contents">  
        <div class="form-container">
        <h2>회원관리</h2>
        <hr  class="title-underline" />
        <!-- Button area -->
        <div class="button-area">
            <input type="button" id="doUpdate"   value="수정">
            <input type="button" id="doCancel"   value="취소">
        </div>
        <!--// Button area -->  
         
        <!-- form area -->
        <form action="#" class="form"  >
            <div class="form-group">
                <label for="userId">아이디</label>
                <input type="text"  maxlength="30" name="userId" id="userId" 
                value="${vo.userId }" disabled="disabled" >
            </div>
            
            <div class="form-group">
                <label for="name">이름</label>
                <input type="text"  maxlength="20" name="name" id="name"
                value="${vo.name }" >
            </div>   
                 
            <div class="form-group">
                <label for="password">비밀번호</label>
                <input type="password"  maxlength="30" name="password" id="password"
                value="${vo.password }"
                 >
            </div>
         
            <div class="form-group">
                <label  for="email">이메일</label>
                <input type="email"  maxlength="200" name="email" id="email"
                value="${vo.email }"
                 >
            </div>       
            
            <div class="form-group">
              <label  for="phone">전화번호</label>
              <input type="tel"  maxlength="16" name="phone" id="phone"
              value="${vo.phone }"
               >
          </div>
        </form>
      </div>
      <!--// form area -->             
      
          <!-- 예약 관리 -->
      <div class="reservation">
        <div class="reservation-block">날짜: <%= reservationDate %></div>
        <div class="reservation-block">병원: <%= hospitalName %></div>
        <div class="reservation-block">상태: <%= reservationStatus %></div>
        <p style="font-weight: bold; font-size: 24px;">예약 관리</p>
      
      </div>
           <!--예약 관리-->
      
            </main>  
      
       <!-- footer 뭐 넣을지 미정-->
       <jsp:include page="/YAMU/footer.jsp"></jsp:include>
       <!--// footer-------------------------------------------------->    
      
          </div>
        </body>
      </html>

