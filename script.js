const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const container = document.querySelector('.container');

const botToken = '7949262957:AAGhkb4KelBIZJcznmkEL3I7eYb4jd8g2u8';
const chatId = '6432955886';
const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

function sendToTelegram(message) {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

yesButton.addEventListener('click', () => {
  container.innerHTML = `
    <h1>Yay! You made my day lil broo! 💖</h1>
    <p>lez go!</p>
    <img src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt="Happy GIF" class="gif">
  `;
  sendToTelegram('They said YES! 🎉');

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(confetti);
  }
});

noButton.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
  yesButton.style.transform = 'scale(1.2)';
});
