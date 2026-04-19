const tg = window.Telegram.WebApp;
const pupil = document.getElementById('pupil');
let selectedService = "";

tg.expand();

// Движение глаза за пальцем/мышкой
document.addEventListener('mousemove', (e) => {
    moveEye(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    moveEye(touch.clientX, touch.clientY);
});

function moveEye(cx, cy) {
    const x = (cx - window.innerWidth / 2) / 25; // Амплитуда движения
    const y = (cy - window.innerHeight / 2) / 25;
    if (pupil) {
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    }
}

// Выбор услуги
window.selectService = function(element, serviceName) {
    document.querySelectorAll('.card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');
    selectedService = serviceName;
    tg.HapticFeedback.impactOccurred('medium');
};

// Переход в чат
window.goToChat = function() {
    if (!selectedService) {
        alert("Сначала выбери услугу, бро!");
        return;
    }
    const message = encodeURIComponent(`Привет! Я хочу заказать услугу: ${selectedService}`);
    tg.openTelegramLink(`https://t.me/zxcLITERR?text=${message}`);
};
