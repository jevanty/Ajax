let url = new URLSearchParams(window.location.search);
console.log(window.location.search);
url = url.get('id');



const showMovie = (e) => {

    fetch(`http://www.omdbapi.com/?apikey=a49f54f4&i=${url}`)
        .then(response => response.json())

        .then(parsedData => afficheTonFilm(parsedData));

};

const afficheTonFilm = (parsedData) => {


    let filmDiv = document.querySelector(".movie");

    filmDiv.innerHTML = /*html*/ `

    
    <div class="poster"><img src="${parsedData.Poster}" alt="Film poster"></div> 

    <section class="text">
    <h3 class=titre>${parsedData.Title}</h3>
    <p class="année"><strong>Released year:</strong> ${parsedData.Year}</p> <br>
     <p class="synopsis"><strong>Synopsis:</strong> <br>${parsedData.Plot}</p> <br>
     <p class="acteurs"><strong>Actors:</strong> <br>${parsedData.Actors}</p>
     
    </section>
     `
};

showMovie();