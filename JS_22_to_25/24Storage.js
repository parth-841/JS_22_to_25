// Local Storage.........
localStorage.setItem("name", "parth");
let arr = [10, 20, 30];
localStorage.setItem("arr", JSON.stringify(arr));
localStorage.removeItem("name");
console.log(JSON.parse(localStorage.getItem("arr")), localStorage.length);
localStorage.clear();

// Session Storage...........
sessionStorage.setItem("name", "parth");
let arr = [10, 20, 30];
sessionStorage.setItem("arr", JSON.stringify(arr));
sessionStorage.removeItem("name");
console.log(JSON.parse(sessionStorage.getItem("arr")), sessionStorage.length);
sessionStorage.clear();
