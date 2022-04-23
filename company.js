const key = config.API_KEY;
let searchMovie;

console.log("Hello from company");

// Create row element outside for loop
const main = document.querySelector("main");
const startRow = document.createElement("div");
startRow.classList.add("row", "m-3");
main.appendChild(startRow);

async function getcompany(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(`data.headquarters: ${data.headquarters}`);
  console.log(`data.name: ${data.name}`);
  console.log(`data.logo_path: ${data.logo_path}`);
  console.log(`data.homepage: ${data.homepage}`);

  for (let i = 0; i < 1; i++) {
    // Fetch variables data

    let companyHead = data.headquarters;
    let companyName = data.name;
    let companyPoster = data.logo_path;
    let companyURL = data.homepage;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + companyPoster;
    let errorImg = "./images/placeholder.jpg";

    // Set default image if null
    if (companyPoster == null) {
      imgUrl = errorImg;
    }

    // If 404 POST error
    if (data.success == false) {
      continue;
    }
    // Do not execute if is empty
    if (companyName == "") {
      continue;
    }
    if (companyHead == "") {
      continue;
    }

    const main = document.querySelector("main");
    const movieElement = document.createElement("div");
    movieElement.classList.add("col-sm-4", "mb-3");

    // Add elements dynamic with Bootstrap
    movieElement.innerHTML = `
<div class="card">
  <div
    class="card-header text-center"
    style="background-color: rgb(93, 95, 185)"
  >
    ${companyName}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">Headquarters: ${companyHead}</p>
      <img
        src="${imgUrl}" id="imgSourceCompany"
        class="img img-fluid rounded"
        
      />
      <div class="text-center"><a href="${companyURL}" target="_blank"><span id="urlText">Take a peak!</span></a></div>
    </blockquote>
  </div>
</div>
`;
    startRow.appendChild(movieElement);
  }
}

// Loop through the elements
for (let i = 1; i <= 25; i++) {
  searchMovie = `https://api.themoviedb.org/3/company/${i}?api_key=${key}`;
  // console.log(searchMovie);
  getcompany(searchMovie);
}
