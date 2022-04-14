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

    // Row
    const row = document.createElement("div");
    row.classList.add("row");

    // col-sm-6
    const col6 = document.createElement("div");
    col6.classList.add("col-sm-6");

    // Card
    const genresCard = document.createElement("div");
    genresCard.classList.add("card", "text-white", "mb-3");
    genresCard.setAttribute("style", "width: 10rem");
    genresCard.setAttribute("style", "background-color: #5d5fb9");

    // Img
    const genresCardImg = document.createElement("img");
    genresCardImg.classList.add("card-img-top", "img-fluid");
    /*
    genresCardImg.src =
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/onGdT8sYi89drvSJyEJnft97rOq.jpg";
    
    */
    genresCardImg.id = "imgBulk";

    // Card Body
    const genresCardBody = document.createElement("div");
    genresCardBody.classList.add("card-body");

    // Card Title
    const genresCardTitle = document.createElement("h5");
    genresCardTitle.classList.add("card-title");
    genresCardTitle.innerHTML = `${obj.name}`;

    // Card Text
    const genresCardText = document.createElement("p");
    genresCardText.classList.add("card-text");
    genresCardText.innerHTML = `ID: ${obj.id}`;

    // Card Link
    const genresCardLink = document.createElement("a");
    genresCardLink.id = "card-link";
    genresCardLink.classList.add("btn");
    genresCardLink.href = "#";
    genresCardLink.innerHTML = `Visit Genre`;
    genresCardLink.setAttribute("style", "background-color: #5d5fb9");

    // Append Child

    document.body.appendChild(row);
    document.body.appendChild(col6);
    document.body.appendChild(genresCard);
    document.body.appendChild(genresCardImg);
    document.body.appendChild(genresCardBody);
    document.body.appendChild(genresCardTitle);
    document.body.appendChild(genresCardText);
    document.body.appendChild(genresCardLink);
  }
}

getApi(genre);
