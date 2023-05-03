//Nav bar
const openItem = document.querySelector(".open-item")
const closeItem = document.querySelector(".close-item")
const navLinks = document.querySelector(".nav-links")

openItem.addEventListener("click", function(){
	navLinks.classList.toggle("nav-links-active")
})

closeItem.addEventListener("click", function(){
	navLinks.classList.toggle("nav-links-active")
});