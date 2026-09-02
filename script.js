/* =========================================================
   BISWAKARMA CYCLE STORE
   JAVASCRIPT FILE
========================================================= */


/* =========================================================
   01. MOBILE HAMBURGER MENU
========================================================= */

/* ----- 01.01 GET MENU ELEMENTS ----- */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");


/* ----- 01.02 TOGGLE MOBILE MENU ----- */

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const icon = menuToggle.querySelector("i");


        /* ----- 01.03 CHANGE MENU ICON ----- */

        if (navbar.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   02. SMOOTH SCROLL FOR INTERNAL NAVIGATION LINKS
========================================================= */

/* ----- 02.01 SELECT ALL INTERNAL LINKS ----- */

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);


/* ----- 02.02 ADD SMOOTH SCROLL EVENT ----- */

internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");


        /* ----- CHECK VALID TARGET ----- */

        if (!targetId || targetId === "#") {

            return;

        }


        /* ----- 02.03 FIND TARGET SECTION ----- */

        const targetSection = document.querySelector(
            targetId
        );


        if (targetSection) {

            event.preventDefault();


            /* ----- 02.04 GET HEADER HEIGHT ----- */

            const headerElement =
                document.querySelector(".header");


            const headerHeight =
                headerElement.offsetHeight;


            /* ----- 02.05 CALCULATE SCROLL POSITION ----- */

            const targetPosition =
                targetSection.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;


            /* ----- 02.06 SMOOTH SCROLL ----- */

            window.scrollTo({

                top: targetPosition,
                behavior: "smooth"

            });


            /* =================================================
               02.07 CLOSE MOBILE MENU AFTER LINK CLICK
            ================================================= */

            if (
                navbar &&
                navbar.classList.contains("active")
            ) {

                navbar.classList.remove("active");


                const icon =
                    menuToggle.querySelector("i");


                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

});


/* =========================================================
   03. ACTIVE NAVIGATION LINK ON SCROLL
========================================================= */

/* ----- 03.01 SELECT ALL PAGE SECTIONS ----- */

const sections = document.querySelectorAll(
    "section[id]"
);


/* ----- 03.02 SELECT NAVIGATION LINKS ----- */

const navLinks = document.querySelectorAll(
    ".nav-link"
);


/* ----- 03.03 UPDATE ACTIVE LINK ON SCROLL ----- */

window.addEventListener("scroll", function () {

    const scrollPosition =
        window.scrollY + 120;


    /* ----- 03.04 CHECK EACH SECTION ----- */

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;


        const sectionHeight =
            section.offsetHeight;


        const sectionId =
            section.getAttribute("id");


        /* ----- 03.05 CHECK CURRENT SECTION ----- */

        if (

            scrollPosition >= sectionTop &&

            scrollPosition <
            sectionTop + sectionHeight

        ) {


            /* ----- REMOVE CURRENT ACTIVE LINKS ----- */

            navLinks.forEach(function (link) {

                link.classList.remove("active");

            });


            /* ----- FIND CURRENT SECTION LINK ----- */

            const activeLink =
                document.querySelector(

                    '.nav-link[href="#' +
                    sectionId +
                    '"]'

                );


            /* ----- ADD ACTIVE CLASS ----- */

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

});


/* =========================================================
   04. HEADER SHADOW ON SCROLL
========================================================= */

/* ----- 04.01 SELECT HEADER ----- */

const header =
    document.querySelector(".header");


/* ----- 04.02 ADD / REMOVE HEADER SHADOW ----- */

window.addEventListener("scroll", function () {

    if (header) {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 8px 25px rgba(15, 42, 42, 0.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }

});


/* =========================================================
   END OF JAVASCRIPT FILE
========================================================= */