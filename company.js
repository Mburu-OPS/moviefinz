const key = config.API_KEY;
let searchMovie;

for (let k = 0; k <= 10; k++) {
  searchMovie = `https://api.themoviedb.org/3/company/1?api_key=${key}`;
}
console.log("Hello from romance");

async function getromance(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data.homepage);

  const main = document.querySelector("main");
  const startRow = document.createElement("div");
  startRow.classList.add("row", "m-3");
  main.appendChild(startRow);

  for (let i = 0; i < data.length; i++) {
    let obj = data[i];

    // Fetch variables data

    let romanceid = obj.id;
    let romanceTitle = obj.original_title;
    let romancePoster = obj.poster_path;
    let romanceReleaseDate = obj.release_date;
    let romanceVoteAvg = obj.vote_average;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + romancePoster;
    let errorImg = "../images/placeholder.jpg";

    if (romancePoster == null) {
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
    ${romanceTitle}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">ID: ${romanceid}</p>
      <img
        src="${imgUrl}" id="imgSource"
        class="img img-fluid rounded"
        
      />
      <div class="text-center"><a href="#">Take a peak!</a></div>
      <p class="text-center">Release Date: ${romanceReleaseDate}</p>
      <p class="text-center">Vote (Avg) : ${romanceVoteAvg}</p>
    </blockquote>
  </div>
</div>
`;
    startRow.appendChild(movieElement);
  }
}

getromance(searchMovie);
