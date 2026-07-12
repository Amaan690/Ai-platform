const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-64");

  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("opacity-100");

  // Button icon change
  if (menuBtn.textContent.trim() === "☰") {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});


// Explore Tools 
const exploreBtn = document.getElementById("Explore-tool");
const toolSection = document.getElementById("tool");
exploreBtn.addEventListener("click", () =>{
    toolSection.scrollIntoView({
        behavior:"smooth"
    });
});

const learnMoreBtn = document.getElementById("learn-more");
const priceSection = document.getElementById("price");

learnMoreBtn.addEventListener("click", () => {

    priceSection.scrollIntoView({
        behavior: "smooth"
    });

});