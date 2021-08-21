NKCConfig = NKCConfig || {};

function render() {
  showAnnouncement();
  renderEventsCalendar();
  renderPracticeSchedule();
}

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

// On page load, render circle menu
document.addEventListener("DOMContentLoaded", (e) => {
  renderCircleMenu(0);

  // Set circle menu to open
  document.querySelector(".circle").classList.toggle("open");

  // Add listener for closing menu
  document.querySelector(".menu-button").onclick = (e) => {
    e.preventDefault();
    document.querySelector(".circle").classList.toggle("open");
  };
});

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

// Shows the announcement if the user has not seen it within the last day.
function showAnnouncement() {
  const timeout = getCookieData("timeout");
  if (
    !timeout ||
    // Extract timeout from cookie and compare to current date.
    new Date(timeout.substring("timeout=".length, timeout.length)) < new Date()
  ) {
    document.getElementById("announcement").style.opacity = 100;
  }
}

// Renders the calendar of upcoming events.
function renderEventsCalendar() {
  // Load event calendar and sort by date.
  let calendar = (NKCConfig?.events?.calendar || []).sort(
    (a, b) => a.date - b.date
  );
  // Remove past events if there are more than 3 events to display in calendar.
  if (calendar.length > 3) {
    calendar = calendar.filter(event => event.date > Date.now());
  }
  // Trim schedule to 3 or 6 events.
  calendar = calendar.slice(
    0,
    Math.min(6, 3 * Math.floor(calendar.length / 3))
  );

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Render each event from the calendar into the #events-calendar div.
  const root = document.getElementById("events-calendar");
  for (const event of calendar) {
    const eventCard = document.createElement("div");
    eventCard.className = "grid-card shadow white";

    const background = document.createElement("div");
    background.style["background-image"] = `url(${event.image.path})`;
    background.style["background-position-x"] = event.image.x || "50%";
    background.style["background-position-y"] = event.image.y || "50%";
    eventCard.appendChild(background);

    const name = document.createElement("h3");
    name.innerText = event.name;
    name.className = "shadow red white-text";
    eventCard.appendChild(name);

    const date = document.createElement("b");
    date.innerText = event.date.toLocaleDateString("en-US", dateOptions);
    eventCard.appendChild(date);
    eventCard.appendChild(document.createElement("br"));

    const time = document.createElement("b");
    time.innerText = `${event.start_time} - ${event.end_time} @ ${event.location}`;
    eventCard.appendChild(time);
    eventCard.appendChild(document.createElement("br"));

    const desc = document.createElement("p");
    desc.innerText = event.description;
    eventCard.appendChild(desc);

    root.appendChild(eventCard);
  }
}

function renderPracticeSchedule() {
  // Load practice schedule.
  let schedule = NKCConfig?.practice?.schedule || [];

  const root = document.getElementById("practice-schedule");
  // Set the styling for the practice schedule based on its size.
  const containerClass =
    schedule.length == 3 ? "three-card-container" : "four-card-container";
  root.classList.add(containerClass);

  // Render each event from the schedule into the #practice-schedule div.
  for (const practice of schedule) {
    const practiceCard = document.createElement("div");
    practiceCard.className = "grid-card shadow white";

    const background = document.createElement("div");
    background.style["background-image"] = `url(${practice.image.path})`;
    background.style["background-position-x"] = practice.image.x || "50%";
    background.style["background-position-y"] = practice.image.y || "50%";
    practiceCard.appendChild(background);

    const name = document.createElement("h2");
    name.innerText = practice.name;
    practiceCard.appendChild(name);

    const desc = document.createElement("p");
    desc.style["text-align"] = "center";
    desc.innerHTML =
      `${practice.start_time}-${practice.end_time}` +
      "<br/>" +
      `${practice.location}` +
      "<br/>";
    practiceCard.appendChild(desc);

    root.appendChild(practiceCard);
  }
}

// Hides announcement and set announcement timeout cookie
function closeAnnouncement() {
  const timeout = new Date();
  // Timeout is 24 hours from time that announcement is closed
  timeout.setTime(timeout.getTime() + 24 * 60 * 60 * 1000);
  document.cookie = "timeout=" + timeout.toISOString();
  document.getElementById("announcement").style.opacity = 0;
}

function fillEmail() {
  for (const elem of document.getElementsByClassName("email")) {
    elem.innerText = NKCConfig.email;
    elem.href = `mailto:${NKCConfig.email}`;
  }
}
