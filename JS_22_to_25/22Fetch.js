async function fetchAPI(url) {
  try {
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchAPI("https://api.github.com/users");
