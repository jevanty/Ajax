{

    let searchByTitle = document.querySelector(".searchTitle");
    let searchByYear = document.querySelector(".searchYear");
    let movieList = document.querySelector(".list");

    //----------------------------search by title-------------------------------


let createMovieList = (responseData) => {

    movieList.innerHTML = '';

        for (i = 0; i < responseData.Search.length; i++) {

            let movieTitle = document.createElement('li');
            let movieID = responseData.Search[i].imdbID;
            movieTitle.innerHTML = /*html*/`
            <a href="showmovie.html?id=${movieID}"><p id="${responseData.Search[i].imdbID}" class="movieDescriptif">${responseData.Search[i].Title} <br>
            ${responseData.Search[i].Year}</p></a>
            
            `;

            movieList.appendChild(movieTitle);        }

        console.log(responseData);
    }


    let searchMovieByTitle = (inputValue) => {
        let url = `http://www.omdbapi.com/?apikey=a49f54f4&s=${inputValue}`;

        fetch(url)

            .then((response) => response.json())

            .then((responseData) => createMovieList(responseData))

            .catch(error => console.log(error));
            
            
    };



    let handleKeyUpSearch = e => {
        let input = e.currentTarget;
        let inputValue = input.value;
        searchMovieByTitle(inputValue);
    };


    let start = () => {

        searchByTitle.addEventListener(`keyup`, handleKeyUpSearch);
    };

    start();

}