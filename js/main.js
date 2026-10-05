/* =========================================================
   ACHIRA SADHARANGA PORTFOLIO
   Complete JavaScript
========================================================= */


/* =========================================================
   ELEMENT REFERENCES
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const header = document.querySelector(".header");

const cursorGlow = document.getElementById("cursorGlow");

const professionText = document.getElementById("professionText");


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        const open =
            navMenu.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            String(open)
        );

    });


    document
        .querySelectorAll(".nav-link")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "open"
                    );

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function updateHeader() {

    if (!header) {
        return;
    }


    header.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();


/* =========================================================
   SOFT CURSOR GLOW
========================================================= */

document.addEventListener(
    "mousemove",
    (event) => {

        if (!cursorGlow) {
            return;
        }


        cursorGlow.style.left =
            `${event.clientX}px`;


        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================================
   ANIMATED PROFESSION TEXT
========================================================= */

const professions = [

    "Data Science",

    "Artificial Intelligence",

    "Machine Learning",

    "Data Analytics",

    "Software Development"

];


let professionIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeProfession() {

    if (!professionText) {
        return;
    }


    const currentWord =
        professions[
            professionIndex
        ];


    if (!deleting) {

        professionText.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );


        letterIndex++;


        if (
            letterIndex ===
            currentWord.length
        ) {

            deleting = true;


            setTimeout(
                typeProfession,
                1500
            );


            return;

        }

    } else {

        professionText.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );


        letterIndex--;


        if (
            letterIndex === 0
        ) {

            deleting = false;


            professionIndex =
                (
                    professionIndex + 1
                )
                %
                professions.length;

        }

    }


    setTimeout(
        typeProfession,
        deleting
            ? 40
            : 70
    );

}


