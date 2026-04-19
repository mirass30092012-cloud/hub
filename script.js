const tg = window.Telegram.WebApp;
const pupil = document.getElementById('pupil');
let selectedService = "";

tg.expand();

// Предел движения зрачка внутри яблока
const moveLimit = 30; 

document.addEventListener('mousemove', (e) => {
    updatePupilPosition(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    updatePupilPosition(touch.clientX, touch.clientY);
});

function updatePupilPosition(x, y) {
    const offX = (x - window.innerWidth / 2) / (window.innerWidth / 2);
    const offY = (y - window.innerHeight / 2) / (window.innerHeight / 2);

    // Поскольку само яблоко повернуто на 45 градусов, нам нужно 
    // скомпенсировать этот поворот в координатах движения
    // чтобы зрачок ходил ровно "влево-вправо", а не "наискосок"
    
    if (pupil) {
        // Мы используем translate внутри "перевернутого" контейнера,
        // поэтому нам не нужно вручную поворачивать координаты
        pupil.style.transform = `translate(${offX * moveLimit}px, ${offY * moveLimit}px)`;
    }
}

// Функции выбора и заказа (не меняем)
window.selectService = function(element, name) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
    element.classList.add('selected');
    selectedService = name;
    tg.HapticFeedback.impactOccurred('light');
};

window.goToChat = function() {
    if (!selectedService) {
        tg.showAlert("Сначала выбери услугу!");
        return;
    }
    const message = encodeURIComponent(`Привет! Я хочу заказать услугу: ${selectedService}`);
    tg.openTelegramLink(`https://t.me/zxcLITERR?text=${message}`);
};
