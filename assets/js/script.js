let searchBar = document.querySelector("#form-search");
let searchBtn = document.querySelector("#search-btn");
let infoHold = document.querySelector("#info-hold");

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
    let title = document.createElement("h3")
    title.textContent = "Title: " + data.results[0].title
    let rating = document.createElement("p")
    rating.textContent = "Rating: " + data.results[0].rated 
    let epi = document.createElement("p")
    epi.textContent = "Episodes: " + data.results[0].episodes
    let score = document.createElement("p")
    score.textContent = "Overall Score: " + data.results[0].score
    let synops = document.createElement("p")
    synops.textContent = "Description: " + data.results[0].synopsis

    infoHold.appendChild(title);
    infoHold.appendChild(rating);
    infoHold.appendChild(epi);
    infoHold.appendChild(score);
    infoHold.appendChild(synops);
}

var searchBarHandler = function(event) {
    event.preventDefault();
    let animeShow = searchBar.value.trim();
    console.log(animeShow)
    getAnime(animeShow);
}
searchBtn.addEventListener("click", searchBarHandler);