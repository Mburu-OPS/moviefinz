const key = config.API_KEY;

const searchMovie =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
  key +
  "&language=en-US&page=1";

console.log("Hello from upcoming");

async function getupcoming(url) {
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
    let upcomingid = obj.id;
    let upcomingTitle = obj.original_title;
    let upcomingPoster = obj.poster_path;
    let upcomingReleaseDate = obj.release_date;
    let upcomingVoteAvg = obj.vote_average;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + upcomingPoster;
    let errorImg = "./images/placeholder.jpg";

    // Set default image if null
    if (upcomingPoster == null) {
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
    ${upcomingTitle}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">ID: ${upcomingid}</p>
      <img
        src="${imgUrl}" id="imgSource"
        class="img img-fluid rounded"
        
      />
      <div class="text-center"><a href="#">Take a peak!</a></div>
      <p class="text-center">Release Date: ${upcomingReleaseDate}</p>
      <p class="text-center">Vote (Avg) : ${upcomingVoteAvg}</p>
    </blockquote>
  </div>
</div>
`;
    startRow.appendChild(movieElement);
  }
}

getupcoming(searchMovie);
