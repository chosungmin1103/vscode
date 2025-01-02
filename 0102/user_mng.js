document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');

  // 변수 선언
  const memIdInput = document.querySelector("#memId"); // 아이디
  const memnameInput = document.querySelector("#memname"); // 이름
  const mempasswordInput = document.querySelector("#mempassword"); // 비밀번호
  const mememailInput = document.querySelector("#mememail"); // 이메일
  const memphonenumInput = document.querySelector("#memphonenum"); // 폰넘버

  const doUpdateButton = document.querySelector("#doUpdate"); // 수정 버튼
  const doCancelButton = document.querySelector("#doCancel"); // 취소 버튼

  // 초기 값 저장
  const initialValues = {
    memname: memnameInput.value,
    mempassword: mempasswordInput.value,
    mememail: mememailInput.value,
    memphone: memphonenumInput.value
  };

  // 공백 확인 함수
  function isEmpty(value) {
    return value.trim() === '';
  }

  // 수정 버튼 클릭 이벤트
  doUpdateButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("doUpdateButton click");

    if (confirm('정보를 수정하시겠습니까?') === false) return;

    if (isEmpty(memnameInput.value)) {
      alert('이름을 입력하세요.');
      memnameInput.focus();
      return;
    }

    if (isEmpty(mempasswordInput.value)) {
      alert('비밀번호를 입력하세요.');
      mempasswordInput.focus();
      return;
    }

    if (isEmpty(mememailInput.value)) {
      alert('이메일을 입력하세요.');
      mememailInput.focus();
      return;
    }

    if (isEmpty(memphonenumInput.value)) {
      alert('전화번호를 입력하세요.');
      memphonenumInput.focus();
      return;
    }

    if (confirm('정보가 수정되었습니다.') === false) return;

    $.ajax({
      type: "POST",
      url: "/ehr/yamu/doUpdate.do",
      async: true,
      dataType: "html",
      data: {
        "memId": memIdInput.value,
        "memname": memnameInput.value,
        "mempassword": mempasswordInput.value,
        "mememail": mememailInput.value,
        "memphone": memphonenumInput.value
      },
      success: function (response) {
        console.log("success response:" + response);
        const message = JSON.parse(response);

        if (1 == message.messageId) { // 수정 성공 시 초기 값 변경
          initialValues.memname = memnameInput.value;
          initialValues.mempassword = mempasswordInput.value;
          initialValues.mememail = mememailInput.value;
          initialValues.memphone = memphonenumInput.value;
          alert(message.message);
        } else {
          alert(message.message);
        }
      },
      error: function (response) {
        console.log("error:" + response);
      }
    });
  });

  // 취소 버튼 클릭 이벤트
  doCancelButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("doCancelButton click");
    console.log("memIdInput.value:", memIdInput.value);

    if (confirm('입력했던 내용을 취소하시겠습니까?') === false) return;

    // 입력 필드 초기화
    memnameInput.value = initialValues.memname;
    mempasswordInput.value = initialValues.mempassword;
    mememailInput.value = initialValues.mememail;
    memphonenumInput.value = initialValues.memphone;

    alert("입력 내용이 초기 값으로 되돌아갔습니다.");
  });

  // 회원 탈퇴 버튼 클릭 이벤트
  document.getElementById("doDelete").addEventListener("click", function () {
    if (confirm("회원을 탈퇴하시겠습니까?")) {
      // 입력 필드 초기화
      memIdInput.value = ""; 
      memnameInput.value = "";
      mempasswordInput.value = "";
      mememailInput.value = "";
      memphonenumInput.value = "";

      // 초기 값도 리셋
      initialValues.memname = "";
      initialValues.mempassword = "";
      initialValues.mememail = "";
      initialValues.memphone = "";

      $.ajax({
        type: "POST",
        url: "/ehr/yamu/doDelete.do",
        async: true,
        dataType: "html",
        data: {
          memId: memIdInput.value, 
        },
        success: function (response) {
          console.log("success response:" + response);
          const message = JSON.parse(response);

          if (1 == message.messageId) {
            alert("회원탈퇴가 완료되었습니다.");
            window.location.href = "/"; 
          } else {
            alert(message.message);
          }
        },
        error: function (response) {
          console.log("error:" + response);
          alert("회원탈퇴 처리 중 오류가 발생했습니다.");
        },
      });
    }
  });
});

// 이미지 미리보기 함수
function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const img = document.getElementById("profile-img");
    img.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

// 버튼 함수
function goToHome() {
  if (confirm("메인 페이지로 이동하시겠습니까?")) {
    location.href = "MAIN.html";
  }
}

// LOGOUT 버튼 클릭 시 확인 메시지 출력
function logout() {
  if (confirm("로그아웃 하시겠습니까?")) {
    location.href = "MAIN.html";
  }
}

// 저장 버튼
function confirmSave() {
  return confirm("저장하시겠습니까?");
}

// 취소 버튼
function confirmCancel() {
  return confirm("취소하시겠습니까?");
}

function reservation(){
  if(confirm("예약 내역으로 이동하시겠습니까?")){
    location.href = "reservation.html";
  }
}