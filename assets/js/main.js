
// const header = document.querySelector(".header-section");
// const toggleClass = "is-sticky";

// window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll > 150) {
//         header.classList.add(toggleClass);
//     } else {
//         header.classList.remove(toggleClass);
//     }
// });

const currentYear = document.getElementById('currentYear');
let copyrightDate = new Date();
copyrightDate = copyrightDate.getFullYear();
currentYear.textContent = copyrightDate;


const menuBar = document.getElementById('menu-bar-btn');
const mobile_menu_container = document.getElementById('mobile-menu-container');
menuBar.onclick = () => {
    mobile_menu_container.classList.toggle('active')
}






const menuLinks = document.querySelectorAll('.navbar-menu li a');
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
