window.onload = function() {
    const pupil = document.getElementById('pupil');
    let selectedServiceName = "";
    function updateEye(x, y) {
        const eyeBox = document.querySelector('.eye-box');
        if (!eyeBox) return;
        const box = eyeBox.getBoundingClientRect();
        const centerX = box.left + box.width / 2;
        const centerY = box.top + box.height / 2;
        const angle = Math.atan2(y - centerY, x - centerX);
        const distance = 30; 
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        if (pupil) { pupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`; }
    }
    document.addEventListener('mousemove', (e) => { updateEye(e.clientX, e.clientY); });
    document.addEventListener('touchmove', (e) => { if(e.touches[0]) updateEye(e.touches[0].clientX, e.touches[0].clientY); });
    window.selectService = function(element, name) {
        document.querySelectorAll('.card').forEach(card => card.classList.remove('selected'));
        element.classList.add('selected');
        selectedServiceName = name;
    };
    window.goToChat = function() {
        if (!selectedServiceName) { alert("Выберите услугу!"); return; }
        const text = encodeURIComponent("Привет! Хочу заказать: " + selectedServiceName);
        const link = "https://t.me/zxcLITERR?text=" + text;
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.openTelegramLink(link);
        } else { window.open(link, '_blank'); }
    };
    if (window.Telegram && window.Telegram.WebApp) { window.Telegram.WebApp.ready(); window.Telegram.WebApp.expand(); }
};