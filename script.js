/* =========================================================
   TEACHER'S DAY WEBSITE
   INTERACTIVE JAVASCRIPT
========================================================= */


/* =========================================================
   PASSWORD
========================================================= */

const correctPassword = "638770";


function checkPassword() {

    const passwordInput =
        document.getElementById("passwordInput");

    const passwordScreen =
        document.getElementById("passwordScreen");

    const mainPage =
        document.getElementById("mainPage");

    const errorMessage =
        document.getElementById("errorMessage");


    if (passwordInput.value === correctPassword) {

        errorMessage.textContent = "";

        passwordScreen.style.opacity = "0";
        passwordScreen.style.transform = "scale(1.04)";

        passwordScreen.style.transition =
            "opacity .8s ease, transform .8s ease";


        setTimeout(function () {

            passwordScreen.style.display = "none";

            mainPage.style.display = "block";

            document.body.style.overflowX = "hidden";

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });


        }, 700);

    }

    else {

        errorMessage.textContent =
            "That password isn't correct. Please try again.";

        passwordInput.value = "";

        passwordInput.focus();

        passwordInput.animate(
            [
                {
                    transform: "translateX(0)"
                },
                {
                    transform: "translateX(-8px)"
                },
                {
                    transform: "translateX(8px)"
                },
                {
                    transform: "translateX(-5px)"
                },
                {
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 350
            }
        );

    }

}


/* =========================================================
   ENTER KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            const passwordScreen =
                document.getElementById(
                    "passwordScreen"
                );


            if (
                passwordScreen &&
                passwordScreen.style.display !== "none"
            ) {

                checkPassword();

            }

        }

    }
);


/* =========================================================
   BACKGROUND PARTICLES
   THESE ARE ALWAYS ACTIVE
========================================================= */

const particleContainer =
    document.getElementById("particles");


function createParticle() {

    if (!particleContainer) return;


    const particle =
        document.createElement("span");

    particle.classList.add("particle");


    const size =
        Math.random() * 3 + 1;


    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.bottom =
        Math.random() * -20 + "%";


    const duration =
        Math.random() * 12 + 8;


    particle.style.animationDuration =
        duration + "s";


    particle.style.animationDelay =
        Math.random() * -15 + "s";


    particleContainer.appendChild(
        particle
    );


    setTimeout(function () {

        particle.remove();

    }, (duration + 5) * 1000);

}


/* Create initial particles */

for (
    let i = 0;
    i < 45;
    i++
) {

    createParticle();

}


/* Continue creating particles */

setInterval(
    createParticle,
    450
);


/* =========================================================
   MOUSE LIGHT EFFECT
   DESKTOP ONLY
========================================================= */

const ambientBackground =
    document.querySelector(
        ".ambient-background"
    );


if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    document.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (event.clientX /
                    window.innerWidth) *
                100;

            const y =
                (event.clientY /
                    window.innerHeight) *
                100;


            if (ambientBackground) {

                ambientBackground.style.background =
                    `
                    radial-gradient(
                        circle at ${x}% ${y}%,
                        rgba(190,70,220,.16),
                        transparent 28%
                    ),
                    radial-gradient(
                        circle at 80% 70%,
                        rgba(255,82,170,.10),
                        transparent 30%
                    ),
                    #08040d
                    `;

            }

        }
    );

}


/* =========================================================
   TOUCH EFFECT
   MOBILE FRIENDLY
========================================================= */

document.addEventListener(
    "touchstart",
    function (event) {

        const touch =
            event.touches[0];

        if (!touch) return;


        const ripple =
            document.createElement("div");


        ripple.style.position =
            "fixed";

        ripple.style.left =
            touch.clientX + "px";

        ripple.style.top =
            touch.clientY + "px";

        ripple.style.width =
            "8px";

        ripple.style.height =
            "8px";

        ripple.style.borderRadius =
            "50%";

        ripple.style.border =
            "1px solid rgba(245,217,138,.7)";

        ripple.style.pointerEvents =
            "none";

        ripple.style.zIndex =
            "9998";

        ripple.style.transform =
            "translate(-50%, -50%)";

        ripple.style.boxShadow =
            "0 0 20px rgba(245,217,138,.5)";

        document.body.appendChild(
            ripple
        );


        ripple.animate(
            [
                {
                    width: "8px",
                    height: "8px",
                    opacity: .8
                },
                {
                    width: "100px",
                    height: "100px",
                    opacity: 0
                }
            ],
            {
                duration: 700,
                easing: "ease-out"
            }
        );


        setTimeout(
            function () {
                ripple.remove();
            },
            700
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   CARD TILT EFFECT
   DESKTOP ONLY
========================================================= */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    const cards =
        document.querySelectorAll(
            ".intro-card, .letter-card"
        );


    cards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -1.5;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    1.5;


                card.style.transform =
                    `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-3px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   PASSWORD INPUT FOCUS
========================================================= */

window.addEventListener(
    "load",
    function () {

        const input =
            document.getElementById(
                "passwordInput"
            );


        if (input) {

            setTimeout(
                function () {

                    input.focus();

                },
                500
            );

        }

    }
);