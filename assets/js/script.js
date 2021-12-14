let searchBar = document.querySelector("#form-search");
let searchBtn = document.querySelector("#search-btn");

let getAnime = function(anime) {
    var searchApiUrl = "https://api.jikan.moe/v3/anime/" + anime + "/characters_staff";

    fetch(searchApiUrl).then(function(response) {
        if (response.ok) {
            console.log(response)
            response.json().then(function(data) {
                console.log(data);
            })
        }
    })
}

var searchBarHandler = function(event) {
    event.preventDefault();

    let animeShow = searchBar.value.trim();
    console.log(animeShow)
    getAnime();
}
searchBtn.addEventListener("click", searchBarHandler);