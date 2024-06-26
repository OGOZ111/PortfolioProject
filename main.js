document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.querySelector("#backToTop");
  const mobButton = document.querySelector(".mobile");
  const nav = document.querySelector("nav ul");
  const menuItems = document.querySelectorAll("nav ul li a");
  const header = document.querySelector("header");
  const modalbutton = document.querySelector("#modalbutton");
  const overlay = document.querySelector(".overlay");
  const closebutton = document.querySelector(".close");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backButton.style.display = "block";
    } else {
      backButton.style.display = "none";
    }
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      header.classList.add("bg");
    } else {
      header.classList.remove("bg");
    }
  }

  const getToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mobMenu = () => {
    for (const item of menuItems) {
      item.addEventListener("click", mobMenu);
    }

    if (nav.classList.contains("responsive")) {
      nav.classList.remove("responsive");
    } else {
      nav.classList.add("responsive");
    }
  };

  const modshow = () => {
    overlay.classList.toggle("visible");
  };

  closebutton.addEventListener("click", modshow);
  modalbutton.addEventListener("click", modshow);
  mobButton.addEventListener("click", mobMenu);
  backButton.addEventListener("click", getToTop);
});
