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

function hospital(){
  if(confirm("병원 목록으로 이동하시겠습니까?")){
    location.href = "hospital.html";
  }
}

function reservation(){
  if(confirm("예약 내역으로 이동하시겠습니까?")){
    location.href = "reservation.html";
  }
}