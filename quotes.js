const quotes = [
  "Believe you can and you're halfway there.",
  "Stay focused and never give up.",
  "Success is the sum of small efforts repeated daily.",
  "The best way to get started is to quit talking and begin doing.",
  "Push yourself, because no one else is going to do it for you.",
  "Small steps every day lead to big results.",
  "Discipline is choosing what you want most over what you want now.",
  "Be stronger than your excuses.",
  "You don’t have to be perfect. Just consistent.",
  "Every day is a new beginning. Take a deep breath and start again."
];

function loadQuote() {
  const quoteText = document.getElementById("quoteText");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = randomQuote;
}

document.getElementById("refreshQuoteBtn").addEventListener("click", loadQuote);
window.addEventListener("load", loadQuote);
