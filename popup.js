function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
  document.getElementById("currentDate").textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

// Save Goal
const goalInput = document.getElementById("goalInput");
const savedGoalText = document.getElementById("savedGoalText");
document.getElementById("saveGoalBtn").onclick = () => {
  const goal = goalInput.value.trim();
  localStorage.setItem("dailyGoal", goal);
  savedGoalText.textContent = goal || "None";
};


window.onload = () => {
  const savedGoal = localStorage.getItem("dailyGoal");
  if (savedGoal) savedGoalText.textContent = savedGoal;

  const savedNote = localStorage.getItem("quickNote");
  if (savedNote) document.getElementById("noteInput").value = savedNote;
};


document.addEventListener('DOMContentLoaded', () => {
  const savedNote = localStorage.getItem('quickNotes');
  if (savedNote) {
    document.getElementById('notesInput').value = savedNote;
  }
});


document.getElementById('saveNotesBtn').addEventListener('click', () => {
  const note = document.getElementById('notesInput').value;
  localStorage.setItem('quickNotes', note);
  alert("✅ Notes saved!");
});



document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeBtn");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
});



document.getElementById("affirmationBtn").onclick = () => {
  const box = document.getElementById("affirmationBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
};
