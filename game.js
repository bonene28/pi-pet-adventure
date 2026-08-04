const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Player Pet
const player = {
    x: 150,
    y: 220,
    hp: 120,
    maxHp: 120,
    atk: 20,
    color: "#4CAF50"
};

// Enemy Pet
const enemy = {
    x: 550,
    y: 220,
    hp: 120,
    maxHp: 120,
    atk: 15,
    color: "#E53935"
};

function drawPet(pet) {
    ctx.fillStyle = pet.color;
    ctx.beginPath();
    ctx.arc(pet.x, pet.y, 40, 0, Math.PI * 2);
    ctx.fill();

    // HP Bar
    ctx.fillStyle = "red";
    ctx.fillRect(pet.x - 40, pet.y - 60, 80, 8);

    ctx.fillStyle = "lime";
    ctx.fillRect(
        pet.x - 40,
        pet.y - 60,
        (pet.hp / pet.maxHp) * 80,
        8
    );
}

function attack() {
    enemy.hp -= player.atk;

    if (enemy.hp < 0) enemy.hp = 0;

    if (enemy.hp > 0) {
        setTimeout(() => {
            player.hp -= enemy.atk;

            if (player.hp < 0) player.hp = 0;
        }, 500);
    }
}

canvas.addEventListener("click", attack);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPet(player);
    drawPet(enemy);

    if (player.hp <= 0) {
        ctx.font = "40px Arial";
        ctx.fillText("YOU LOSE!", 280, 100);
        return;
    }

    if (enemy.hp <= 0) {
        ctx.font = "40px Arial";
        ctx.fillText("YOU WIN!", 290, 100);
        return;
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();