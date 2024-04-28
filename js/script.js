/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
var readMoreBtns = document.querySelectorAll(".readMoreBtn");

readMoreBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var extraContent = this.previousElementSibling.querySelector(".extraContent");
        if (extraContent.classList.contains("hidden")) {
            extraContent.classList.remove("hidden");
            this.textContent = "Read Less";
        } else {
            extraContent.classList.add("hidden");
            this.textContent = "Read More";
        }
    });
});
document.getElementById("downloadButton").addEventListener("click", function() {
    // Content to be downloaded
    var content = "This is the content of the file.";

    // Create a Blob containing the file content
    var blob = new Blob([content], { type: "text/plain" });

    // Create a temporary URL for the Blob
    var url = URL.createObjectURL(blob);

    // Create a link element
    var link = document.createElement("a");

    // Set the href attribute of the link to the temporary URL
    link.href = url;

    // Set the download attribute to specify the filename
    link.download = "file:///C:/Users/91917/Downloads/Rangasuthan_cv%20(1).pdf";

    // Append the link to the document body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);

    // Revoke the temporary URL to release memory
    URL.revokeObjectURL(url);
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });