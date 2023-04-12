"use strict";


const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

async function getImages(evt) {
  evt.preventDefault();

  const searchTerm = document.getElementById("search").value;

  const response = await axios.get(("http://api.giphy.com/v1/gifs/search"),
  {params: { q: searchTerm, api_key: apiKey }});

  const imagesURL = response.data.data.map(image => image.images.original.url);
  addImages(imagesURL);
}

function addImages(images) {
  let max = images.length;
  const $newImgDiv = $("<div>");

  let i = Math.floor(Math.random() * max);

  const $newImg = $("<img>", {
    src: images[i]
  });

  $newImgDiv.append($newImg);
  $("#display-area").append($newImgDiv);
}

$("form").on("submit", getImages);
