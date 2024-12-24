document.addEventListener('DOMContentLoaded',function() {
  console.log('DOMContentLoaded');

  const doSaveButton = document.querySelector("#doSave");

  //userId
  const userIdInput = document.querySelector("#userId");
  //이름
  const nameInput = document.querySelector("#name");
  //비밀번호
  const passwordInput = document.querySelector("#password");
  //로그인
  const loginInput = document.querySelector("#login");
  //추천
  const recommendInput = document.querySelector("#recommend");
  //이메일
  const emailInput = document.querySelector("#email");
  //등급
  const gradeSelect = document.querySelector("#grade");


  doSaveButton.addEventListener("click",function(event) {
    console.log('doSaveButton click');

    //Validation
    console.log('userIdInput.value',userIdInput.value);
    console.log('gradeSelect.value',gradeSelect.value);

    if(isEmpty(userIdInput.value) === true) {
      alert('사용자 ID를 입력하세요.');
      userIdInput.focus();
      return;
    }

    if(isEmpty(nameInput.value) === true) {
      alert('이름을 입력하세요.');
      nameInput.focus();
      return;
    }

    if(isEmpty(passwordInput.value) === true) {
      alert('비밀번호를 입력하세요.');
      passwordInput.focus();
      return;
    }

    if(isEmpty(loginInput.value) === true) {
      alert('로그인 횟수를 입력하세요.');
      logindInput.focus();
      return;
    }

    if(isEmpty(recommendInput.value) === true) {
      alert('추천 횟수를 입력하세요.');
      recommendInput.focus();
      return;
    }

    if(isEmpty(emailInput.value) === true) {
      alert('이메일을 입력하세요.');
      emailInput.focus();
      return;
    }

    if(confirm('회원 등록 하시겠습니까?') === false) return;

    // fetch("/ehr/user/doSave.do",{
    //   method: 'POST',
    //   //서버가 데이터를 URL 인코딩된 문자열로 해석되도록 저장.
    //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    //   body: new URLSearchParams({ //데이터를 URL 인코딩된 문자열로 반환
    //           "userId": userIdInput.value,
    //           "name": nameInput.value,
    //           "password": passwordInput.value,
    //           "login": loginInput.value,
    //           "recommend": recommendInput.value,
    //           "grade": gradeSelect.value,
    //           "email": emailInput.value
    //   })
    // })
    // .then(response => {
    //   console.log("success response:"+response);
    //   return response.json();//서버 응답 본문을 JSON 형태로 파싱
    // })
    // .then(data => {
    //   console.log("data :"+data);
    //   if(message.messageId == 1) { //등록 성공
    //      alert(message.message);
    //      //목록으로 화면 이동.
    //      window.location.href = '/ehr/user/doRetrieve.do';
    //   }
    //   else {
    //      alert(message.message);
    //   }
    // });
    // .catch(error => console.error('Error:',error));
    
    $.ajax({
      type: "POST",
      url: "/ehr/user/doSave.do",
      async: true,
      dataType: "html",
      data: {
          "userId": userIdInput.value,
          "name": nameInput.value,
          "password": passwordInput.value,
          "login": loginInput.value,
          "recommend": recommendInput.value,
          "grade": gradeSelect.value,
          "email": emailInput.value
      },
      success: function(response) {
          console.log("success response:" + response);
          const message = JSON.parse(response);
          if(message.messageId == 1) { //등록 성공
            alert(message.message);
            //목록으로 화면 이동.
            window.location.href = '/user/doRetrieve.do';
          }
          else {
            alert(message.message);
          }
      },
      error: function(response) {
          console.log("error:" + response);
      }
  });

});


  const moveToListButton = document.querySelector("#moveToList");

  moveToListButton.addEventListener("click",function(event) {
    console.log('moveToListButton click');

    if(confirm('회원 목록으로 이동하시겠습니까?') === false) return;

    window.location.href = "/user/doRetrieve.do";
  });
});