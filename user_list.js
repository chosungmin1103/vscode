document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");

    const doRetrieveButton = document.querySelector("#doRetrieveBtn");
    const pageNoInput = document.querySelector("#pageNo");
    const searchDivSelect = document.querySelector("#searchDiv");
    const searchWordInput = document.querySelector("#searchWord");
    const pageSizeSelect = document.querySelector("#pageSize");
    const userForm = document.querySelector("#userForm");
    const moveToListButton = document.querySelector("#moveToList");
    const moveToRegButton = document.querySelector("#moveToRegBtn");

    // Confirm helper
    function confirmAction(message, action) {
        if (confirm(message)) {
            action();
        }
    }

    // Row double-click event
    const rows = document.querySelectorAll("#listTable > tbody > tr");
    rows.forEach(function (row) {
        row.addEventListener("dblclick", function () {
            const userId = row.querySelector("td:nth-child(2)").innerText;
            console.log(`userId: ${userId}`);
            confirmAction("회원 상세 조회 하시겠습니까?", function () {
                window.location.href = `/ehr/user/doSelectOne.do?userId=${userId}`;
            });
        });
    });

    // Retrieve button click
    if (doRetrieveButton) {
        doRetrieveButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("doRetrieveButton click");

            userForm.pageNo.value = 1;
            userForm.action = "/ehr/user/doRetrieve.do";
            userForm.submit();
        });
    }

    // Move to list
    if (moveToListButton) {
        moveToListButton.addEventListener("click", function () {
            confirmAction("회원 목록으로 이동하시겠습니까?", function () {
                window.location.href = "/ehr/user/doRetrieve.do";
            });
        });
    }

    // Move to register
    if (moveToRegButton) {
        moveToRegButton.addEventListener("pageDoRetrieve", function () {
            confirmAction("회원 등록 화면으로 이동 하시겠습니까?", function () {
                window.location.href = "/ehr/user/user_reg_index.do";
            });

            function pageDoRetrieve(url,pageNo){
                let userForm = document.userForm;
                userForm.pageNo.value = pageNo;
                userForm.action = url;
                userForm.submit();
            }
            
        });
    }
});
