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
genresCardBody.appendChild(genresCardTitle);
genresCardBody.appendChild(genresCardText);
genresCardBody.appendChild(genresCardLink);
genresCard.appendChild(genresCardBody);
col6.appendChild(genresCard);
row.appendChild(col6);

/*
<div class="row">
    <div class="col-sm-4">
        <div class="card">
            <div class="card-header">
            Quote
            </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
        </div>
        </div>
    </div>
</div>

*/
