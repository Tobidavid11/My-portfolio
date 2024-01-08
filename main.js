const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links-container ul");
const navToggler = document.getElementById("nav-toggler");

navToggler.addEventListener("click", () => {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.maxHeight = `${linksHeight}px`;
    navToggler.classList.add("change-toggler");
  } else {
    linksContainer.style.maxHeight = `0px`;
    navToggler.classList.remove("change-toggler");
  }
});

// add fixed when scrolled below nav height

const navbar = document.querySelector("nav");
const navHeight = navbar.getBoundingClientRect().height;
// scroll event
window.addEventListener("scroll", () => {
  if (window.pageYOffset > navHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// card hover effect
const hoverServicesImages = [
  { img: "images/service-icon-hover-01.png" },
  { img: "images/service-icon-hover-02.png" },
  { img: "images/service-icon-hover-03.png" },
  { img: "images/service-icon-hover-04.png" },
];
const servicesImages = [
  { img: "images/service-icon-01.png" },
  { img: "images/service-icon-02.png" },
  { img: "images/service-icon-03.png" },
  { img: "images/service-icon-04.png" },
];
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  const image = card.querySelector("img");
  card.addEventListener("mouseover", () => {
    image.src = hoverServicesImages[index].img;
  });
  card.addEventListener("mouseleave", () => {
    image.src = servicesImages[index].img;
  });
});

// client reviews
