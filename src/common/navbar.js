import { getSiblings, fadeIn, fadeOut } from "./customFunctions";

export const handleDropdown = (e) => {
  const parentElement = e.target.parentElement;
  if (parentElement) {
    getSiblings(parentElement)
      .filter((item) => item.classList.contains("show"))
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
    const childNodes = parentElement.childNodes;
    if (childNodes.length > 1 && childNodes[1].classList) {
      childNodes[1].classList.toggle("show");
    }
  }
};

export const handleMobileDropdown = (e) => {
  const navbarElement = document.getElementById("navbarSupportedContent");
  if (navbarElement && navbarElement.classList) {
    navbarElement.classList.toggle("show-with-trans");
  }
};



