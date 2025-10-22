// Tab switching
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

// Extra thoughts expand/collapse
const expandBtn = document.getElementById("expandBtn");
const extraContent = document.getElementById("extraContent");
const extraHeader = document.querySelector(".extra-header");

if (expandBtn && extraContent) {
  // Initially show the content
  extraContent.classList.add("show");
  expandBtn.classList.add("active");

  const toggleExtra = () => {
    extraContent.classList.toggle("show");
    expandBtn.classList.toggle("active");
  };

  expandBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleExtra();
  });

  extraHeader.addEventListener("click", toggleExtra);
}

// Animated counter for stats
function animateCounter(element) {
  const target = parseInt(element.dataset.count);
  let current = 0;
  const increment = target / 50;
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

// Trigger counter animation when visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".stat-number").forEach((stat) => {
  observer.observe(stat);
});

// Note functionality
const noteKey = "about.futureNote";
const textarea = document.querySelector(
  '[data-testid="test-about-future-note"]'
);
const saveBtn = document.querySelector(".save-btn");
const clearBtn = document.querySelector(".clear-btn");
const wordCount = document.querySelector(".word-count");

if (textarea) {
  // Load saved note
  const saved = localStorage.getItem(noteKey);
  if (saved) {
    textarea.value = saved;
    updateWordCount();
    updateSaveButton();
  }

  // Update word count
  function updateWordCount() {
    const text = textarea.value.trim();
    const words = text.length === 0 ? 0 : text.split(/\s+/).length;
    const chars = text.length;
    wordCount.textContent = ` • ${words} words, ${chars} characters`;
  }

  // Update save button state
  function updateSaveButton() {
    if (textarea.value.trim().length > 0) {
      saveBtn.classList.add("active");
      saveBtn.disabled = false;
    } else {
      saveBtn.classList.remove("active");
      saveBtn.disabled = true;
    }
  }

  textarea.addEventListener("input", () => {
    updateWordCount();
    updateSaveButton();
  });

  // Save note
  saveBtn.addEventListener("click", () => {
    if (textarea.value.trim().length > 0) {
      localStorage.setItem(noteKey, textarea.value);
      saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved!';
      setTimeout(() => {
        saveBtn.innerHTML = '<i class="fas fa-save"></i> Save Note';
      }, 2000);
    }
  });

  // Clear note
  clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear your note?")) {
      textarea.value = "";
      localStorage.removeItem(noteKey);
      updateWordCount();
      updateSaveButton();
    }
  });

  // Auto-save on Ctrl/Cmd + S
  textarea.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      if (textarea.value.trim().length > 0) {
        saveBtn.click();
      }
    }
  });
}
