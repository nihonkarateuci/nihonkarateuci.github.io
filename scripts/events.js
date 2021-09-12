NKCConfig = NKCConfig || {};

// Calendar of events to include on the home page.
NKCConfig.events = Object.freeze({
  calendar: [
    {
      name: "Anteater Involvement Fair",
      image: {
        path: "images/home/AIFDay1.jpg",
        y: "30%",
      },
      location: "Aldrich Park",
      date: new Date((year = 2021), (month = 09), (date = 20), (hours = 11)),
      start_time: "11am",
      end_time: "3pm",
      description:
        "Interested in learning more about the Karate Club? " +
        "Stop by our booth to understand what we do, and how you can get involved!",
    },
    {
      name: "Late Night at the ARC",
      image: {
        path: "images/home/latenight.jpg",
      },
      location: "ARC",
      date: new Date((year = 2021), (month = 09), (date = 20), (hours = 20)),
      start_time: "6:40pm",
      end_time: "7:15pm",
      description:
        "The best way to experience karate is to do it yourself. " +
        "Hop in to our practice session to see what we're all about.",
    },
    {
      name: "Fall Beach Workout",
      image: {
        path: "images/home/beach.jpg",
      },
      location: "Salt Creek Beach",
      date: new Date((year = 2021), (month = 09), (date = 26), (hours = 10)),
      start_time: "10am",
      end_time: "12pm",
      description:
        "Join us for a longstanding club tradition. " +
        "Rides will be provided, leaving from in front of the ARC at 9am.",
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
