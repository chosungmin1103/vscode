document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['dayGrid', 'interaction'],
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    events: [
      {
        title: '회의',
        start: '2024-12-25'
      }
    ],
    dateClick: function(info) {
      alert('클릭한 날짜: ' + info.dateStr);
    }
  });

  calendar.render();
});

// HOME 버튼
function goToHome() {
  if (confirm("홈페이지로 이동하시겠습니까?")) {
    location.href = "mypage.html";
  }
}

// LOGOUT 버튼
function logout() {
  if (confirm("로그아웃 하시겠습니까?")) {
    location.href = "mypage.html";
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
