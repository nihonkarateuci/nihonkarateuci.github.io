# Nihon Karate Club at UCI Website

<img src="images/logo.png" width="250px" style="float: right;">

This repository contains the source code for the website for the Nihon Karate Club at UC Irvine

You may view the production site [here](https://www.clubs.uci.edu/karate).

You may view the testing site [here](https://www.ics.uci.edu/~aditeshk/nihon-karate-website/).

To monitor search trends or update sitemaps for the production site, visit <https://search.google.com/search-console> and login using the club account.

If you have any questions about the website or our club, please email <karate@uci.edu>

## About 
### **Stack**
The current version of the website was built using raw HTML, CSS, and JavaScript.
The only dependencies are [Font Awesome 4.7.0](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css) for the icons and the [Titilium Web](https://fonts.googleapis.com/css?family=Titillium+Web&display=swap) and [Cinzel](https://fonts.googleapis.com/css?family=Cinzel&display=swap) fonts from Google Fonts.

### **File Structure**
* `*.html` - The .html files making the core of the website
* `images/` - Images used in the website
* `scripts/` - All the core JavaScript functionality for the website
* `styles/` - All stylesheets used in the app
* `defaults/` - The files initially found in the Sites/ directory on the sftp production server.
* `resources/` - Flyers and other forms to share with users
* `googled2fa35bffa4b298f.html` - Verification file for the sitemap submitted to Google
* `robots.txt` - Advises web crawlers to avoid subdirectories of the website
* `sitemap.xml` - A layout of the website to help Googlebot
* `setup.sh` - A very simple script used to update permissions when adding changes to the test environment
* `README.md` - You're looking at it right now

### **Build Guide**
When deploying the site, include the following files and directories: 
* `*.html`
* `images/` - With the exception of `./images/extras/`
* `scripts/`
* `styles/`
* `resources/`
* `googled2fa35bffa4b298f.html`
* `robots.txt`
* `sitemap.xml`

Do NOT include the following files and directories when deploying the site:
* `defaults/`
* `images/extras`
* `setup.sh`
* `README.md`

Additionally, it would be great if you could [minify](https://www.minifier.org) the CSS and JS files before deploying.

### **Known Issues**
- Smooth scrolling when clicking the explore buttons is not supported on Safari (mobile or desktop).
- The flipping bio cards behave strangely on mobile.

## Build History
- [20190830](https://github.com/aramuk/nihon-karate-website/releases/tag/v1.0.0-beta): The first iteration of the site was deployed