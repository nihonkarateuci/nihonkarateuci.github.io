NKCConfig = NKCConfig || {};

NKCConfig.events = Object.freeze({
  calendar: [
    {
      name: "Anteater Involvement Fair",
      image: "images/home/AIFDay1.jpg",
      location: "Aldrich Park",
      date: new Date((year = 2021), (month = 09), (date = 20), (hours = 11)),
      start_time: "11am",
      end_time: "3pm",
      description:
        "Interested in learning more about the Karate Club? " +
        "Stop by our booth to understand what we do, and how you can get involved!",
    },
    {
      name: "Late Night with Campus Recreation",
      image: "images/home/latenight.jpg",
      location: "ARC",
      date: new Date((year = 2021), (month = 09), (date = 20), (hours = 20)),
      start_time: "8pm",
      end_time: "12am",
      description:
        "The best way to experience karate is to do it yourself. " +
        "Hop in to our practice session to see what we're all about.",
    },
    {
      name: "Quarterly Beach Workout",
      image: "images/home/beach.jpg",
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
