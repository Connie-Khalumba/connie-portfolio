'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}
// Get all elements with the class name "view"
var buttons = document.querySelectorAll('.view');

// Loop through each button and add a click event listener
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the link associated with the button
    var link = this.getAttribute('data-link');

    // Redirect to the specified link
    window.location.href = link;
  });
});






/* Scroll bar */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// function sendMail(){
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value
//   }
  
// console.log(params)
// return;
// const serviceID = "service_oah5gyw"
// const templateID = "template_lh4s1gp"

// emailjs.send(serviceID,templateID,params)
// .then(
//   res =>{
//     document.getElementById("name").value = ""
//     document.getElementById("email").value = ""
//     document.getElementById("message").value = ""
    
//     console.log(res);
//     alert("Your message sent successfully")
//   }
// )
// .catch((err) => console.log(err));
// }
