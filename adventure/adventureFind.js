const key = config.API_KEY;
const searchMovie =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  key +
  "&language=en-US&query=Adventure";

console.log("Hello from adventureFind.js");

async function getadventure(url) {
  const response = await fetch(url);
  let data = await response.json();

  for (let i = 0; i < data.results.length; i++) {
    let obj = data.results[i];

    // Fetch variables data

    let adventureid = obj.id;
    let adventureTitle = obj.original_title;
    let adventurePoster = obj.poster_path;
    let adventureReleaseDate = obj.release_date;
    let adventureVoteAvg = obj.vote_average;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + adventurePoster;

    // adventure row
    const row = document.createElement("div");
    row.classList.add("row", "m-3");

    // adventure col-4
    const col4 = document.createElement("div");
    col4.classList.add("col-sm-4");

    // adventure Card
    const adventureCard = document.createElement("div");
    adventureCard.classList.add("card");

    // adventure Header
    const adventureHeader = document.createElement("div");
    adventureHeader.classList.add("card-header", "text-center");
    adventureHeader.innerHTML = `${adventureTitle}`;
    adventureHeader.style.backgroundColor = "#5d5fb9";

    // Card Body
    const adventureBody = document.createElement("div");
    adventureBody.classList.add("card-body");

    // Blockquote
    const adventureBlockquote = document.createElement("blockquote");
    adventureBlockquote.classList.add("blockquote", "mb-0", "text-center");

    // Card paragraph
    const adventurePara = document.createElement("p");
    adventurePara.classList.add("text-center");
    adventurePara.innerHTML = `ID: ${obj.id}`;

    // Card date
    const adventureDate = document.createElement("p");
    adventureDate.classList.add("text-center");
    adventureDate.innerHTML = `Release Date: ${adventureReleaseDate}`;

    // Card vote average
    const adventureRating = document.createElement("p");
    adventureRating.classList.add("text-center");
    adventureRating.innerHTML = `Vote (Avg) : ${adventureVoteAvg}`;

    // Link container
    const adventureLinkContainer = document.createElement("div");
    adventureLinkContainer.classList.add("text-center");

    // Card Link
    const adventureLink = document.createElement("a");
    adventureLink.href = "#";
    adventureLink.innerHTML = "Take a peak!";

    // Card Image
    const adventureImage = document.createElement("img");
    adventureImage.src = imgUrl;
    adventureImage.classList.add("img", "img-fluid", "rounded");
    adventureImage.style.width = "auto";
    adventureImage.style.height = "250px";

    // Append Child
    row.appendChild(col4);
    col4.appendChild(adventureCard);
    adventureCard.appendChild(adventureHeader);
    adventureCard.appendChild(adventureBody);
    adventureBody.appendChild(adventureBlockquote);
    adventureBlockquote.appendChild(adventurePara);
    adventureBlockquote.appendChild(adventureImage);
    adventureBlockquote.appendChild(adventureLinkContainer);
    adventureLinkContainer.appendChild(adventureLink);
    adventureBlockquote.appendChild(adventureDate);
    adventureBlockquote.appendChild(adventureRating);
    document.body.appendChild(row);
  }
}

getadventure(searchMovie);
