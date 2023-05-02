function changeCss () {
    var header = document.querySelector("header");
    var h3 = document.getElementsByClassName(".h3");
    this.scrollY > 150 ? (header.style.backgroundColor = "#161616", h3.style.color = "white") : (header.style.backgroundColor = "transparent", h3.style.color = "#");
  }
  window.addEventListener("scroll", changeCss , false);