document.addEventListener("DOMContentLoaded", function () {
  const typewriterText = document.querySelector(".typewriter-text");
  if (!typewriterText) return;

  const text = typewriterText.textContent;
  typewriterText.textContent = "";

  let index = 0;
  let isDeleting = false;
  const speed = 150;

  function startTyping() {
    setInterval(() => {
      if (!isDeleting) {
        typewriterText.textContent = text.substring(0, index);
        index++;
        if (index > text.length) {
          isDeleting = true;
          index = text.length - 1;
        }
      } else {
        typewriterText.textContent = text.substring(0, index);
        index--;
        if (index < 0) {
          isDeleting = false;
          index = 1;
        }
      }
    }, speed);
  }

  startTyping();
});

function hamburg() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.add("active");
}

function cancel() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.remove("active");
}
