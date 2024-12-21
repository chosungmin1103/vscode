<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="shortcut icon" href="/ehr/resources/assets/images/favicon.ico" type="image/x-icon" >
<script src="/ehr/resources/assets/js/jquery_3_7_1.js"></script>
<script src="/ehr/resources/assets/js/cmn/common.js"></script>
<script src="/ehr/resources/assets/js/user/user_mng.js"></script>
<title>회원 관리</title>
</head>
<body>
    <h2>회원관리</h2>   
        <!-- Button area -->
    <div>
        <input type="button" id="moveToList" value="목록">
        <input type="button" id="doUpdate" value="수정">
        <input type="button" id="doDelete" value="삭제">
    </div>
    <!--// Button area --> 
    
        <!-- form area -->
    <form action="#" >
        <div>
            <label for="userId">아이디</label>
            <input type="text"  maxlength="30" name="userId" id="userId" value="${vo.userId }" disabled="disabled">
        </div>
        
        <div>
            <label for="name">이름</label>
            <input type="text"  maxlength="7" name="name" id="name" value="${vo.name }" >
        </div>   
             
        <div>
            <label for="password">비밀번호</label>
            <input type="password"  maxlength="30" name="password" id="password" value="${vo.password }" >
        </div>
   
        <!-- 등급 -->        
        <div>  
            <label for="grade">등급</label>
            <select name="grade" id="grade" >
                <option value="BASIC">BASIC</option>
                <option value="SILVER">SILVER</option>
                <option value="GOLD">GOLD</option>
            </select>
        </div>  
                
                
        <div>
            <label for="login">로그인</label>
            <input type="number"  min="0" max="1000000" step="1" name="login" id="login" value="${vo.login }" >
        </div>      
        
        <div>
            <label for="recommend">추천</label>
            <input type="number"  min="0" max="1000000" step="1" name="recommend" id="recommend" value="${vo.recommend }" >
        </div>    
        <div>
            <label  for="email">이메일</label>
            <input type="email"  maxlength="320" name="email" id="email" value="${vo.email }" >
        </div>                                
    </form>
    <!--// form area -->
</body>
</html>