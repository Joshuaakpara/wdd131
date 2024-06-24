document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    currentYearSpan.textContent = new Date().getFullYear();
    lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
});
