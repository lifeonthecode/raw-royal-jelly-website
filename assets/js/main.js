
const header = document.querySelector(".header-section");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});


const toggle = document.querySelector('.menu-toggle');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
toggle.onclick = () => {
    toggle.classList.toggle('active');
    mobileMenuContainer.classList.toggle('active');
};

const menuLinks = document.querySelectorAll('.navbar-menu li a');
function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function easeInOut(t) {
        return t < 0.5
            ? 2 * t * t
            : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function animation(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOut(progress);

        window.scrollTo(
            0,
            startPosition + targetPosition * ease
        );

        if (elapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}


menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            smoothScroll(targetSection, 200); // duration ms
        }

        // mobile menu close
        toggle.classList.remove('active');
        mobileMenuContainer.classList.remove('active');
    });
});

const contactBtns = document.querySelectorAll('.message');
contactBtns.forEach(contact => {
    contact.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector('#contact');
        if (targetSection) {
            smoothScroll(targetSection, 200)
        };
        // mobile menu close
        toggle.classList.remove('active');
        mobileMenuContainer.classList.remove('active');
    })
})




const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();
let selectedDay = null;

function renderCalendar() {
    daysContainer.innerHTML = "";

    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.innerText = date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        daysContainer.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= lastDate; day++) {
        const dayEl = document.createElement("div");
        dayEl.innerText = day;

        const today = new Date();
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayEl.classList.add("today");
        }

        dayEl.onclick = () => {
            document.querySelectorAll(".calendar-days div")
                .forEach(d => d.classList.remove("selected"));
            dayEl.classList.add("selected");
            selectedDay = day;
        };

        daysContainer.appendChild(dayEl);
    }
}

prevBtn.onclick = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
};

nextBtn.onclick = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
};

renderCalendar();

const timezoneSelect = document.getElementById("timezoneSelect");
const timeDisplay = document.getElementById("timeDisplay");

function updateTime() {
    const timezone = timezoneSelect.value;

    const now = new Date();
    const time = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }).format(now);

    timeDisplay.innerText = `(${time})`;
}

// change event
timezoneSelect.addEventListener("change", updateTime);

// auto update every minute
setInterval(updateTime, 60000);

// initial call
updateTime();


const currentYear = document.getElementById('currentYear');
let copyrightDate = new Date();
copyrightDate = copyrightDate.getFullYear();
currentYear.textContent = copyrightDate;

// document.addEventListener('DOMContentLoaded', () => {
//   const card = document.getElementById('flip-card');
//   const buttons = card.querySelectorAll('.flip-btn');

//   buttons.forEach(btn => {
//     btn.style.visibility = 'visible';

//     btn.addEventListener('click', (e) => {
//       e.stopPropagation(); // future safety
//       card.classList.toggle('do-flip');
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-flip-card').forEach(card => {
        card.querySelectorAll('.flip-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.toggle('is-flipped');
            });
        });
    });
});






const cards = document.querySelectorAll(".video-card");
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const videoSrc = card.dataset.video;
        modalVideo.src = videoSrc;
        modal.style.display = "flex";
        modalVideo.play();
    });
});

closeBtn.addEventListener("click", () => {
    modalVideo.pause();
    modalVideo.src = "";
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modalVideo.pause();
        modalVideo.src = "";
        modal.style.display = "none";
    }
});

