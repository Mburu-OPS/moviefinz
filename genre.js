const key = config.API_KEY;
const genre =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  key +
  "&language=en-US";

async function getApi(url) {
  const response = await fetch(url);
  let data = await response.json();
  let arrImage = [
    "./images2/action.jpg",
    "./images2/adventure.jpg",
    "./images2/animation.jpg",
    "./images2/comedy.jpg",
    "./images2/crime.jpg",
    "./images2/documentary.jpg",
    "./images2/drama.jpg",
    "./images2/family.jpg",
    "./images2/fantasy.jpg",
    "./images2/history.jpg",
    "./images2/horror.png",
    "./images2/music.jpg",
    "./images2/mystery.jpg",
    "./images2/romance.jpg",
    "./images2/science-fiction.jpg",
    "./images2/tv.jpg",
    "./images2/thriller.jpg",
    "./images2/war.jpg",
    "./images2/western.jpg",
  ];
  let arrLink = [
    "./action/find.html",
    "./adventure/find.html",
    "./animation/find.html",
    "./comedy/find.html",
    "./crime/find.html",
    "./documentary/find.html",
    "./drama/find.html",
    "./family/find.html",
    "./fantasy/find.html",
    "./history/find.html",
    "./horror/find.html",
    "./music/find.html",
    "./mystery/find.html",
    "./romance/find.html",
    "./fiction/find.html",
    "./tv/find.html",
    "./thriller/find.html",
    "./war/find.html",
    "./western/find.html",
  ];

  const main = document.querySelector("main");
  const startRow = document.createElement("div");
  startRow.classList.add("row", "m-3");
  main.appendChild(startRow);

  // Loop througb the objects API
  for (let i = 0; i < data.genres.length; i++) {
    let obj = data.genres[i];

    // Fetch variables data

    let genreName = obj.name;
    let genreid = obj.id;
    let genreTitle = obj.original_title;
    let genrePoster = obj.poster_path;
    let genreReleaseDate = obj.release_date;
    let genreVoteAvg = obj.vote_average;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + genrePoster;
    let errorImg = "../images/placeholder.jpg";

    const main = document.querySelector("main");
    const movieElement = document.createElement("div");
    movieElement.classList.add("col-sm-4", "mb-4");

    // Create dynamic elements with Bootstrap
    movieElement.innerHTML = `
<div class="card">
  <div
    class="card-header text-center"
    style="background-color: rgb(93, 95, 185)"
  >
    ${genreName}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">ID: ${genreid}</p>
      <img
        src="${arrImage[i]}"
        class="img img-fluid rounded"
        style="width: 350px; height: auto"
      />
      <div class="text-center"><a href="${arrLink[i]}">Search</a></div>
    </blockquote>
  </div>
</div>
`;
    startRow.appendChild(movieElement);
  }
}

getApi(genre);
