NKCConfig = NKCConfig || {};

// Calendar of events to include on the home page.
NKCConfig.events = Object.freeze({
  calendar: [
    {
      name: "Anteater Involvment Fair",
      image: {
        path: "images/home/AIFDay1.jpg",
        y: "30%",
      },
      location: "Aldrich Park",
      date: new Date((year = 2025), (month = 08), (date = 23), (hours = 11)),
      start_time: "11:00am",
      end_time: "4:00pm",
      description:
        "Interested in learning more about the Karate Club? " +
        "Stop by our booth to understand what we do, and how you can get involved!",
    },
    {
      name: "Late Night at ARC Demo",
      image: {
        path: "images/home/latenightnew.jpg",
      },
      location: "ARC Sports Studio",
      date: new Date((year = 2025), (month = 08), (date = 22), (hours = 19)),
      start_time: "8:00pm",
      end_time: "8:50pm",
      description:
        "Head over to the Anteater Recreation Center to see what karate has to offer for yourself! Our demo will also include beginner-level interactions for some first-hand experience."
    },
    {
      name: "Boba Social",
      image: {
        path: "images/home/coolsocial.jpg",
      },
      location: "UTC (in front of Cha for Tea)",
      date: new Date((year = 2022), (month = 08), (date = 21), (hours = 18)),
      start_time: "6:00pm",
      end_time: "7:00pm",
      description:
        "First social of the year, we are so excited to see new and old faces. Come hang out with the club over some boba!"
    },
  ],
});

// Renders the calendar of upcoming events.
function renderEventsCalendar() {
  // Load event calendar and sort by date.
  let calendar = (NKCConfig?.events?.calendar || []).sort(
    (a, b) => a.date - b.date
  );
  // Remove past events if there are more than 3 events to display in calendar.
  if (calendar.length > 3) {
    calendar = calendar.filter((event) => event.date > Date.now());
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
