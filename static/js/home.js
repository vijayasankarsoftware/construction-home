function openMenu() {
    var menu = document.getElementById("menu-items");
    var menuicon = document.getElementById("menu-icon");
    if (menu.style.maxHeight === "0px" || !menu.style.maxHeight) {
        menu.style.maxHeight = menu.scrollHeight + "px";
        menuicon.setAttribute("class", "fas fa-times");
        menu.style.border = "1px solid white";
    } else {
        menu.style.maxHeight = "0px";
        menuicon.setAttribute("class", "fas fa-bars");
        menu.style.border = "";
    }
}

document.addEventListener("scroll", () => {
    var toolbar = document.getElementById("tool-bar");
    var menuLinks = document.querySelectorAll(".lengthy-menu a");
    var name = document.getElementById("forName")
    if (window.scrollY > 10) {
        toolbar.style.backgroundColor = "white";
        toolbar.classList.add("fixed");
        menuLinks.forEach(link => {
            link.style.color = "black"; // Change color when scrolling
        });
        name.style.color = "black";
    } else {
        toolbar.style.background = "none";
        toolbar.classList.remove("fixed");
        menuLinks.forEach(link => {
            link.style.color = "white"; // Reset to default color
        });
        name.style.color = "white";
    }
});


