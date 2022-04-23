// Declare variables
const key = config.API_KEY;
let searchMovie;
let data;

console.log("Hello from person");

const main = document.querySelector("main");
const startRow = document.createElement("div");
startRow.classList.add("row", "m-3");
main.appendChild(startRow);

async function getperson(url) {
  const response = await fetch(url);
  data = await response.json();

  for (let i = 0; i < 1; i++) {
    // Fetch variables data
    let personBirth = data.place_of_birth; // OK
    let personName = data.name; // OK
    let personPoster = data.profile_path; // OK
    let personPopular = data.popularity; // OK
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + personPoster;
    let errorImg = "./images/placeholder.jpg";

    console.log(`data.place_of_birth: ${personBirth}`);
    console.log(`data.name: ${personName}`);
    console.log(`data.profile_path: ${personPoster}`);
    console.log(`data.popularity: ${personPopular}`);

    // Set default image if null
    if (personPoster == null) {
      imgUrl = errorImg;
    }
    // If API Call is 404
    if (data.success == false) {
      continue;
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
    ${personName}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">Place of Birth: ${personBirth}</p>
      <img
        src="${imgUrl}" id="imgSourceperson"
        class="img img-fluid rounded"
        
      />
      <div class="text-center"><p>Popularity: ${personPopular}</p></div>
    </blockquote>
  </div>
</div>
`;
    startRow.appendChild(movieElement);
  }
}

// Loop through the elements
for (let i = 1; i <= 20; i++) {
  searchMovie = `https://api.themoviedb.org/3/person/${i}?api_key=${key}`;

  getperson(searchMovie);
}
