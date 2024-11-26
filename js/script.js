$(document).ready(function () {
    // Initialize Owl Carousel
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Initialize Flatpickr for check-in and check-out dates
    flatpickr("#checkin-date", {
        dateFormat: "Y-m-d",
        minDate: "today", // Disable past dates
    });

    flatpickr("#checkout-date", {
        dateFormat: "Y-m-d",
        minDate: "today", // Disable past dates
    });

    // Increment and Decrement Button Handlers
    document.querySelectorAll(".btn-decrement").forEach(function (button) {
        button.addEventListener("click", function () {
            const input = this.nextElementSibling;
            const value = parseInt(input.value, 10) || 0;
            if (value > parseInt(input.min, 10)) {
                input.value = value - 1;
            }
        });
    });

    document.querySelectorAll(".btn-increment").forEach(function (button) {
        button.addEventListener("click", function () {
            const input = this.previousElementSibling;
            const value = parseInt(input.value, 10) || 0;
            if (value < parseInt(input.max, 10)) {
                input.value = value + 1;
            }
        });
    });
});
