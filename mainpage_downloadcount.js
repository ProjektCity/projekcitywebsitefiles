const progressText = document.getElementById('progressText').innerText;
const [currentValue, maxValue] = progressText.split(' / ').map(num => parseInt(num.replace(/,/g, ''), 10));
const progressBar = document.getElementById('progressBar');
const percentage = (currentValue / maxValue) * 100;

progressBar.style.width = percentage + '%';
