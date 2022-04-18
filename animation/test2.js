const movieElement = document.createElement("div");

movieElement.innerHTML = `<div class="col-sm-4">
<div class="card">
  <div
    class="card-header text-center"
    style="background-color: rgb(93, 95, 185)"
  >
    ${adventureTitle}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">ID: 432130</p>
      <img
        src="${imgUrl}"
        class="img img-fluid rounded"
        style="width: auto; height: 250px"
      />
      <div class="text-center"><a href="#">Take a peak!</a></div>
      <p class="text-center">Release Date: ${adventureReleaseDate}</p>
      <p class="text-center">Vote (Avg) : ${adventureVoteAvg}</p>
    </blockquote>
  </div>
</div>
</div>`;
