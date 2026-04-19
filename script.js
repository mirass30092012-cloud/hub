const tg = window.Telegram.WebApp;
const pupil = document.getElementById('pupil');
let selectedService = "";

tg.expand();

// Сила движения зрачка (чем больше число, тем дальше он уходит от центра)
const moveLimit = 15; 

document.addEventListener('mousemove', (e) => {
    updatePosition(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY);
});

function updatePosition(x, y) {
    const offX = (x - window.innerWidth / 2) / (window.innerWidth / 2);
    const offY = (y - window.innerHeight / 2) / (window.innerHeight / 2);

    if (pupil) {
        pupil.style.transform = `translate(${offX * moveLimit}px, ${offY * moveLimit}px)`;
    }
}

window.selectService = function(el, name) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedService = name;
    tg.HapticFeedback.impactOccurred('light');
};

window.goToChat = function() {
    if (!selectedService) {
        tg.showAlert("Выбери услугу!");
        return;
    }
    const text = encodeURIComponent(`Привет! Хочу заказать: ${selectedService}`);
    tg.openTelegramLink(`https://t.me/zxcLITERR?text=${text}`);
};
