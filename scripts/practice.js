NKCConfig = NKCConfig || {};

// Practice schedule to display on the home page.
NKCConfig.practice = Object.freeze({
  schedule: [
    {
      name: "Tuesdays",
      image: {
        path: "images/home/practice_0.jpeg",
        x: "30%",
      },
      location: "ARC Sports Studio",
      start_time: "7:30pm",
      end_time: "8:50pm",
    },
    {
      name: "Thursdays",
      image: {
        path: "images/home/practice_2.jpeg",
        x: "35%",
      },
      location: "ARC Sports Studio",
      start_time: "7:30pm",
      end_time: "8:50pm",
    },
    {
      name: "Fridays",
      image: {
        path: "images/home/practice_1.jpeg",
        x: "35%",
      },
      location: "Laguna Niguel Dojo",
      start_time: "7:30pm",
      end_time: "9:00pm",
    },
    {
      name: "Saturdays",
      image: {
        path: "images/home/practice_3.jpeg",
        x: "60%",
      },
      location: "Laguna Niguel Dojo",
      start_time: "2:00pm",
      end_time: "3:00pm",
    },
  ],
});

// Renders the practice schedule.
function renderPracticeSchedule() {
  // Load practice schedule and sort by date.
  let schedule = NKCConfig?.practice?.schedule || [];

  // Render each event from the schedule into the #events-calendar div.
  const root = document.getElementById("practice-schedule");
  root.classList.add(
    schedule.length == 3 ? "three-card-container" : "four-card-container"
  );

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
    desc.style.textAlign = "center";
    desc.innerHTML =
      `${practice.start_time} - ${practice.end_time}` +
      "<br/>" +
      `${practice.location}` +
      "<br/>";
    practiceCard.appendChild(desc);

    root.appendChild(practiceCard);
  }
}
