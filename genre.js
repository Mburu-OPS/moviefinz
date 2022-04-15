const key = config.API_KEY;
const genre =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  key +
  "&language=en-US";

async function getApi(url) {
  const response = await fetch(url);
  let data = await response.json();
  for (let i = 0; i < data.genres.length; i++) {
    let obj = data.genres[i];
    console.log("Name: " + obj.name + " -- ID: " + obj.id);

    // Genres row
    const row = document.createElement("div");
    row.classList.add("row", "m-3");

    // Genres col-4
    const col4 = document.createElement("div");
    col4.classList.add("col-sm-4");

    // Genres Card
    const genresCard = document.createElement("div");
    genresCard.classList.add("card");

    // Genres Header
    const genresHeader = document.createElement("div");
    genresHeader.classList.add("card-header", "text-center");
    genresHeader.innerHTML = `${obj.name}`;

    // Card Body
    const genresBody = document.createElement("div");
    genresBody.classList.add("card-body");

    // Blockquote
    const genresBlockquote = document.createElement("blockquote");
    genresBlockquote.classList.add("blockquote", "mb-0");

    // Card paragraph
    const genresPara = document.createElement("p");
    genresPara.classList.add("text-center");
    genresPara.innerHTML = `ID: ${obj.id}`;

    // Append Child
    row.appendChild(col4);
    col4.appendChild(genresCard);
    genresCard.appendChild(genresHeader);
    genresCard.appendChild(genresBody);
    genresBody.appendChild(genresBlockquote);
    genresBlockquote.appendChild(genresPara);
    document.body.appendChild(row);
  }
}

getApi(genre);
