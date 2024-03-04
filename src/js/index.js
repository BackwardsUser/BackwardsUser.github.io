const arrow = document.getElementById("arrow");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    arrow.classList.add("hide");
    setTimeout(() => {
      arrow.classList.remove("bouncy");
    }, 1000)
  }
});