function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
  document.getElementById("currentDate").textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

const goalInput = document.getElementById("goalInput");
const addGoalBtn = document.getElementById("addGoalBtn");
const goalList = document.getElementById("goalList");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

function saveGoals() {
  localStorage.setItem("goals", JSON.stringify(goals));
}

function renderGoals() {
  goalList.innerHTML = "";

  if (goals.length === 0) {
    goalList.innerHTML = "<li style='opacity: 0.5;'>No goals yet.</li>";
    return;
  }

  goals.forEach((goal, index) => {
    const li = document.createElement("li");
    li.className = "goal-item";

    const span = document.createElement("span");
    span.textContent = goal;

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => {
      const newGoal = prompt("Edit your goal:", goal);
      if (newGoal !== null && newGoal.trim() !== "") {
        goals[index] = newGoal.trim();
        saveGoals();
        renderGoals();
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
      if (confirm("Delete this goal?")) {
        goals.splice(index, 1);
        saveGoals();
        renderGoals();
      }
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    goalList.appendChild(li);
  });
}

addGoalBtn.onclick = () => {
  const goal = goalInput.value.trim();
  if (goal) {
    goals.push(goal);
    saveGoals();
    renderGoals();
    goalInput.value = "";
  } else {
    alert("⚠️ Please enter a valid goal.");
  }
};

window.onload = () => {
  renderGoals();

  const savedNote = localStorage.getItem("quickNotes");
  if (savedNote) {
    document.getElementById("notesInput").value = savedNote;
  }
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
