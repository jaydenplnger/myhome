/* ==========================================
   YOUR STORY
   script.js
========================================== */

const openButton = document.getElementById("openBook");
const music = document.getElementById("natureMusic");
const hero = document.querySelector(".hero");

const hiddenElements = document.querySelectorAll(".hidden");

/* Open Book */

openButton.addEventListener("click", () => {

    hero.style.transition = "1s";

    hero.style.opacity = "0";

    hero.style.transform = "translateY(-50px)";

    setTimeout(() => {

        hero.style.display = "none";

        document.querySelector(".intro")
        .scrollIntoView({

            behavior: "smooth"

        });

    }, 900);

    music.volume = 0.35;

    music.play().catch(() => {});

});

/* Reveal on Scroll */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

hiddenElements.forEach(element => {

    observer.observe(element);

});

/* Small Floating Effect */

const polaroids = document.querySelectorAll(".polaroid");

polaroids.forEach((card,index)=>{

    card.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-8px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:3500 + index*500,

            iterations:Infinity

        }

    );

});

/* Smooth Button Hover */

openButton.addEventListener("mouseenter",()=>{

    openButton.style.transform="scale(1.05)";

});

openButton.addEventListener("mouseleave",()=>{

    openButton.style.transform="scale(1)";

});