typeProfession();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNav() {

    let currentSection =
        "home";


    sections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop
                -
                220;


            if (
                window.scrollY
                >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    navLinks.forEach(
        (link) => {

            link.classList.toggle(

                "active",

                link.getAttribute(
                    "href"
                )
                ===
                `#${currentSection}`

            );

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNav,
    {
        passive: true
    }
);


updateActiveNav();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        (
            entries,
            observer
        ) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   ANIMATED STATISTICS
========================================================= */

const statNumbers =
    document.querySelectorAll(
        ".stat-number"
    );


function animateStat(stat) {

    const target =
        Number(
            stat.dataset.target
        );


    const suffix =
        stat.dataset.suffix
        ||
        "";


    const duration =
        1500;


    const start =
        performance.now();


    function update(now) {

        const progress =
            Math.min(
                (
                    now - start
                )
                /
                duration,
                1
            );


        /*
        Ease-out animation.
        */

        const eased =
            1
            -
            Math.pow(
                1 - progress,
                3
            );


        stat.textContent =
            `${Math.floor(
                target * eased
            )}${suffix}`;


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                update
            );

        } else {

            stat.textContent =
                `${target}${suffix}`;

        }

    }


    requestAnimationFrame(
        update
    );

}


const statObserver =
    new IntersectionObserver(

        (
            entries,
            observer
        ) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateStat(
                            entry.target
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.45
        }

    );


statNumbers.forEach(
    (stat) => {

        statObserver.observe(
            stat
        );

    }
);


/* =========================================================
   SKILLS FILTER
========================================================= */

const skillFilters =
    document.querySelectorAll(
        ".skill-filter"
    );


const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


skillFilters.forEach(
    (filterButton) => {

        filterButton.addEventListener(
            "click",
            () => {

                /*
                Remove active style
                from every filter.
                */

                skillFilters.forEach(
                    (button) => {

                        button.classList.remove(
                            "active"
                        );

                    }
                );


                /*
                Activate clicked filter.
                */

                filterButton
                    .classList
                    .add(
                        "active"
                    );


                const selectedFilter =
                    filterButton
                        .dataset
                        .filter;


                skillCards.forEach(
                    (card) => {

                        const categories =
                            card.dataset
                                .category
                                .split(" ");


                        const shouldShow =

                            selectedFilter
                            ===
                            "all"

                            ||

                            categories.includes(
                                selectedFilter
                            );


                        card.classList.toggle(

                            "skill-hidden",

                            !shouldShow

                        );


                        if (
                            shouldShow
                        ) {

                            card.classList.add(
                                "visible"
                            );

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {


    /* =====================================================
       VEHICLE PROJECT
    ===================================================== */

    vehicle: {

        number:
            "01",

        category:
            "MACHINE LEARNING · XAI · 3D",

        title:
            "Explainable AI & 3D Vehicle Failure Management",

        description:

            "An intelligent predictive maintenance framework for Toyota Aqua / Prius C vehicles. The project combines machine learning, Explainable AI and interactive 3D visualization to help users understand vehicle faults and maintenance recommendations.",


        role:
            "Machine Learning / Research",

        status:
            "Final Year Research · Ongoing",


        technologies: [

            "Python",

            "Scikit-learn",

            "Random Forest",

            "XGBoost",

            "SHAP",

            "LIME",

            "Flask",

            "Three.js"

        ],


        highlights: [

            "Developed Random Forest and XGBoost models for engine overheating and low oil-pressure fault prediction.",

            "Used OBD-II sensor data and simulated fault sequences.",

            "Applied SHAP and LIME to generate transparent model explanations.",

            "Designed an interactive 3D engine visualization concept for identifying affected components.",

            "Designed the system to provide maintenance recommendations alongside predicted faults."

        ]

    },



    /* =====================================================
       PUBLIC PULSE
    ===================================================== */

    pulse: {

        number:
            "02",

        category:
            "NLP · RAG · GRAPH LEARNING",

        title:
            "Public Pulse",

        description:

            "A grounded multilingual civic intelligence and graph learning platform for analyzing Sri Lankan public discourse and academic citation networks.",


        role:
            "AI / ML Development · Group Project",

        status:
            "Completed",


        technologies: [

            "Python",

            "PyTorch",

            "XLM-RoBERTa",

            "NLP",

            "RAG",

            "Gemini",

            "Hugging Face",

            "GCN",

            "GAT",

            "React",

            "TypeScript",

            "Streamlit"

        ],


        highlights: [

            "Built a three-stage XLM-RoBERTa NLP pipeline for noise filtering, policy classification and stance detection.",

            "Developed a Gemini RAG pipeline for grounded citation-backed public sentiment summaries.",

            "Implemented an NLI-based faithfulness auditor for generated claims.",

            "Used GCN and GAT models to classify more than 169,000 academic papers.",

            "Achieved 58.6% GCN accuracy with 3.25× faster training than GAT.",

            "Achieved 278 passing tests across the end-to-end system."

        ]

    },



    /* =====================================================
       TRAFFIC PROJECT
    ===================================================== */

    traffic: {

        number:
            "03",

        category:
            "COMPUTER VISION · ANPR",

        title:
            "Traffic Rule Violation Detection",

        description:

            "An AI-powered traffic monitoring system designed to automatically identify road violations from live camera feeds and recorded video.",


        role:
            "Machine Learning Development",

        status:
            "Development Project",


        technologies: [

            "Python",

            "OpenCV",

            "YOLO",

            "TensorFlow / PyTorch",

            "CNN",

            "ANPR",

            "PostgreSQL",

            "Flask / Django"

        ],


        highlights: [

            "Developed computer vision concepts for red-light violations, illegal parking and speeding detection.",

            "Worked on YOLO-based object detection models.",

            "Implemented an Automatic Number Plate Recognition approach using CNN-based recognition.",

            "Designed evidence storage for violation images, timestamps, locations and number plates.",

            "Planned integration between ML models and a web-based traffic management dashboard."

        ]

    },



    /* =====================================================
       VOW & VISION
    ===================================================== */

    vow: {

        number:
            "04",

        category:
            "UI/UX · PRODUCT DESIGN",

        title:
            "Vow & Vision",

        description:

            "An AI-assisted wedding planning platform designed to simplify vendor management, budgeting and guest coordination through a user-centred interface.",


        role:
            "UI/UX Design · Group Project",

        status:
            "Completed",


        technologies: [

            "Figma",

            "Maze",

            "Human-Centered Design",

            "UI/UX Design"

        ],


        highlights: [

            "Designed a user-centred wedding planning experience.",

            "Created interface and user-flow designs using Figma.",

            "Conducted usability testing using Maze.",

            "Achieved a 100% usability-testing success rate.",

            "Improved the experience through human-centred design principles."

        ]

    }

};


/* =========================================================
   PROJECT MODAL
========================================================= */

const projectModal =
    document.getElementById(
        "projectModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const projectButtons =
    document.querySelectorAll(
        ".project-details-btn"
    );


function openProjectModal(
    projectKey
) {

    const project =
        projectData[
            projectKey
        ];


    if (
        !projectModal
        ||
        !project
    ) {

        return;

    }


    document
        .getElementById(
            "modalProjectNumber"
        )
        .textContent =
            project.number;


    document
        .getElementById(
            "modalCategory"
        )
        .textContent =
            project.category;


    document
        .getElementById(
            "modalTitle"
        )
        .textContent =
            project.title;


    document
        .getElementById(
            "modalDescription"
        )
        .textContent =
            project.description;


    document
        .getElementById(
            "modalRole"
        )
        .textContent =
            project.role;


    document
        .getElementById(
            "modalStatus"
        )
        .textContent =
            project.status;


    /* Technologies */

    const techContainer =
        document.getElementById(
            "modalTechnologies"
        );


    techContainer.innerHTML =
        "";


    project
        .technologies
        .forEach(
            (technology) => {

                const tag =
                    document.createElement(
                        "span"
                    );


                tag.textContent =
                    technology;


                techContainer
                    .appendChild(
                        tag
                    );

            }
        );


    /* Highlights */

    const highlightContainer =
        document.getElementById(
            "modalHighlights"
        );


    highlightContainer.innerHTML =
        "";


    project
        .highlights
        .forEach(
            (highlight) => {

                const item =
                    document.createElement(
                        "p"
                    );


                item.className =
                    "modal-highlight";


                item.textContent =
                    highlight;


                highlightContainer
                    .appendChild(
                        item
                    );

            }
        );


    /* Open */

    projectModal.classList.add(
        "open"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    setTimeout(
        () => {

            modalClose?.focus();

        },
        120
    );

}


/* Close */

function closeProjectModal() {

    if (!projectModal) {
        return;
    }


    projectModal
        .classList
        .remove(
            "open"
        );


    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* Project buttons */

projectButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                openProjectModal(
                    button.dataset.project
                );

            }
        );

    }
);


/* Close button */

modalClose?.addEventListener(
    "click",
    closeProjectModal
);


/* Backdrop */

document
    .querySelector(
        ".project-modal-backdrop"
    )
    ?.addEventListener(
        "click",
        closeProjectModal
    );


/* ESC */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key
            ===
            "Escape"

            &&

            projectModal
                ?.classList
                .contains(
                    "open"
                )
        ) {

            closeProjectModal();

        }

    }
);


/* =========================================================
   TIMELINE SCROLL PROGRESS
========================================================= */

const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );


function updateTimelineProgress() {

    timelineItems.forEach(
        (item) => {

            const rect =
                item.getBoundingClientRect();


            const windowHeight =
                window.innerHeight;


            let progress =
                (
                    windowHeight
                    -
                    rect.top
                )
                /
                (
                    windowHeight
                    +
                    rect.height
                );


            progress =
                Math.max(
                    0,
                    Math.min(
                        progress,
                        1
                    )
                );


            item.style.setProperty(

                "--timeline-progress",

                `${progress * 100}%`

            );

        }
    );

}


window.addEventListener(
    "scroll",
    updateTimelineProgress,
    {
        passive: true
    }
);


window.addEventListener(
    "load",
    updateTimelineProgress
);


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const toast =
    document.getElementById(
        "toast"
    );


function showToast() {

    if (!toast) {
        return;
    }


    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        3500
    );

}


contactForm?.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document
                .getElementById(
                    "name"
                )
                .value
                .trim();


        const email =
            document
                .getElementById(
                    "email"
                )
                .value
                .trim();


        const subject =
            document
                .getElementById(
                    "subject"
                )
                .value
                .trim();


        const message =
            document
                .getElementById(
                    "message"
                )
                .value
                .trim();


        const emailBody =
`Hello Achira,

${message}

From:
${name}

Email:
${email}`;


        const mailtoURL =

            `mailto:a.sadharanga@gmail.com`

            +

            `?subject=${
                encodeURIComponent(
                    subject
                )
            }`

            +

            `&body=${
                encodeURIComponent(
                    emailBody
                )
            }`;


        showToast();


        setTimeout(
            () => {

                window.location.href =
                    mailtoURL;

            },
            450
        );

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date()
            .getFullYear();

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


function updateBackToTop() {

    backToTop
        ?.classList
        .toggle(

            "visible",

            window.scrollY
            >
            700

        );

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    {
        passive: true
    }
);


updateBackToTop();


backToTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }
);


