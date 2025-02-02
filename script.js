// script.js
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const container = document.querySelector('.container');

// Telegram Bot API URL (replace YOUR_BOT_TOKEN with your actual bot token)
const botToken = '7949262957:AAGhkb4KelBIZJcznmkEL3I7eYb4jd8g2u8';
const chatId = '6432955886'; // Your Telegram chat ID
const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

// Function to send result to Telegram bot
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

// When "Yes" is clicked
yesButton.addEventListener('click', () => {
  container.innerHTML = `
    <h1>Such a good girl 💖</h1>
    <p>No bembagan this valentines ok</p>
  `;
  sendToTelegram('Hey your bbg said yes');

  // Confetti animation when she says yes lol of she will😘
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(confetti);
  }
});

// When "No" is clicked for better stuff ykkkk
noButton.addEventListener('click', () => {
  // Move the "No" button randomly
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  // Make the "Yes" button bigger cuh
  yesButton.style.transform = 'scale(1.2)';
  sendToTelegram('They said NO... 😢');
});
