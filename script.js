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
      imageEl.src = jsonData.result[0].image + "&size=l"; 
      videoEl.src = jsonData.result[0].video + "&size=l"; 
      videoEl.classList.remove("d-none");
  })
}

function imageURL(form) {
  let queryURL = "https://api.trace.moe/search";
  var settings = {
    "url": queryURL,
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "application/x-www-form-urlencoded",
    "contentType": false,
    "data": form
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  })
  .done(function (response) {
      const jsonData = JSON.parse(response);
      //filenameEl.innerHTML = "Show: " + jsonData.result[0].filename;
      episodeEl.innerHTML = "Episode: " + jsonData.result[0].episode;
      imageEl.src = jsonData.result[0].image + "&size=l"; 
      videoEl.src = jsonData.result[0].video + "&size=l"; 
      videoEl.classList.remove("d-none");
  })
};

$("#reverse-img-file").submit(function(e){
  e.preventDefault();
  let formdata = null;
  if (window.FormData){
    formdata = new FormData($(this)[0]);
  }
  imageSearch(formdata);
});

$("#reverse-img-url").submit(function(e){
  e.preventDefault();
  let formdata = null;
  if (window.FormData){
    formdata = new FormData($(this)[0]);
  }
  imageURL(formdata);
});

// import axios from 'axios';

// anilistQuery = 'https://graphql.anilist.co';

// // General options for Axios instance
// export const options = {
// 	headers: {
// 		'	Accept': 'application/json',
// 	},
// };

// /**
//  * Axios instance
//  *any data provided in instance.get will be merged with options
//  */
// export const instance = axios.create({
// 	baseURL: queryURL,
// 	options,
// });

// // Query data for Anilist GraphQL Api
// query = `
// query ($id: Int) {
//  Media (id:$id , type: ANIME) { 
//     id
//     title {
//       english
//       native
//     }
//     description(asHtml:false)
//     seasonYear
//     coverImage {
//       large
//     }
//     bannerImage
//     genres
//     externalLinks {
//       id
//       url
//       site
//     }
//     averageScore
//     siteUrl
//   }
// }
// `;
// console.log(query);

// async function asyncCall () {
//   await fetch(
//         `https://api.trace.moe/search?anilistInfo&url=${imageEl.src}`
//       ).then((e) => e.json(response));
//       const anilistInfo = JSON.parse(response);
//       console.log(anilistInfo);
//       filenameEl.innerHTML = "Show: " + jsonData.media.title;
// } 

// asyncCall();
//    });
// };
