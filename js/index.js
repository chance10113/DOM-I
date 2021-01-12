const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
//Header
const header = document.querySelector("header");
const domH1 = document.querySelector("h1");
domH1.textContent = siteContent["cta"]["h1"];
domH1.innerHTML = "DOM <br> IS <br> AWESOME";
const button = document.querySelector("button");
button.innerText = "Get Started";

//IMGs
const middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
const domImage = document.querySelector("#cta-img");
domImage.setAttribute("src", siteContent["cta"]["img-src"]);

//NAV
const nav = document.querySelector("nav");
const navA1 = nav.querySelector("a");
navA1.innerText = "Services";
navA1.style.color = 'green';
navA1.setAttribute("href", siteContent["nav"]["nav-item-1"]);
const navA2 = navA1.nextElementSibling;
navA2.innerText = "Product";
navA2.style.color = 'green';
navA2.setAttribute("href", siteContent["nav"]["nav-item-2"]);
const navA3 = navA2.nextElementSibling;
navA3.innerText = "Vision";
navA3.style.color = 'green';
navA3.setAttribute("href", siteContent["nav"]["nav-item-3"]);
const navA4 = navA3.nextElementSibling;
navA4.innerText = "Features";
navA4.style.color = 'green';
navA4.setAttribute("href", siteContent["nav"]["nav-item-4"]);
const navA5 = navA4.nextElementSibling;
navA5.innerText = "About";
navA5.style.color = 'green';
navA5.setAttribute("href", siteContent["nav"]["nav-item-5"]);
const navA6 = navA5.nextElementSibling;
navA6.innerText = "Contact";
navA6.style.color = 'green';
navA6.setAttribute("href", siteContent["nav"]["nav-item-6"]);

//MAIN CONTENT
const mainConH4 = document.querySelectorAll('.text-content h4'); //Remember, adding a space is kinda like a comma, but w/ specificity
  mainConH4[0].innerText = siteContent['main-content']['features-h4'];
  mainConH4[1].innerText = siteContent['main-content']['about-h4'];
  mainConH4[2].innerText = siteContent['main-content']['services-h4'];
  mainConH4[3].innerText = siteContent['main-content']['product-h4'];
  mainConH4[4].innerText = siteContent['main-content']['vision-h4'];

const mainConP = document.querySelectorAll('.text-content p');
  mainConP[0].innerText = siteContent['main-content']['features-content'];
  mainConP[1].innerText = siteContent['main-content']['about-content'];
  mainConP[2].innerText = siteContent['main-content']['services-content'];
  mainConP[3].innerText = siteContent['main-content']['product-content'];
  mainConP[4].innerText = siteContent['main-content']['vision-content'];

  //Lower content

  let contact = document.querySelector(".contact");
  let contactH4 = contact.querySelector('h4');
contactH4.innerText = "Contact";
let add = contact.querySelector('p');
add.innerText = siteContent["contact"]["address"]
let call = add.nextElementSibling;
call.innerText = siteContent["contact"]["phone"]
let pc = call.nextElementSibling;
pc.innerText = siteContent["contact"]["email"]

let footer = document.querySelector('footer')
let footerP = footer.querySelector('p')
footerP.innerText = siteContent['footer']['copyright']

//Additional Navigation Stuff
let navA7 = document.createElement('a')
let navA0 = document.createElement('a')
nav.appendChild(navA7)
navA7.innerText = "Obvious Gibberish"
navA7.style.color = 'green';
nav.prepend(navA0)
navA0.innerText = "Additional Things"
navA0.style.color = 'green';