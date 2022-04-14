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

    // Card
    const genresCard = document.createElement("div");
    genresCard.classList.add("card", "text-white", "mb-3");
    genresCard.setAttribute("style", "width: 18rem");
    genresCard.setAttribute("style", "background-color: #5d5fb9");
    genresCard.innerHTML = `${obj.name}`;

    // Img
    const genresCardImg = document.createElement("img");
    genresCardImg.classList.add("card-img-top", "img-fluid");

    // Card Body
    const genresCardBody = document.createElement("div");
    genresCardBody.classList.add("card-body");

    // Append Child
    document.body.appendChild(genresCard);
    document.body.appendChild(genresCardImg);
    document.body.appendChild(genresCardBody);
  }
}

getApi(genre);
