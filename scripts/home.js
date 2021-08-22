NKCConfig = NKCConfig || {};

// On page load, render event calendar and practice schedule;s
document.addEventListener("DOMContentLoaded", (e) => {
  renderEventsCalendar();
  renderPracticeSchedule();
  showAnnouncement();
});

function showAnnouncement() {
  const { cookie_name, visible } = NKCConfig?.announcement;
  const cookie = getCookie(cookie_name);
  if (
    visible &&
    (!cookie ||
      new Date(cookie.substring(cookie_name.length + 1, cookie.length)) <
        Date.now())
  ) {
    document.getElementById("announcement").style.opacity = 100;
  }
}

function closeAnnouncement() {
  // Hide the announcement for 1 day after it is closed.
  const expiration = Date.now() + 24 * 60 * 60;
  putCookie(NKCConfig.announcement?.cookie_name, true, (expires = expiration));
  document.getElementById("announcement").style.opacity = 0;
}
