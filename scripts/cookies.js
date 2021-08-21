// Get the cookie with the passed key
function getCookieData(key) {
  const cookie = decodeURIComponent(document.cookie);
  console.log(cookie);
  return cookie.split(';').find(entry => {
      let data = entry.trimLeft();
      return data.indexOf(key + '=') === 0; // Make sure the found instance is a key
  });
}
