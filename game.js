// Pi Pet Adventure Version 1.0

const startBtn = document.getElementById("startBtn");
const settingBtn = document.getElementById("settingBtn");
const exitBtn = document.getElementById("exitBtn");

startBtn.onclick = function () {
    document.body.innerHTML = `
        <div class="menu">
            <h1>Choose Your Pet</h1>

            <button>🐶 Dog</button><br><br>

            <button>🐱 Cat</button><br><br>

            <button>🐰 Rabbit</button><br><br>

            <button>🐼 Panda</button>
        </div>
    `;
};

settingBtn.onclick = function () {
    alert("⚙ Settings\nComing Soon!");
};

exitBtn.onclick = function () {
    alert("👋 Thanks for playing Pi Pet Adventure!");
};