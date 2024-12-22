// HOME 버튼
function goToHome() {
    if (confirm("홈페이지로 이동하시겠습니까?")) {
      location.href = "MAIN.html";
    }
  }
  
  // LOGOUT 버튼
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
