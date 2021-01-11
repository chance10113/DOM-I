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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
const header = document.querySelector('header')

//IMGs
const middleImage = document.querySelector('#middle-img')
    middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])
const domImage = document.querySelector('#cta-img')
    domImage.setAttribute('src', siteContent['cta']['img-src'])

//NAV
const nav = document.querySelector('nav')
const navA1 = nav.querySelector('a');
  navA1.innerText = "Services"
  navA1.setAttribute('href', siteContent['nav']['nav-item-1']);
const navA2 = navA1.nextElementSibling;
  navA2.innerText = "Product"
  navA2.setAttribute('href', siteContent['nav']['nav-item-2']);
const navA3 = navA2.nextElementSibling;
  navA3.innerText = "Vision"
  navA3.setAttribute('href', siteContent['nav']['nav-item-3']);
const navA4 = navA3.nextElementSibling;
  navA4.innerText = "Features"
  navA4.setAttribute('href', siteContent['nav']['nav-item-4']);
const navA5 = navA4.nextElementSibling;
  navA5.innerText = "About"
  navA5.setAttribute('href', siteContent['nav']['nav-item-5']);
const navA6 = navA5.nextElementSibling;
  navA6.innerText = "Contact"
  navA6.setAttribute('href', siteContent['nav']['nav-item-6']);