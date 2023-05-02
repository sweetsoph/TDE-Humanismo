function changeCss () {
    var header = document.querySelector("header");
    this.scrollY > 150 ? header.style.backgroundColor = "#161616" : header.style.backgroundColor = "transparent";
  }
  window.addEventListener("scroll", changeCss , false);