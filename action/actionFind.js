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

    // Fetch variables data

    let actionid = obj.id;
    let actionTitle = obj.original_title;
    let actionPoster = obj.poster_path;
    let actionReleaseDate = obj.release_date;
    let actionVoteAvg = obj.vote_average;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + actionPoster;

    // action row
    const row = document.createElement("div");
    row.classList.add("row", "m-3");

    // action col-4
    const col4 = document.createElement("div");
    col4.classList.add("col-sm-4");

    // action Card
    const actionCard = document.createElement("div");
    actionCard.classList.add("card");

    // action Header
    const actionHeader = document.createElement("div");
    actionHeader.classList.add("card-header", "text-center");
    actionHeader.innerHTML = `${actionTitle}`;
    actionHeader.style.backgroundColor = "#5d5fb9";

    // Card Body
    const actionBody = document.createElement("div");
    actionBody.classList.add("card-body");

    // Blockquote
    const actionBlockquote = document.createElement("blockquote");
    actionBlockquote.classList.add("blockquote", "mb-0", "text-center");

    // Card paragraph
    const actionPara = document.createElement("p");
    actionPara.classList.add("text-center");
    actionPara.innerHTML = `ID: ${obj.id}`;

    // Card date
    const actionDate = document.createElement("p");
    actionDate.classList.add("text-center");
    actionDate.innerHTML = `Release Date: ${actionReleaseDate}`;

    // Card vote average
    const actionRating = document.createElement("p");
    actionRating.classList.add("text-center");
    actionRating.innerHTML = `Vote (Avg) : ${actionVoteAvg}`;

    // Link container
    const actionLinkContainer = document.createElement("div");
    actionLinkContainer.classList.add("text-center");

    // Card Link
    const actionLink = document.createElement("a");
    actionLink.href = "#";
    actionLink.innerHTML = "Take a peak!";

    // Card Image
    const actionImage = document.createElement("img");
    actionImage.src = imgUrl;
    actionImage.classList.add("img", "img-fluid", "rounded");
    actionImage.style.width = "auto";
    actionImage.style.height = "250px";

    // Append Child
    row.appendChild(col4);
    col4.appendChild(actionCard);
    actionCard.appendChild(actionHeader);
    actionCard.appendChild(actionBody);
    actionBody.appendChild(actionBlockquote);
    actionBlockquote.appendChild(actionPara);
    actionBlockquote.appendChild(actionImage);
    actionBlockquote.appendChild(actionLinkContainer);
    actionLinkContainer.appendChild(actionLink);
    actionBlockquote.appendChild(actionDate);
    actionBlockquote.appendChild(actionRating);
    document.body.appendChild(row);
  }
}

getAction(searchMovie);
