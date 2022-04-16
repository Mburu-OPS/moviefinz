const key = config.API_KEY;
const genre =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  key +
  "&language=en-US";

async function getApi(url) {
  const response = await fetch(url);
  let data = await response.json();
  let arrImage = [
    "./images/action.jpg",
    "./images/adventure.jpg",
    "./images/animation.jpg",
    "./images/comedy.jpg",
    "./images/crime.jpg",
    "./images/documentary.jpg",
    "./images/drama.jpg",
    "./images/family.jpg",
    "./images/fantasy.jpg",
    "./images/history.jpg",
    "./images/horror.png",
    "./images/music.jpg",
    "./images/mystery.jpg",
    "./images/romance.jpg",
    "./images/science-fiction.jpg",
    "./images/tv.jpg",
    "./images/thriller.jpg",
    "./images/war.jpg",
    "./images/western.jpg",
  ];
  let arrLink = ["./action/actionFind.html"];
  for (let i = 0; i < data.genres.length; i++) {
    let obj = data.genres[i];
    console.log("Name: " + obj.name + " -- ID: " + obj.id);

    if (i == 0) {
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
      genresHeader.style.backgroundColor = "#5d5fb9";

      // Card Body
      const genresBody = document.createElement("div");
      genresBody.classList.add("card-body");

      // Blockquote
      const genresBlockquote = document.createElement("blockquote");
      genresBlockquote.classList.add("blockquote", "mb-0", "text-center");

      // Card paragraph
      const genresPara = document.createElement("p");
      genresPara.classList.add("text-center");
      genresPara.innerHTML = `ID: ${obj.id}`;

      // Card Link
      const genresLink = document.createElement("a");
      genresLink.href = arrLink[i];
      genresLink.innerHTML = "Search";

      // Card Image
      const genresImage = document.createElement("img");
      genresImage.src = arrImage[i];
      genresImage.classList.add("img", "img-fluid", "rounded");
      genresImage.style.width = "250px";
      genresImage.style.height = "auto";

      // Append Child
      row.appendChild(col4);
      col4.appendChild(genresCard);
      genresCard.appendChild(genresHeader);
      genresCard.appendChild(genresBody);
      genresBody.appendChild(genresBlockquote);
      genresBlockquote.appendChild(genresPara);
      genresBlockquote.appendChild(genresImage);
      genresBlockquote.appendChild(genresLink);
      document.body.appendChild(row);
    } else {
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
      genresHeader.style.backgroundColor = "#5d5fb9";

      // Card Body
      const genresBody = document.createElement("div");
      genresBody.classList.add("card-body");

      // Blockquote
      const genresBlockquote = document.createElement("blockquote");
      genresBlockquote.classList.add("blockquote", "mb-0", "text-center");

      // Card paragraph
      const genresPara = document.createElement("p");
      genresPara.classList.add("text-center");
      genresPara.innerHTML = `ID: ${obj.id}`;

      // Card Link
      const genresLink = document.createElement("a");
      genresLink.href = arrLink[i];
      genresLink.innerHTML = "Search";

      // Card Image
      const genresImage = document.createElement("img");
      genresImage.src = arrImage[i];
      genresImage.classList.add("img", "img-fluid", "rounded");
      genresImage.style.width = "250px";
      genresImage.style.height = "auto";

      // Append Child
      col4.appendChild(genresCard);
      genresCard.appendChild(genresHeader);
      genresCard.appendChild(genresBody);
      genresBody.appendChild(genresBlockquote);
      genresBlockquote.appendChild(genresPara);
      genresBlockquote.appendChild(genresImage);
      genresBlockquote.appendChild(genresLink);
      document.body.appendChild(col4);
    }
  }
}

getApi(genre);
