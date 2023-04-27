import { getSiblings, fadeIn, fadeOut } from "./customFunctions";

export const handleDropdown = (e) => {
  const parentElement = e.target.parentElement;
  if (!parentElement) return;

  const siblings = getSiblings(parentElement);
  if (!siblings) return;

  siblings
    .filter((item) => item.classList && item.classList.contains("show"))
    .map((item) => {
      item.classList.remove("show");
      if (item.childNodes[0]) {
        item.childNodes[0].setAttribute("aria-expanded", false);
      }
      if (item.childNodes[1]) {
        item.childNodes[1].classList.remove("show");
      }
    });
  
  parentElement.classList.toggle("show");
  e.target.setAttribute("aria-expanded", true);
  if (parentElement.childNodes[1]) {
    parentElement.childNodes[1].classList.toggle("show");
  }
};

export const handleMobileDropdown = (e) => {
  const navbarElement = document.getElementById("navbarSupportedContent");
  if (!navbarElement) return;
  
  navbarElement.classList.toggle("show-with-trans");
};

export const handleSearch = () => {
  const searchForm = document.querySelector(".navbar");
  if (!searchForm) return;
  
  const iconElement = document.querySelector(".navbar .icon");
  if (iconElement) {
    iconElement.addEventListener("click", function () {
      // handle click event
    });
  }

  const closeElement = document.querySelector(".navbar .close");
  if (closeElement) {
    closeElement.addEventListener("click", function () {
      // handle click event
    });
  }
};




