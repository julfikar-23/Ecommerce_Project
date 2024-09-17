const menuIcon = document.getElementById("menu-bar");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    if (menu.className == "hidden") {  // Use "===" or "==" to comparison
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});
