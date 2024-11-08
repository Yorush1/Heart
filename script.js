const maxHearts = 10; 
const hearts = [];

document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    document.body.appendChild(heart);

    hearts.push(heart);

    setTimeout(() => {
        heart.remove();
        hearts.shift();
    }, 2000);

    if (hearts.length > maxHearts) {
        hearts[0].remove();
        hearts.shift();
    }
});



const maxLove = 6;

function createFallingLove() {

    const currentHearts = document.querySelectorAll('.love').length;
    
    if (currentHearts < maxHearts) {
        const love = document.createElement('div');
        love.classList.add('love');
        love.textContent = '💞';

        const startPosX = Math.random() * window.innerWidth;
        const size = Math.random() * 20 + 20;
        const duration = Math.random() * 10 + 8;

        love.style.left = `${startPosX}px`;
        love.style.fontSize = `${size}px`;
        love.style.animationDuration = `${duration}s`;

        document.body.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, duration * 1000);
    }
}

setInterval(createFallingLove, 1000);

