const tg = window.Telegram.WebApp;
const pupil = document.getElementById('pupil');
let currentService = "";

tg.expand();

// Настройка того, насколько далеко зрачок заходит в углы
const limit = 30; 

document.addEventListener('mousemove', (e) => {
    move(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    move(t.clientX, t.clientY);
});

function move(cx, cy) {
    const x = (cx - window.innerWidth / 2) / (window.innerWidth / 2);
    const y = (cy - window.innerHeight / 2) / (window.innerHeight / 2);
    
    if (pupil) {
        // Зрачок бегает ровно по осям X и Y
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
        tg.showAlert("Сначала выбери услугу!");
        return;
    }
    const link = `https://t.me/zxcLITERR?text=${encodeURIComponent("Заказ: " + currentService)}`;
    tg.openTelegramLink(link);
};
