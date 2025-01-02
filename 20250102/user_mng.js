document.addEventListener('DOMContentLoaded',function(){
  console.log('DOMContentLoaded');
  
  const memIdInput = document.querySelector("#memId");//아이디
  const memnameInput = document.querySelector("#memname");//이름
  const mempasswordInput = document.querySelector("#mempassword");//비밀번호
  const mememailInput = document.querySelector("#mememail");//이메일
  const memphonenumInput = document.querySelector("#memphonenum");//폰넘버

  const doUpdateButton = document.querySelector("#doUpdate");//수정버튼
  const doCancelButton = document.querySelector("#doCancel");//취소버튼


  // 취소 버튼을 누르면 돌아 가게 되는 초기 값
  const initialValues = {
    memname: memnameInput.value,
    mempassword: mempasswordInput.value,
    mememail: mememailInput.value,
    memphone: memphonenumInput.value
  };

  function isEmpty(value) {
    return value.trim() === '';
  }

  //수정
  doUpdateButton.addEventListener("click",function(event){
    event.preventDefault();
    console.log("doUpdateButton click");

    if(confirm('정보를 수정하시겠습니까?') === false) return;

    if(isEmpty(memnameInput.value)===true){
      alert('이름을 입력하세요.');
      memnameInput.focus();
      return;
    }

    if(isEmpty(mempasswordInput.value)===true){
      alert('비밀번호를 입력 하세요');
      mempasswordInput.focus();
      return;
    }

    if(isEmpty(mememailInput.value)===true){
      alert('이메일을 입력 하세요');
      mememailInput.focus();
      return;
    }

    if(isEmpty(memphonenumInput.value)===true){
      alert('전화번호를 입력 하세요');
      memphonenumInput.focus();
      return;
    }

    if(confirm('정보가 수정되었습니다.')===false)return;

    $.ajax({
      type: "POST",
      url: "/ehr/yamu/doUpdate.do",
      async: true,
      dataType: "html",
      data: {
          "memId": memIdInput.value,
          "memname" : memnameInput.value,
          "mempassword" : mempasswordInput.value,
          "mememail" : mememailInput.value,
          "memphone" : memphonenumInput.value
      },
      success: function(response) {
          console.log("success response:" + response);
          const message =JSON.parse(response);

          if(1==message.messageId){//수정 성공시 변경 된 값으로 초기 값 변경
            initialValues.name = memnameInput.value;
            initialValues.password = mempasswordInput.value;
            initialValues.email = mememailInput.value;
            initialValues.phone = memphonenumInput.value;
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
    console.log("memIdInput.value:",memIdInput.value);

    if(confirm('입력했던 내용을 취소하시겠습니까?') === false) return;

    //입력 필드 값을 초기 값으로 지정, 아이디는 고정 값으로 사용
    memnameInput.value = initialValues.memname;
    mempasswordInput.value = initialValues.mempassword;
    mememailInput.value = initialValues.mememail;
    memphonenumInput.value = initialValues.memphone;

    alert("입력 내용이 초기 값으로 되돌아갔습니다.");
  });

});

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const img = document.getElementById("profile-img");
    img.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
