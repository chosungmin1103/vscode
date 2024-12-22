// 빈 값 확인
function isEmpty(value) {
    return value === null || value === undefined || value.trim() === "";
}

// 이메일 유효성 검사
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 숫자만 입력 여부 확인
function isNumeric(value) {
    return /^\d+$/.test(value);
}
function showAlert(message) {
    alert(message);
}

function showConfirm(message) {
    return confirm(message);
}
function sendAjax(url, method, data, successCallback, errorCallback) {
    $.ajax({
        url: url,
        type: method,
        data: data,
        dataType: "json",
        success: successCallback,
        error: errorCallback || function(xhr, status, error) {
            console.error("Error:", error);
            alert("서버 요청 중 오류가 발생했습니다.");
        }
    });
}
// 현재 날짜 반환 (YYYY-MM-DD)
function getCurrentDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

// 날짜 포맷 변환
function formatDate(date, separator = "-") {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}${separator}${mm}${separator}${dd}`;
}
// 클래스 추가
function addClass(element, className) {
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
}

// 클래스 제거
function removeClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
}
function bindEvent(selector, event, handler) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => el.addEventListener(event, handler));
}
const API_BASE_URL = "/ehr/user"; // API 베이스 URL
function handleError(error) {
    console.error("Error occurred:", error);
    alert("문제가 발생했습니다. 다시 시도해주세요.");
}
function log(message) {
    if (window.console) {
        console.log(message);
    }
}
