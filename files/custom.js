window.addEventListener("scroll", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }

    document.getElementById("scrollToTopButton").addEventListener("click", function() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    });
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

});

