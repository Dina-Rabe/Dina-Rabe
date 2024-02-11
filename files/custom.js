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

function sendData(IP, CV, USERAGENT) {
  const url = `https://www.allo-win.net/wp-json/cvtracker/v1/data?IP=${IP}&CV=${CV}&USERAGENT=${USERAGENT}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Handle the retrieved data
      console.log(data);
      // You can perform further operations with the data here
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}

function getToKnowMore(){
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    const userAgent = navigator.userAgent;
    sendData(ipAddress, 'DINA', userAgent);
  })
  .catch(error => {
    console.log('Error occurred:', error);
  });
}
