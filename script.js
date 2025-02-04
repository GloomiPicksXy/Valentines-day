const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const finalScreen = document.getElementById('finalScreen');

const yesButton1 = document.getElementById('yesButton1');
const noButton1 = document.getElementById('noButton1');

const plazaButton = document.getElementById('plaza');
const bedButton = document.getElementById('bed');
const anywhereButton = document.getElementById('anywhere');

const yesButton3 = document.getElementById('yesButton3');
const noButton3 = document.getElementById('noButton3');

// Question 1: Will you be my valentine?
yesButton1.addEventListener('click', () => {
  question1.classList.add('hidden');
  question2.classList.remove('hidden');
});

noButton1.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - noButton1.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton1.offsetHeight);
  noButton1.style.position = 'absolute';
  noButton1.style.left = `${x}px`;
  noButton1.style.top = `${y}px`;
  yesButton1.style.transform = 'scale(1.2)';
});

// Question 2: Which place you trying to go to?
plazaButton.addEventListener('click', () => {
  question2.classList.add('hidden');
  question3.classList.remove('hidden');
});

bedButton.addEventListener('click', () => {
  question2.classList.add('hidden');
  question3.classList.remove('hidden');
});

anywhereButton.addEventListener('click', () => {
  question2.classList.add('hidden');
  question3.classList.remove('hidden');
});

// Question 3: Can you libre me am broke?
yesButton3.addEventListener('click', () => {
  question3.classList.add('hidden');
  finalScreen.classList.remove('hidden');
});

noButton3.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - noButton3.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton3.offsetHeight);
  noButton3.style.position = 'absolute';
  noButton3.style.left = `${x}px`;
  noButton3.style.top = `${y}px`;
  yesButton3.style.transform = 'scale(1.2)';
});
