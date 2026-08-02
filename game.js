// Pi Pet Adventure Version 1.0

const startBtn = document.getElementById("startBtn");
const settingBtn = document.getElementById("settingBtn");
const exitBtn = document.getElementById("exitBtn");

startBtn.onclick = function () {
    window.location.href = "pet.html"
    
};

settingBtn.onclick = function () {
    alert("⚙ Settings\nComing Soon!");
};

exitBtn.onclick = function () {
    alert("👋 Thanks for playing Pi Pet Adventure!");
};