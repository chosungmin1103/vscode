document.addEventListener('DOMContentLoaded',function(){
    console.log('DOMContentLoaded');
    
    //입력 컨트롤
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
    //수정
    const doUpdateButton = document.querySelector("#doUpdate");
    doUpdateButton.addEventListener("click",function(event){
      event.preventDefault();
      console.log("doUpdateButton click");
  
      if(confirm('회원을 수정 하시겠습니까?') === false) return;

      if(isEmpty(nameInput.value)===true){
        alert('이름을 입력하세요.');
        nameInput.focus();
        return;
      }

      if(isEmpty(passwordInput.value)===true){
        alert('비밀번호를 입력 하세요');
        passwordInput.focus();
        return;
      }

      if(isEmpty(loginInput.value)===true){
        alert('로그인 횟수 입력 하세요');
        loginInput.focus();
        return;
      }

      if(isEmpty(recommendInput.value)===true){
        alert('추천 횟수 입력 하세요');
        recommendInput.focus();
        return;
      }

      if(isEmpty(emailInput.value)===true){
        alert('이메일을 입력 하세요');
        emailInput.focus();
        return;
      }

      if(confirm('회원을 수정 하시겠습니까?')==false)
        return;

      $.ajax({
        type: "POST",
        url: "/ehr/user/doUpdate.do",
        async: true,
        dataType: "html",
        data: {
            "userId": userIdInput.value,
            "name" : nameInput.value,
            "password" : passwordInput.value,
            "login" : loginInput.value,
            "recommend" : recommendInput.value,
            "grade" : gradeInput.value,
            "email" : emailInput.value
        },
        success: function(response) {
            console.log("success response:" + response);
            const message =JSON.parse(response);
  
            if(1==message.messageId){//수정 성공
              alert(message.message);
              //목록으로 화면 이동
              window.location.href=`/ehr/user/doRetrieve.do`
            }else{
              alert(message.message);
            }
  
        },
        error: function(response) {
            console.log("error:" + response);
        }
      });

    });
  
    //삭제
    const doDeleteButton = document.querySelector("#doDelete");
    console.log(doDeleteButton);
    doDeleteButton.addEventListener("click",function(event){
      event.preventDefault();
      console.log("doDeleteButton click");
      console.log("userIdInput.value:",userIdInput.value);
  
      if(confirm('회원을 삭제 하시겠습니까?') === false) return;
  
        $.ajax({
          type: "POST",
          url: "/ehr/user/doDelete.do",
          async: true,
          dataType: "html",
          data: {
              "userId": userIdInput.value
          },
          success: function(response) {
              console.log("success response:" + response);
              const message =JSON.parse(response);
  
              if(1==message.messageId){
                alert(message.message);
                window.location.href=`/ehr/use/doRetrieve.do`
              }else{
                alert(message.message);
              }
          },
          error: function(response) {
              console.log("error:" + response);
          }
      });
  
    });
  });