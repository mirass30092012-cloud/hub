body {
    background-color: #0a0a0a;
    color: #00e6ff;
    font-family: 'Courier New', monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 0;
    overflow: hidden;
}

.eye-container {
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.eye-outer {
    width: 130px;
    height: 130px;
    background: #fff;
    transform: rotate(45deg);
    /* Исправлено: теперь углы смотрят влево и вправо */
    border-radius: 100px 15px 100px 15px; 
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 35px #00e6ff, inset 0 0 20px rgba(0,0,0,0.2);
    overflow: hidden;
}

.pupil {
    width: 45px;
    height: 45px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    /* Убираем влияние поворота родителя на движение зрачка */
    transform: rotate(-45deg); 
    transition: transform 0.08s ease-out;
    box-shadow: 0 0 10px rgba(0,0,0,0.8);
}

.header h1 {
    font-size: 26px;
    margin: 10px 0;
    text-shadow: 0 0 15px #00e6ff;
    text-align: center;
}

.status {
    font-size: 11px;
    margin-bottom: 25px;
    letter-spacing: 2px;
    animation: blink 2s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
}

.services { width: 100%; max-width: 400px; }

.card {
    background: rgba(0, 230, 255, 0.05);
    border: 1px solid rgba(0, 230, 255, 0.3);
    padding: 15px;
    margin-bottom: 12px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.3s;
}

.card.selected {
    background: rgba(0, 230, 255, 0.2);
    border-color: #00e6ff;
    box-shadow: 0 0 15px rgba(0, 230, 255, 0.4);
}

#order-btn {
    margin-top: 15px;
    padding: 18px 50px;
    background: #00e6ff;
    color: #000;
    border: none;
    border-radius: 40px;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0 0 30px #00e6ff;
    cursor: pointer;
}
