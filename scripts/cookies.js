NKCConfig = NKCConfig || {};

// Put a cookie with the passed key and value.
function putCookie(
  key,
  value,
  path = "/",
  domain = NKCConfig.sitename,
  max_age = null,
  expires = null,
  secure = true,
  samesite = "Strict"
) {
  let cookie = `${key}=${value}; Path=${path}; Domain=${domain}; `;
  if (max_age) {
    cookie += `MaxAge=${max_age}`;
  } else if (expires) {
    cookie += `Expires=${expires.toISOString()}; `;
  }
  if (secure) {
    cookie += "Secure; ";
  }
  cookie += `SameSite=${samesite};`;
  document.cookie = encodeURIComponent(cookie);
}

// Get the cookie with the passed key.
function getCookie(key) {
  const allCookies = decodeURIComponent(document.cookie);
  return allCookies
    .split(";")
    .find((entry) => entry.trimLeft().startsWith(key + "="));
}