/* =========================================================
   PRELOADER
========================================================= */

const preloader =
    document.getElementById(
        "preloader"
    );


const preloaderProgress =
    document.getElementById(
        "preloaderProgress"
    );


const loaderNumber =
    document.getElementById(
        "loaderNumber"
    );


let loadingValue =
    0;


const loadingInterval =
    setInterval(
        () => {

            loadingValue +=

                Math.floor(
                    Math.random()
                    *
                    8
                )

                +

                3;


            if (
                loadingValue
                >=
                100
            ) {

                loadingValue =
                    100;


                clearInterval(
                    loadingInterval
                );


                setTimeout(
                    () => {

                        preloader
                            ?.classList
                            .add(
                                "hidden"
                            );

                    },
                    250
                );

            }


            if (
                preloaderProgress
            ) {

                preloaderProgress
                    .style
                    .width =
                        `${loadingValue}%`;

            }


            if (
                loaderNumber
            ) {

                loaderNumber
                    .textContent =
                        `${loadingValue}%`;

            }

        },
        55
    );


/* =========================================================
   DARK / LIGHT THEME
========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


const themeColorMeta =
    document.getElementById(
        "themeColorMeta"
    );


const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );


const systemPrefersLight =
    window.matchMedia(
        "(prefers-color-scheme: light)"
    )
    .matches;


let currentTheme =

    savedTheme

    ||

    (
        systemPrefersLight

        ?

        "light"

        :

        "dark"
    );


function applyTheme(
    theme
) {

    document
        .documentElement
        .setAttribute(
            "data-theme",
            theme
        );


    localStorage.setItem(

        "portfolio-theme",

        theme

    );


    if (
        themeColorMeta
    ) {

        themeColorMeta
            .setAttribute(

                "content",

                theme === "light"

                    ?

                    "#f4f5f7"

                    :

                    "#07080a"

            );

    }

}


applyTheme(
    currentTheme
);


themeToggle?.addEventListener(
    "click",
    () => {

        currentTheme =

            currentTheme === "dark"

            ?

            "light"

            :

            "dark";


        applyTheme(
            currentTheme
        );

    }
);


/* =========================================================
   PAGE SCROLL PROGRESS
========================================================= */

