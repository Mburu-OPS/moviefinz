// Store value
let searchElement = document.querySelectorAll(".form-control").value;

const key1 = config1.API_KEY;
console.log(`Value: ${searchElement}`);
const searchMovie =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  key1 +
  "&language=en-US&query=" +
  searchElement;

async function getResults(url) {
  console.log("Hello from results");

  const response = await fetch(url);
  let data = await response.json();
  console.log(data.results);

  const main = document.querySelector("main");
  const startRow = document.createElement("div");
  startRow.classList.add("row", "m-3");
  main.appendChild(startRow);

  // Loop through all the elements
  for (let i = 0; i < data.results.length; i++) {
    let obj = data.results[i];

    // Fetch variables data
    let resultsid = obj.id;
    let resultsTitle = obj.original_title;
    let resultsPoster = obj.poster_path;
    let resultsReleaseDate = obj.release_date;
    let resultsVoteAvg = obj.vote_average;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + resultsPoster;
    let errorImg = "../images/placeholder.jpg";

    // Set default image if null
    if (resultsPoster == null) {
      imgUrl = errorImg;
    }

    const main = document.querySelector("main");
    const movieElement = document.createElement("div");
    movieElement.classList.add("col-sm-4", "mb-3");

    movieElement.innerHTML = `
<div class="card">
  <div
    class="card-header text-center"
    style="background-color: rgb(93, 95, 185)"
  >
    ${resultsTitle}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">ID: ${resultsid}</p>
      <img
        src="${imgUrl}" id="imgSource"
        class="img img-fluid rounded"
        
      />
      <div class="text-center"><a href="#">Take a peak!</a></div>
      <p class="text-center">Release Date: ${resultsReleaseDate}</p>
      <p class="text-center">Vote (Avg) : ${resultsVoteAvg}</p>
    </blockquote>
  </div>
</div>
`;
    startRow.appendChild(movieElement);
  }
}

getResults(searchMovie);
