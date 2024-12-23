document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");

    const doRetrieveButton = document.querySelector("#doRetrieveBtn");
    console.log(doRetrieveButton);

    const pageNoInput = document.querySelector("#pageNo");
    const searchDivSelect = document.querySelector("#searchDiv");
    const searchWordInput = document.querySelector("#searchWord");
    const pageSizeSelect = document.querySelector("#pageSize");



    const rows = document.querySelectorAll("#listTable > tbody > tr");

    const moveToListButton = document.querySelector("#moveToList");

    // Confirm helper
    function confirmAction(message, action) {
        if (confirm(message)) {
            action();
        }
    }

    // Row double-click event
    rows.forEach(function (row) {
        row.addEventListener("dblclick", function () {
            let cells = row.querySelector("td");
            const userId = cells[1].innerText;
            console.log(`userId: ${userId}`);
            if(confirm("회원 상세 조회 하시겠습니까?")===false) return;

            window.location.href = "/ehr/user/doSelectOne.do?userId="+userId;
            });
        });
    

        const userForm = document.querySelector("#userForm");

        doRetrieveButton.addEventListener('click',function(event){
            event.preventDefault();
            console.log("doRetrieveButton click");

            userForm.pageNo.value = 1;
            userForm.action = "/ehr/user/doRetrieve.do";

            console.log("pageSizeSelect.value",pageSizeSelect.value);
            console.log("searchDivSelect.value",searchDivSelect.value);
            console.log("searchWordInput.value",searchWordInput.value);
            console.log("pageNo.value",pageNo.value);

            userForm.submit();

        });

        let moveToRegButton = document.getElementById("moveToRegBtn");
        moveToRegButton.addEventListener("click",function(){
            console.log("moveToRegButton click");
            movetToReg();
        });

        
    });
    function moveToReg(){
        console.log("moveToReg()");
        if(confirm('회원 등록 화면으로 이동 하시겠습니까?')==false) return;
        window.location.href="/ehr/user/user_reg_index.do";
    }

    function pageDoRetrieve(url,pageNo){
        console.log("pageDoRetrieve click");

        let userForm = document.userForm;

        userForm.pageNo.value = pageNo;
        userForm.action = url;

        userForm.submit();
    }
    