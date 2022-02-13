let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users", true);
xhr.send();
xhr.timeout = 1000;
xhr.responseType = "json";
xhr.onprogress = function (e) {
  console.log("Loading...");
};
xhr.onload = function (e) {
  console.log(e.loaded + " bytes loaded Successfully.");
  console.log(xhr.response);
};
xhr.onerror = function (e) {
  console.log("Error Occured!!");
};

xhr.ontimeout = function () {
  console.log("Canceled because it takes too long");
};
