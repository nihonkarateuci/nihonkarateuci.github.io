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


document.addEventListener("DOMContentLoaded", function(event) { 
    // Render circle menu
    renderCircleMenu(0);

    // Open and close menu
    document.querySelector('.circle').classList.toggle('open');
    document.querySelector('.menu-button').onclick = function(e) {
        e.preventDefault();
        document.querySelector('.circle').classList.toggle('open');
    }

    // Close announcement and set cookie
    document.getElementById("close-announcement").addEventListener("click", function() {
        const timeout = new Date(new Date() + 24*60*60*1000).toISOString();
        document.cookie = "timeout=" + timeout;
        document.getElementById("announcement").style.opacity = 0;
    });
});

function renderCircleMenu(topIndex) {
    const items = document.querySelectorAll('.circle a');

    for(let i = 0, l = items.length; i < l; i++) {
        items[i].style.left = (50 - 35*Math.cos(Math.PI * topIndex/items.length - 0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
        items[i].style.top = (47 + 35*Math.sin(Math.PI * topIndex/items.length - 0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }
}

function getCookieData(key) {
    const cookie = decodeURIComponent(document.cookie);
    return cookie.split(';').find(function(entry) {
        let data = entry;
        while (data.charAt(0) === ' ') {
            data = data.substring(1);
        }
        return data.indexOf(key + '=') === 0;
    });
}

function hideAnnouncement() {
    const timeout = getCookieData('timeout');
    if (timeout !== undefined) {
        timeoutEnd = timeout.substring('timeout='.length, timeout.length); // Extract expiration time
        // Hide the announcement if the user has seen it within the last day
	if (new Date(timeoutEnd) < new Date()) {
            document.getElementById("announcement").style.display = 'none';
        }
    }
}
