// Opens and closes mobile menu
function toggleMenu() {
    const menu = document.getElementById("dropdown");
    const button = document.getElementById("toggle-button");
    const icon = button.querySelector('i');
    if (icon.className === "fa fa-bars") {
        icon.className = 'fa fa-times';
        menu.style.height = "100%";
    } else {
        icon.className = 'fa fa-bars';
        menu.style.height = "0%";
    }
}

// On page load, render circle menu
document.addEventListener("DOMContentLoaded", e => {
    renderCircleMenu(0);

    // Set circle menu to open
    document.querySelector('.circle').classList.toggle('open');

    // Add listener for closing menu
    document.querySelector('.menu-button').onclick = e => {
        e.preventDefault();
        document.querySelector('.circle').classList.toggle('open');
    }
});

// Renders the circle menu with the passed page index at the top
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

// Shows the announcement if the user has not seen it within the last day
function showAnnouncement() {
    const timeout = getCookieData('timeout');
    if (!timeout || 
        // Extract timeout from cookie and compare to current date
        new Date(timeout.substring('timeout='.length, timeout.length)) < new Date()
    ) {
        document.getElementById("announcement").style.opacity = 100;
    }
}

// Hides announcement and set announcement timeout cookie
function closeAnnouncement() {
    const timeout = new Date();
    // Timeout is 24 hours from time that announcement is closed
    timeout.setTime(timeout.getTime() + 24*60*60*1000);
    document.cookie = "timeout=" + timeout.toISOString();
    document.getElementById("announcement").style.opacity = 0;
}
