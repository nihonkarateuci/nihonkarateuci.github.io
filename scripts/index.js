NKCConfig = NKCConfig || {};

// On page load, render circle menu
document.addEventListener("DOMContentLoaded", (e) => {
  fillEmail();
  renderCircleMenu(0);

  // Set circle menu to open
  document.querySelector(".circle").classList.toggle("open");

  // Add listener for closing menu
  document.querySelector(".menu-button").onclick = (e) => {
    e.preventDefault();
    document.querySelector(".circle").classList.toggle("open");
  };
});

// Opens and closes mobile menu
function toggleMenu() {
  const menu = document.getElementById("dropdown");
  const button = document.getElementById("toggle-button");
  const icon = button.querySelector("i");
  if (icon.className === "fa fa-bars") {
    icon.className = "fa fa-times";
    menu.style.height = "100%";
  } else {
    icon.className = "fa fa-bars";
    menu.style.height = "0%";
  }
}

// Renders the circle menu with the passed page index at the top
function renderCircleMenu(topIndex) {
  const items = document.querySelectorAll(".circle a");

  for (let i = 0, len = items.length; i < len; i++) {
    // prettier-ignore
    items[i].style.left = (50 - 35 * Math.cos((Math.PI * 2 * topIndex) / len - 0.5 * Math.PI - 2 * (1 / len) * i * Math.PI)).toFixed(4) + "%";
    // prettier-ignore
    items[i].style.top = (47 + 35 * Math.sin((Math.PI * 2 * topIndex) / len - 0.5 * Math.PI - 2 * (1 / len) * i * Math.PI)).toFixed(4) + "%";
  }
}

// Fill in email address from config on loaded document to avoid spam.
function fillEmail() {
  for (const elem of document.getElementsByClassName("email")) {
    elem.innerText = NKCConfig.email;
    elem.href = `mailto:${NKCConfig.email}`;
  }
}
