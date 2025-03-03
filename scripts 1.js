
function startGame() {
    const playerName = document.getElementById('playerName').value;
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    if (playerName) {
        welcomeMessage.textContent = `Boas Vindas, ${playerName}! A aventura te espera...`;
        setTimeout(() => {
            location.href = 'index 2/Projeto DeD.html';  // Substituir por location.href = 'url_proxima_pagina.html';
        }, 1500);
    } else {
        welcomeMessage.textContent = 'Por favor, digite seu nome para iniciar o jogo.';
    }
}