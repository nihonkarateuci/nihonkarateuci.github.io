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
    const items = document.querySelectorAll('.circle a');

    for(let i = 0, l = items.length; i < l; i++) {
        items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
        items[i].style.top = (47 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }
    
    document.querySelector('.menu-button').onclick = function(e) {
        e.preventDefault();
        document.querySelector('.circle').classList.toggle('open');
    }
});