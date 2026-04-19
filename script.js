const tg = window.Telegram.WebApp;
const pupil = document.getElementById('pupil');
let currentService = "";

tg.expand();

// Настройка чувствительности (как далеко ходит зрачок)
const limit = 25; 

document.addEventListener('mousemove', (e) => {
    move(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    move(t.clientX, t.clientY);
});

function move(cx, cy) {
    // Считаем положение относительно центра
    const x = (cx - window.innerWidth / 2) / (window.innerWidth / 2);
    const y = (cy - window.innerHeight / 2) / (window.innerHeight / 2);
    
    // Двигаем зрачок. 
    // Важно: так как родитель повернут на 45 град, 
    // координаты тоже будут чуть под углом, но визуально это выглядит четко.
    if (pupil) {
        pupil.style.transform = `translate(${x * limit}px, ${y * limit}px) rotate(-45deg)`;
    }
}

window.selectService = function(el, name) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    currentService = name;
    tg.HapticFeedback.impactOccurred('medium');
};

window.goToChat = function() {
    if (!currentService) {
        tg.showAlert("Выбери услугу, агент!");
        return;
    }
    const link = `https://t.me/zxcLITERR?text=${encodeURIComponent("Заказ: " + currentService)}`;
    tg.openTelegramLink(link);
};
