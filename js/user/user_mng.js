document.addEventListener('DOMContentLoaded',function(){
  console.log('DOMContentLoaded');

  console.log(doDeleteButton);

  const userIdInput = document.querySelector("#userId");

  //수정
  const doUpdateButton = document.querySelector("#doUpdate");
  doUpdateButton.addEventListener("click",function(event){
    event.preventDefault();
    console.log("doUpdateButton click");


    if(confirm('회원을 수정 하시겠습니까?') === false) return;

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

  //삭제
  const doDeleteButton = document.querySelector("#doDelete");
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