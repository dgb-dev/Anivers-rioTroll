function openGift() {
    // Mostrar a mensagem
    document.getElementById('message').classList.remove('hidden');
    
    // Tocar a música
    document.getElementById('audio').play();

    // Exibir o botão com animação
    const button = document.getElementById('fugir-btn');
    button.classList.remove('hidden');
    button.classList.add('show'); // Adiciona a classe para a animação

    // Adicionar confetes
    setTimeout(createConfetti, 300);
}


function createConfetti() {
    const confettiCount = 50; // Limitar o número de confetes
    const body = document.body;

    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        body.appendChild(confetti);

        // Remover confetes após 5 segundos para não sobrecarregar a página
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function getRandomColor() {
    const colors = ['#FF4081', '#FFD700', '#32CD32', '#1E90FF', '#FF4500'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function moveButton() {
    const button = document.getElementById('fugir-btn');

    // Obter valores aleatórios para a nova posição
    const newLeft = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
    const newTop = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';

    // Reposicionar o botão
    button.style.left = newLeft;
    button.style.top = newTop;
}
