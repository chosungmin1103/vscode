document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');

  const loginButton = document.querySelector("#loginBtn");
  const userIdInput = document.querySelector("#userId");
  const passwordInput = document.querySelector("#password");

  loginButton.addEventListener("click", function(event) {
      console.log('loginButton click');

      // 필수 처리
      if (isEmpty(userIdInput.value) === true) {
          alert('사용자 ID를 입력 하세요');
          userIdInput.focus();
          return;
      }

      if (isEmpty(passwordInput.value) === true) {
        alert('비밀번호를 입력 하세요');
        passwordInput.focus();
        return;
    }

    console.log("Sending userId: " + userIdInput.value);
    console.log("Sending password: " + passwordInput.value);


    $.ajax({
      type: "POST",
      url: "/ehr/login/login.do",
      async: true,
      dataType: "html",
      data: {
          "userId": userIdInput.value,
          "password" : passwordInput.value
      },
      success: function(response) {
          console.log("success response:" + response);
          const message = JSON.parse(response);

          //id이상
          if(10==message.messageId){
            alert(message.message);
            userIdInput.focus();

          //비밀번호 이상
          }else if(20==message.messageId){
            alert(message.message);
            passwordInput.focus();

          //로그인 완료
          }else if(30==message.messageId){
            alert(message.message);
            window.location.href="/ehr/main/main.do";
          //위에 것 이외 오류
          }else{
            alert(message.message)
        }
      },
      error: function(response) {
          console.log("error:" + response);
      }
    });

   });
});