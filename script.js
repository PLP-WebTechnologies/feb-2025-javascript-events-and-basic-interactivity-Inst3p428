// Button click
const btn = document.getElementById("action-btn");
btn.addEventListener("click", () => {
  btn.textContent = "Clicked!";
  btn.classList.toggle("secret");
});

// Double click / long press
let timer;
btn.addEventListener("mousedown", () => {
  timer = setTimeout(() => {
    alert("Secret Action Activated!");
  }, 1000);
});
btn.addEventListener("mouseup", () => clearTimeout(timer));

// Keypress detection
document.addEventListener("keydown", (e) => {
  document.getElementById("key-output").textContent = e.key;
});

// Image gallery
document.querySelectorAll("#image-gallery img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("main-image").src = img.dataset.src;
  });
});

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
  });
});

// Form validation with real-time feedback
const password = document.getElementById("password");
const feedback = document.getElementById("password-feedback");
password.addEventListener("input", () => {
  if (password.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
  }
});

document.getElementById("demo-form").addEventListener("submit", e => {
  if (!password.checkValidity()) {
    e.preventDefault();
    feedback.textContent = "Please fix password requirements before submitting.";
  }
});
