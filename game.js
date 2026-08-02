// Pi Pet Adventure Version 1.0

const startBtn = document.getElementById("startBtn");
const settingBtn = document.getElementById("settingBtn");
const exitBtn = document.getElementById("exitBtn");

startBtn.onclick = function () {
    alert("🐾 Welcome!\n\nNext: Pet Selection");
};

settingBtn.onclick = function () {
    alert("⚙ Settings\n\nComing Soon!");
};

exitBtn.onclick = function () {
    alert("👋 Thanks for playing Pi Pet Adventure!");
};