const settingsMenu = document.querySelector(".settings-menu");
const darkBtn = document.getElementById("dark-btn");

function settinsMenuToggle () {
    settingsMenu.classList.toggle("settings-menu-height")
}

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
}

