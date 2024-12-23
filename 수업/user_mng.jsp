<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="shortcut icon" href="/ehr/resources/assets/images/favicon.ico" type="image/x-icon" >
<link rel="stylesheet" href="/ehr/resources/assets/css/user/form.css">

<script src="/ehr/resources/assets/js/jquery_3_7_1.js"></script>
<script src="/ehr/resources/assets/js/cmn/common.js"></script>
<script src="/ehr/resources/assets/js/user/user_mng.js"></script>
<title>회원 관리</title>
</head>
<body>
    <div class="form-container">
  <h2>회원관리</h2>   
  <hr class="title-underline"/>

      <!-- Button area -->
  <div class="button-area">
      <input type="button" id="moveToList" value="목록">
      <input type="button" id="doSave" value="등록">
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
        <input type="text"  maxlength="7" name="name" id="name"
        value="${vo.name }" >
    </div>   
         
    <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password"  maxlength="30" name="password" id="password"
        value="${vo.password }"
         >
    </div>

    <!-- 등급 -->        
    <div class="form-group">  
        <label for="grade">등급</label>
        <select name="grade" id="grade" >
            <option value="BASIC">BASIC</option>
            <option value="SILVER">SILVER</option>
            <option value="GOLD">GOLD</option>
        </select>
    </div>  
            
            
    <div class="form-group">
        <label for="login">로그인</label>
        <input type="number"  min="0" max="1000000" step="1" name="login"
         id="login" value="${vo.login }" >
    </div>      
    
    <div class="form-group">
        <label for="recommend">추천</label>
        <input type="number"  min="0" max="1000000" step="1" name="recommend" 
        id="recommend" value="${vo.recommend }" >
    </div>    
    <div class="form-group">
        <label  for="email">이메일</label>
        <input type="email"  maxlength="320" name="email" id="email"
        value="${vo.email }"
         >
    </div>                                
</form>
<!--// form area -->

          <label for="recommend">추천</label>
          <input type="number"  min="0" max="1000000" step="1" name="recommend" id="recommend"  >
      </div>    
      <div class="form-group">
          <label  for="email">이메일</label>
          <input type="email"  maxlength="320" name="email" id="email"  >
      </div>                                
  </div>
</body>
</html>
