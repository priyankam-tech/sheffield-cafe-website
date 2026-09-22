console.log("Welcome to Sheffield Café!");

const contactButton = document.getElementById("contactBtn");

contactButton.addEventListener("click", function () {
    alert("Thank you for contacting Sheffield Café! We will get back to you soon.");
});


const menuButton = document.getElementById("menuBtn");
const extraMenu = document.getElementById("extraMenu");

menuButton.addEventListener("click", function () {

    if (extraMenu.style.display === "none" || extraMenu.style.display === "") {

        extraMenu.style.display = "block";
        menuButton.textContent = "Hide Menu";

    } else {

        extraMenu.style.display = "none";
        menuButton.textContent = "Show More Menu";

    }

});