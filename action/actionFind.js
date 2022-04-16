const key = config.API_KEY;
const searchMovie =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  key +
  "&language=en-US&query=Action";

console.log("Hello from actionFind.js");

async function getAction(url) {
  const response = await fetch(url);
  let data = await response.json();

  for (let i = 0; i < data.results.length; i++) {
    let obj = data.results[i];
    console.log(obj.id);
  }
}

getAction(searchMovie);
