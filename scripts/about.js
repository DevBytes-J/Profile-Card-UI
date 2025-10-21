// Tab Navigation
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.dataset.tab;

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    button.classList.add("active");
    document
      .querySelector(`[data-content="${targetTab}"]`)
      .classList.add("active");
  });
});

// Stats Counter Animation 
function animateCounter(element) {
  const target = parseInt(element.dataset.count);
  let current = 0;
  const increment = target / 50; // smooth speed
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + "+";
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

document
  .querySelectorAll(".stat-number")
  .forEach((stat) => observer.observe(stat));

// Reflection Note  
const noteKey = "about.futureNote";
const textarea = document.querySelector(
  '[data-testid="test-about-future-note"]'
);
const saveBtn = document.querySelector(".save-btn");
const clearBtn = document.querySelector(".clear-btn");
const wordCount = document.querySelector(".word-count");

if (textarea && saveBtn && clearBtn && wordCount) {
  // Load existing note
  const saved = localStorage.getItem(noteKey);
  if (saved) {
    textarea.value = saved;
    updateWordCount();
  }

  // character count
  function updateWordCount() {
    const text = textarea.value.trim();
    const words = text.length === 0 ? 0 : text.split(/\s+/).length;
    const chars = text.length;
    wordCount.textContent = ` • ${words} ${
      words === 1 ? "word" : "words"
    }, ${chars} ${chars === 1 ? "character" : "characters"}`;
  }

  textarea.addEventListener("input", () => {
    updateWordCount();
    saveBtn.disabled = textarea.value.trim().length === 0;
    saveBtn.classList.toggle("active", !saveBtn.disabled);
  });

  // Save Note
  saveBtn.addEventListener("click", () => {
    if (textarea.value.trim().length === 0) return;

    localStorage.setItem(noteKey, textarea.value);
    saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved!';
    setTimeout(() => {
      saveBtn.innerHTML = '<i class="fas fa-save"></i> Save Note';
    }, 2000);
  });

  // Clear Note 
  clearBtn.addEventListener("click", () => {
    if (textarea.value.trim().length === 0) return;
    const confirmClear = confirm("Are you sure you want to clear your note?");
    if (confirmClear) {
      textarea.value = "";
      localStorage.removeItem(noteKey);
      updateWordCount();
      saveBtn.disabled = true;
      saveBtn.classList.remove("active");
    }
  });

  // Keyboard shortcut
  textarea.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      saveBtn.click();
    }
  });
}
