if (document.querySelector(".profile-card")) {
  function updateTime() {
    const timeElement = document.querySelector(
      '[data-testid="test-user-time"]'
    );
    if (timeElement) {
      timeElement.textContent = Date.now();
    }
  }

  updateTime();
  setInterval(updateTime, 1000); 

  const socialLinks = document.querySelectorAll(".user-social-links a");

  window.addEventListener("DOMContentLoaded", () => {
    const avatarElement = document.querySelector(
      '[data-testid="test-user-avatar"]'
    );
    const savedAvatar = localStorage.getItem("profileAvatar");

    if (avatarElement && savedAvatar) {
      avatarElement.src = savedAvatar;
    }
  });

  function changeAvatar(input) {
    const avatarElement = document.querySelector(
      '[data-testid="test-user-avatar"]'
    );
    if (!avatarElement || !input.files || !input.files[0]) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const imageData = e.target.result;
      avatarElement.src = imageData;
      localStorage.setItem("profileAvatar", imageData);
    };
    reader.readAsDataURL(input.files[0]);
  }

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
  window.changeAvatar = changeAvatar;
}
