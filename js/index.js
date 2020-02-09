const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Logo and Nav Links
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll('header nav a');
for (let i = 0; i < navLinks.length; i++) {
   navLinks[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

//CTA
const cta = document.querySelector('.cta');

var h1 = cta.querySelector('h1')
h1.textContent = siteContent.cta.h1;

var button = cta.querySelector('button');
button.textContent = siteContent.cta.button;

const ctaIMG = cta.querySelector('#cta-img');
ctaIMG.src = siteContent.cta["img-src"];

//Main-Content
const mainContent = document.querySelector('.main-content');
const textContent = mainContent.querySelectorAll('.text-content');

const textContentGenres = ['features', 'about', 'services', 'product', 'vision'];

for (let i = 0; i < textContent.length; i++) {
   var genreContent = textContent[i].children;
   genreContent[0].textContent = siteContent['main-content'][`${textContentGenres[i]}-h4`];
   genreContent[1].textContent = siteContent['main-content'][`${textContentGenres[i]}-content`];
}

const middleIMG = mainContent.querySelector('#middle-img');
middleIMG.src = siteContent['main-content']['middle-img-src'];

//Contact
const contactElements = document.querySelector('.contact').children;
console.log(contactElements);
contactElements[0].textContent = siteContent['contact']['contact-h4'];
contactElements[1].textContent = siteContent['contact']['address'];
contactElements[2].textContent = siteContent['contact']['phone'];
contactElements[3].textContent = siteContent['contact']['email'];

//Footer
const footerParagraph = document.querySelector('footer p');
footerParagraph.textContent = siteContent['footer']['copyright'];



/** Adding/Changing Content */

//Add two new links to nav
const nav = document.querySelector('nav');

const newLink1 = document.createElement('a');
newLink1.textContent = 'NewLink1';
const newLink2 = document.createElement('a');
newLink2.textContent = 'NewLink2';

nav.appendChild(newLink1);
nav.prepend(newLink2);

//Make nav links green
navLinks = document.querySelectorAll('header nav a');
navLinks.forEach((link) => link.style.color = 'green');

