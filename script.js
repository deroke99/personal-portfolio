const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    "#about, .project-card, #journey, #contact"
).forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});
document.getElementById("year").textContent =
    new Date().getFullYear();