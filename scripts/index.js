// Opens and closes mobile menu
function toggleMenu() {
    let menu = document.getElementById("menu");
    let button = document.getElementById("toggle-button");
    if (button.innerHTML == "\u2630") {
        button.innerHTML = "&times;";
        button.style.top = "-0.35rem";
        menu.style.height = "100%";
    } else {
        button.innerHTML = "&#9776;";
        button.style.top = "0";
        menu.style.height = "0%";
    }
}

document.addEventListener("DOMContentLoaded", e => { 
    // Set circle menu to open
    document.querySelector('.circle').classList.toggle('open');

    // Add listener for closing menu
    document.querySelector('.menu-button').onclick = function(e) {
        e.preventDefault();
        document.querySelector('.circle').classList.toggle('open');
    }
});

// Renders the circle menu with the passed index at the top
function renderCircleMenu(topIndex) {
    const items = document.querySelectorAll('.circle a');

    for(let i = 0, len = items.length; i < len; i++) {
        items[i].style.left = (50 - 35*Math.cos(Math.PI * 2 * topIndex/len - 0.5 * Math.PI - 2*(1/len)*i*Math.PI)).toFixed(4) + "%";
        items[i].style.top = (47 + 35*Math.sin(Math.PI * 2 * topIndex/len - 0.5 * Math.PI - 2*(1/len)*i*Math.PI)).toFixed(4) + "%";
    }
}

// Get the cookie with the passed key
function getCookieData(key) {
    const cookie = decodeURIComponent(document.cookie);
    return cookie.split(';').find(entry => {
        let data = entry;
        while (data.charAt(0) === ' ') {
            data = data.substring(1);
        }
        return data.indexOf(key + '=') === 0; // Make sure the found instance is a key
    });
}

function hideAnnouncement() {
    const timeout = getCookieData('timeout');
    if (timeout !== undefined) {
        timeoutEnd = timeout.substring('timeout='.length, timeout.length); // Extract expiration time
        // Hide the announcement if the user has seen it within the last day
        if (new Date(timeoutEnd) > new Date()) {
            document.getElementById("announcement").style.display = 'none';
        }
    }
}

// Hide announcement and set announcement timeout cookie
function closeAnnouncement() {
    const timeout = new Date();
    // Timeout is 24 hours from time that announcement is closed
    timeout.setTime(timeout.getTime() + 24*60*60*1000);
    document.cookie = "timeout=" + timeout.toISOString();
    document.getElementById("announcement").style.opacity = 0;
}