const pageProgress =
    document.getElementById(
        "pageProgress"
    );


function updatePageProgress() {

    if (
        !pageProgress
    ) {

        return;

    }


    const scrollTop =
        window.scrollY;


    const documentHeight =

        document
            .documentElement
            .scrollHeight

        -

        window.innerHeight;


    const progress =

        documentHeight > 0

        ?

        (
            scrollTop
            /
            documentHeight
        )
        *
        100

        :

        0;


    pageProgress
        .style
        .width =
            `${progress}%`;

}


window.addEventListener(
    "scroll",
    updatePageProgress,
    {
        passive: true
    }
);


updatePageProgress();


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const customCursor =
    document.getElementById(
        "customCursor"
    );


const cursorDot =
    document.getElementById(
        "cursorDot"
    );


let cursorX =
    0;


let cursorY =
    0;


let followerX =
    0;


let followerY =
    0;


document.addEventListener(
    "mousemove",
    (event) => {

        cursorX =
            event.clientX;


        cursorY =
            event.clientY;


        if (
            cursorDot
        ) {

            cursorDot.style.left =
                `${cursorX}px`;


            cursorDot.style.top =
                `${cursorY}px`;

        }

    }
);


function animateCursor() {

    followerX +=
        (
            cursorX
            -
            followerX
        )
        *
        0.14;


    followerY +=
        (
            cursorY
            -
            followerY
        )
        *
        0.14;


    if (
        customCursor
    ) {

        customCursor.style.left =
            `${followerX}px`;


        customCursor.style.top =
            `${followerY}px`;

    }


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


/* Cursor hover */

document
    .querySelectorAll(

        `
        a,
        button,
        .skill-card,
        .project-card,
        .about-card,
        .timeline-content
        `

    )
    .forEach(
        (target) => {

            target.addEventListener(
                "mouseenter",
                () => {

                    customCursor
                        ?.classList
                        .add(
                            "cursor-hover"
                        );

                }
            );


            target.addEventListener(
                "mouseleave",
                () => {

                    customCursor
                        ?.classList
                        .remove(
                            "cursor-hover"
                        );

                }
            );

        }
    );


/* =========================================================
   INTERACTIVE CARD GLOW
========================================================= */

document
    .querySelectorAll(
        ".interactive-glow"
    )
    .forEach(
        (card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rectangle =
                        card
                            .getBoundingClientRect();


                    const x =
                        event.clientX
                        -
                        rectangle.left;


                    const y =
                        event.clientY
                        -
                        rectangle.top;


                    card.style.setProperty(

                        "--mouse-x",

                        `${x}px`

                    );


                    card.style.setProperty(

                        "--mouse-y",

                        `${y}px`

                    );

                }
            );

        }
    );


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

