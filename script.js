const apikey="e866513a7dc88182fca969811e2d4f95"
console.log(apikey)
const popularmovielink="https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1"
let MovieAccordingintognerid="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres="+28;
let getapikey="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey+"&language=en-US"
window .addEventListener("load",async ()=>{
    let pr=await(await fetch(MovieAccordingintognerid)).json();
    console.log(pr)
    let halfimglink="http://image.tmdb.org/t/p/w500"
    let posterpathimg=pr.results[0].poster_path;
    let fullimglink=halfimglink+posterpathimg;
    console.log(fullimglink)
    
})
let imgtag=document.createElement("img");
imgtag.src="http://image.tmdb.org/t/p/w500/3GrRgt6CiLIUXUtoktcv1g2iwT5.jpg" ;
imgtag.width=150;
imgtag.height=200;
let posterContainer=document.querySelector(".poster-container");
posterContainer.appendChild(imgtag);
