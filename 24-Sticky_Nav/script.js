const navElement = document.getElementById("main");
const offset = navElement.offsetTop;
const logoElement = document.querySelector(".logo");

function setNavBarToTop() {
    if (window.scrollY > offset) {
        navElement.style.position = "fixed";
        logoElement.style.maxWidth = "300px";

    } else {
        navElement.style.position = "relative";
        logoElement.style.maxWidth = "0px";
    }

}






window.addEventListener('scroll', setNavBarToTop);