const magneticElements =
    document.querySelectorAll(
        ".magnetic"
    );


magneticElements.forEach(
    (element) => {

        element.addEventListener(
            "mousemove",
            (event) => {

                /*
                Disable magnetic movement
                on touch devices.
                */

                if (
                    window.matchMedia(
                        "(pointer: coarse)"
                    )
                    .matches
                ) {

                    return;

                }


                const rectangle =
                    element
                        .getBoundingClientRect();


                const centerX =
                    rectangle.left
                    +
                    rectangle.width
                    /
                    2;


                const centerY =
                    rectangle.top
                    +
                    rectangle.height
                    /
                    2;


                const movementX =
                    (
                        event.clientX
                        -
                        centerX
                    )
                    *
                    0.12;


                const movementY =
                    (
                        event.clientY
                        -
                        centerY
                    )
                    *
                    0.12;


                element.style.transform =

                    `translate(
                        ${movementX}px,
                        ${movementY}px
                    )`;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.transform =
                    "translate(0, 0)";

            }
        );

    }
);

/* =========================================================
   IMAGE FALLBACK
========================================================= */

const websiteImages =
    document.querySelectorAll(
        "img"
    );


websiteImages.forEach(
    image => {

        image.addEventListener(
            "error",
            () => {

                /*
                Hide broken image icon.
                */

                image.style.opacity =
                    "0";


                /*
                Find the image container.
                */

                const parent =
                    image.parentElement;


                if (!parent) {
                    return;
                }


                /*
                Add a clean temporary
                placeholder background.
                */

                parent.style.background =

                    `
                    radial-gradient(
                        circle at 70% 20%,
                        rgba(124,92,255,0.28),
                        transparent 35%
                    ),

                    linear-gradient(
                        135deg,
                        #151821,
                        #090a0e
                    )
                    `;

            }
        );

    }
);