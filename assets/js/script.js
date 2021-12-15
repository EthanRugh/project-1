filenameEl = document.getElementById("filename");
episodeEl = document.getElementById("episode");
imageEl = document.getElementById("image");
videoEl = document.getElementById("video");
let searchBar = document.querySelector("#form-search");
let searchBtn = document.querySelector("#search-btn");
let infoHold = document.querySelector("#info-hold");
let title = document.createElement("h3");
let rating = document.createElement("p")
let epi = document.createElement("p");
let score = document.createElement("p");
let synops = document.createElement("p");

let getAnime = function(animeShow) {
    var searchApiUrl = "https://api.jikan.moe/v3/search/anime?q=" + animeShow;

    fetch(searchApiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                infoHandler(data);
            })
        }
    })
}

let infoHandler = function(data) {
    console.log(data);
    
    title.textContent = "Title: " + data.results[0].title
    rating.textContent = "Rating: " + data.results[0].rated 
    epi.textContent = "Episodes: " + data.results[0].episodes
    score.textContent = "Overall Score: " + data.results[0].score
    synops.textContent = "Description: " + data.results[0].synopsis

    infoHold.appendChild(title);
    infoHold.appendChild(rating);
    infoHold.appendChild(epi);
    infoHold.appendChild(score);
    infoHold.appendChild(synops);
}

$("#title-search").submit(function(event){ {
    event.preventDefault();
    let animeShow = searchBar.value.trim();
    title.textContent = "";
    rating.textContent = "";
    epi.textContent = "";
    score.textContent = "";
    synops.textContent = "";
    getAnime(animeShow);
}
})

function imageSearch(form) {
  let queryURL = "https://api.trace.moe/search";
  var settings = {
    "url": queryURL,
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  })
  .done(function (response) {
      const jsonData = JSON.parse(response);
      filenameEl.innerHTML = "Show: " + jsonData.result[0].filename;
      episodeEl.innerHTML = "Episode: " + jsonData.result[0].episode;
      imageEl.src = jsonData.result[0].image + "&size=l"; 
      videoEl.src = jsonData.result[0].video + "&size=l"; 
      videoEl.classList.remove("d-none");
  })
}

$("#reverse-img-file").submit(function(e){
  e.preventDefault();
  let formdata = null;
  if (window.FormData){
    formdata = new FormData($(this)[0]);
  }
  imageSearch(formdata);
});