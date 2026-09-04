/* =========================================================
   TEACHER'S DAY SURPRISE
========================================================= */

/* =========================================================
   PASSWORD
========================================================= */
const CORRECT_PASSWORD = "638770";

const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const websiteContent = document.getElementById("websiteContent");

function checkPassword() {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === CORRECT_PASSWORD) {
    passwordError.classList.remove("show");
    passwordScreen.classList.add("hidden");
    websiteContent.classList.remove("locked");
    websiteContent.classList.add("unlocked");

    setTimeout(() => {
      passwordScreen.style.display = "none";
    }, 800);

    passwordInput.value = "";
  } else {
    passwordError.classList.add("show");
    passwordInput.value = "";
    passwordInput.focus();

    passwordInput.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" }
      ],
      {
        duration: 400
      }
    );
  }
}

/* =========================================================
   ENTER KEY FOR PASSWORD
========================================================= */
passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});

/* =========================================================
   START SURPRISE
========================================================= */
function startSurprise() {
  nextSection("message1");
}

/* =========================================================
   CHANGE SECTION
========================================================= */
function nextSection(sectionId) {
  const current = document.querySelector(".screen.active");

  if (current) {
    current.classList.remove("active");
  }

  setTimeout(() => {
    const next = document.getElementById(sectionId);

    if (next) {
      next.classList.add("active");
      next.scrollTop = 0;
    }
  }, 150);
}

/* =========================================================
   APPRECIATION CARD
========================================================= */
function openCard(card) {
  card.classList.toggle("open");
}

/* =========================================================
   RESTART
========================================================= */
function restart() {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  const opening = document.getElementById("opening");
  if (opening) {
    opening.classList.add("active");
    opening.scrollTop = 0;
  }

  document.querySelectorAll(".app-card").forEach((card) => {
    card.classList.remove("open");
  });

  window.scrollTo(0, 0);
}

/* =========================================================
   CLICK SPARKLE EFFECT
========================================================= */
document.addEventListener("click", function (event) {
  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement("span");
    sparkle.innerHTML = "✦";

    sparkle.style.position = "fixed";
    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.color = "#e8c16d";
    sparkle.style.fontSize = Math.random() * 10 + 10 + "px";
    sparkle.style.zIndex = "9999";

    document.body.appendChild(sparkle);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 70 + 30;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    sparkle.animate(
      [
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
      ],
      {
        duration: 700,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      sparkle.remove();
    }, 700);
  }
});

/* =========================================================
   KEYBOARD SUPPORT
========================================================= */
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const activeScreen = document.querySelector(".screen.active");

    if (activeScreen && activeScreen.id === "opening") {
      startSurprise();
    }
  }
});
