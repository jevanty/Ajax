

{
    const artistList = document.querySelector('.results');

    let createResultList = (responseData) => {

        artistList.innerHTML = '';

        for (i = 0; i < responseData.length; i++) {

            let artistName = document.createElement('li');
            artistName.innerHTML = responseData[i].name;
            artistName.id = responseData[i].id;
            artistList.appendChild(artistName);
            artistName.addEventListener("click", videoList);
        }

        console.log(responseData);
    }


    let videoList = (e) => {

        let id = e.currentTarget.id;
        let urlVideo = `https://musicdemons.com/api/v1/artist/${id}/songs`;

        fetch(urlVideo)

        .then((response) => response.json())

        .then((responseData) => showVideoList(responseData))  
        };

    let showVideoList = (video) => {
        artistList.innerHTML= "";
        let artistSong = document.querySelector(".songs");
        artistSong.innerHTML='';

        video.forEach(x => {
            let artistVideo = document.createElement('li');
            artistVideo.innerHTML = x.title + "</br>" + `<iframe width="560" height="315" src="https://www.youtube.com/embed/${x.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            artistVideo.id = x.id;
            artistSong.appendChild(artistVideo);
        });


    }

    let search = (entry) => {
        let url = `https://musicdemons.com/api/v1/artist/autocomplete`;

        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-type': "application/x-www-form-urlencoded"
                },
                body: `name=${entry}`
            }
        )

            .then((response) => response.json())

            .then((responseData) => createResultList(responseData))

    };

    let handleKeyUpSearch = e => {
        let input = e.currentTarget;
        console.log(input.value);
        search(input.value);
    };

    let start = () => {
        document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
    };

    start();

}