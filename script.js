filenameEl = document.getElementById("filename");
episodeEl = document.getElementById("episode");
imageEl = document.getElementById("image");
videoEl = document.getElementById("video");

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
      imageEl.src = jsonData.result[0].image; 
      videoEl.src = jsonData.result[0].video; 
      videoEl.classList.remove("d-none");
  });
}

$("#reverse-img-form").submit(function(e){
  e.preventDefault();
  let formdata = null;
  if (window.FormData){
    formdata = new FormData($(this)[0]);
  }
  imageSearch(formdata);
});
