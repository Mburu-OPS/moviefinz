const key = config.API_KEY;

const searchMovie =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
  key +
  "&language=en-US&page=1";

console.log("Hello from top_rated");

async function gettop_rated(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data.results);

  const main = document.querySelector("main");
  const startRow = document.createElement("div");
  startRow.classList.add("row", "m-3");
  main.appendChild(startRow);

  // Loop through the elements
  for (let i = 0; i < data.results.length; i++) {
    let obj = data.results[i];

    // Fetch variables data
    let top_ratedid = obj.id;
    let top_ratedTitle = obj.original_title;
    let top_ratedPoster = obj.poster_path;
    let top_ratedReleaseDate = obj.release_date;
    let top_ratedVoteAvg = obj.vote_average;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + top_ratedPoster;
    let errorImg = "./images/placeholder.jpg";

    // Set default image if null
    if (top_ratedPoster == null) {
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
    ${top_ratedTitle}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">ID: ${top_ratedid}</p>
      <img
        src="${imgUrl}" id="imgSource"
        class="img img-fluid rounded"
        
      />
      <div class="text-center"><a href="#">Take a peak!</a></div>
      <p class="text-center">Release Date: ${top_ratedReleaseDate}</p>
      <p class="text-center">Vote (Avg) : ${top_ratedVoteAvg}</p>
    </blockquote>
  </div>
</div>
`;
    startRow.appendChild(movieElement);
  }
}

gettop_rated(searchMovie);
