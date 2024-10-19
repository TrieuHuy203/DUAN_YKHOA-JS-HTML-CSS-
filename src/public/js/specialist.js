const scrollUpButton = document.getElementById("scrollUpButton");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
};

scrollUpButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
