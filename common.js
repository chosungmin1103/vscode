document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
  
    const doSaveButton = document.querySelector("#doSave");
    const userIdInput = document.querySelector("#userId"); // 사용자 ID
    const nameInput = document.querySelector("#name"); // 이름
    const passwordInput = document.querySelector("#password"); // 비밀번호
    const loginInput = document.querySelector("#login"); // 로그인
    const recommendInput = document.querySelector("#recommend"); // 추천
    const emailInput = document.querySelector("#email"); // 이메일
    const gradeSelect = document.querySelector("#grade"); // 등급
  
    // Validation용 isEmpty 함수 정의
    function isEmpty(value) {
        return value == null || value.trim() === "";
    }
  
    doSaveButton.addEventListener("click", function (event) {
        console.log('doSaveButton click');
        
        // 기본 동작 방지
        event.preventDefault();
  
        // Validation
        if (isEmpty(userIdInput.value)) {
            alert('사용자 ID를 입력 하세요.');
            userIdInput.focus();
            return;
        }
  
        if (isEmpty(nameInput.value)) {
            alert('이름을 입력 하세요.');
            nameInput.focus();
            return;
        }
  
        if (isEmpty(passwordInput.value)) {
            alert('비밀번호를 입력 하세요.');
            passwordInput.focus();
            return;
        }
  
        if (isEmpty(loginInput.value)) {
            alert('로그인 횟수를 입력 하세요.');
            loginInput.focus();
            return;
        }
  
        if (isEmpty(recommendInput.value)) {
            alert('추천 횟수를 입력 하세요.');
            recommendInput.focus();
            return;
        }
  
        if (isEmpty(emailInput.value)) {
            alert('이메일을 입력 하세요.');
            emailInput.focus();
            return;
        }
  
        if (confirm('회원 등록 하시겠습니까?') === false) return;
  
        // AJAX 요청
        $.ajax({
            type: "POST",
            url: "/ehr/user/doSave.do",
            async: true,
            dataType: "html", 
            data: {
                userId: userIdInput.value,
                name: nameInput.value,
                password: passwordInput.value,
                login: loginInput.value,
                recommend: recommendInput.value,
                grade: gradeSelect.value,
                email: emailInput.value
            },
            success: function (response) {
                console.log("success response:", response);
  
                if (response.messageId === 1) { // 등록 성공
                    alert(response.message);
                    window.location.href = '/ehr/user/doRetrieve.do'; // 목록으로 이동
                } else {
                    alert(response.message); // 실패 메시지
                }
            },
            error: function (response) {
                console.error("error response:", response);
                alert("서버와 통신 중 오류가 발생했습니다.");
            }
        });
    });
  
    const moveToListButton = document.querySelector("#moveToList");
  
    moveToListButton.addEventListener("click", function (event) {
        console.log('moveToListButton click');
  
        if (confirm('회원 목록으로 이동 하시겠습니까?') === false) return;
  
        window.location.href = "/ehr/user/doRetrieve.do";
    });
  });