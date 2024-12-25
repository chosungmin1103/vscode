document.addEventListener('DOMContentLoaded',function(){
  console.log('DOMContentLoaded');
  
  const userIdInput = document.querySelector("#userId");//아이디
  const passwordInput = document.querySelector("#password");//비밀번호
  const nameInput = document.querySelector("#name");//이름
  const emailInput = document.querySelector("#email");//이메일
  const phoneInput = document.querySelector("#phone");//폰넘버

  const doUpdateButton = document.querySelector("#doUpdate");//수정버튼
  const doCancelButton = document.querySelector("#doCancel");//취소버튼


  // 취소 버튼을 누르면 돌아 가게 되는 초기 값
  const initialValues = {
    name: nameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
    phone: phoneInput.value
  };

  function isEmpty(value) {
    return value.trim() === '';
  }

  //수정
  doUpdateButton.addEventListener("click",function(event){
    event.preventDefault();
    console.log("doUpdateButton click");

    if(confirm('정보를 수정 하시겠습니까?') === false) return;

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

    if(isEmpty(emailInput.value)===true){
      alert('이메일을 입력 하세요');
      emailInput.focus();
      return;
    }

    if(isEmpty(phoneInput.value)===true){
      alert('전화번호를 입력 하세요');
      phoneInput.focus();
      return;
    }

    $.ajax({
      type: "GET",
      url: "/ehr/yamu/doUpdate.do",
      async: true,
      dataType: "html",
      data: {
          "userId": userIdInput.value,
          "name" : nameInput.value,
          "password" : passwordInput.value,
          "email" : emailInput.value,
          "phone" : phoneInput.value
      },
      success: function(response) {
          console.log("success response:" + response);
          const message =JSON.parse(response);

          if(1==message.messageId){//수정 성공시 변경 된 값으로 초기 값 변경
            initialValues.name = nameInput.value;
            initialValues.password = passwordInput.value;
            initialValues.email = emailInput.value;
            initialValues.phone = phoneInput.value;
            alert(message.message);
          }else{
            alert(message.message);
          }

      },
      error: function(response) {
          console.log("error:" + response);
      }
    });

  });

  //취소 버튼
  doCancelButton.addEventListener("click",function(event){
    event.preventDefault();
    console.log("doCancelButton click");
    console.log("userIdInput.value:",userIdInput.value);

    if(confirm('입력했던 내용을 취소하시겠습니까?') === false) return;

    //입력 필드 값을 초기 값으로 지정
    nameInput.value = initialValues.name;
    passwordInput.value = initialValues.password;
    emailInput.value = initialValues.email;
    phoneInput.value = initialValues.phone;

    alert("입력 내용이 초기 값으로 되돌아갔습니다.");
  });

});