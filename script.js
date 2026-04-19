window.onload = function() {
    // Ищем глаз по тегу img внутри блока eye-box
    const eye = document.querySelector('.eye-box img');
    let selectedServiceName = "";

    function updateEye(x, y) {
        if (!eye) return;
        
        const box = eye.getBoundingClientRect();
        const centerX = box.left + box.width / 2;
        const centerY = box.top + box.height / 2;
        
        const angle = Math.atan2(y - centerY, x - centerX);
        // Дистанция, на которую глаз будет смещаться (не ставь много, чтобы не "улетел")
        const distance = 15; 
        
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        // Двигаем всю картинку глаза
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
        eye.style.transition = "transform 0.1s ease-out"; // Плавность
    }

    document.addEventListener('mousemove', (e) => { updateEye(e.clientX, e.clientY); });
    document.addEventListener('touchmove', (e) => { 
        if(e.touches[0]) updateEye(e.touches[0].clientX, e.touches[0].clientY); 
    });

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
        } else { 
            window.open(link, '_blank'); 
        }
    };

    if (window.Telegram && window.Telegram.WebApp) { 
        window.Telegram.WebApp.ready(); 
        window.Telegram.WebApp.expand(); 
    }
};
