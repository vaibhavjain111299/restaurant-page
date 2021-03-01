import { homepage } from "./modules/home";
import { menupage } from "./modules/menu";
import { contactpage } from "./modules/contact";

const contentDiv = document.getElementById("content");

const initialLoad = (() => {
    window.onload = (e) => {
        createNavBar();
        homepage();
        addLinkEvents();
    }

    const pages = ['Home', 'Menu', 'Contact'];

    const navbarDiv = document.createElement("div");
    navbarDiv.classList.add("navbar");

    function createNavLink(page) {
        let navLinkHref = document.createElement("a");
        navLinkHref.classList.add("nav-link");
        navLinkHref.setAttribute("href", "#");
        navLinkHref.innerText = page;
        navbarDiv.appendChild(navLinkHref)
    }

    function createNavBar() {
        for (let i = 0; i < pages.length; i++) {
            createNavLink(pages[i]);
        }
        contentDiv.appendChild(navbarDiv);
    }

    function clearContent() {
        while (contentDiv.lastChild) {
            contentDiv.removeChild(contentDiv.lastChild);
        }
        while (navbarDiv.lastChild) {
            navbarDiv.removeChild(navbarDiv.lastChild);
        }
        removeLinkEvents();
    }

    function navSelection(page) {
        if (page.innerText === "Home") {
            clearContent();
            createNavBar();
            homepage();
            addLinkEvents();
        } else if (page.innerText === "Menu") {
            clearContent();
            createNavBar();
            menupage();
            addLinkEvents();
        } else if (page.innerText === "About") {
            clearContent();
            createNavBar();
            aboutpage();
            addLinkEvents();
        } else if (page.innerText === "Contact") {
            clearContent();
            createNavBar();
            contactpage();
            addLinkEvents();
        }
    }

    function addLinkEvents() {
        let navlinks = document.querySelectorAll(".nav-link");
        navlinks.forEach((link) => {
            link.addEventListener("click", function () {
                navSelection(link);
            })
        })
    }
    function removeLinkEvents() {
        let navlinks = document.querySelectorAll(".nav-link");
        navlinks.forEach((link) => {
            link.removeEventListener("click", function () { })
        });
    }


})();