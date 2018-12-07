// //Create the XHR Object
// let xhr = new XMLHttpRequest;
// //Call the open function, GET-type of request, url, true-asynchronous
// xhr.open('GET', ' https://thatsthespir.it/api', true)
// //call the onload 
// xhr.onload = function() 

// {
//     //check if the status is 200(means everything is okay)
//     if (this.status === 200) 
//         {
//             //return server response as an object with JSON.parse
//             console.log(JSON.parse(this.responseText));
//             document.getElementById("quotes").innerHTML = this.responseText;
// }
//         }
// //call send
// xhr.send();
// //Common Types of HTTP Statuses
// // 200: OK
// // 404: ERROR
// // 403: FORBIDDEN


let xhr = new XMLHttpRequest();

xhr.open("GET", "https://thatsthespir.it/api", true);

xhr.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {


        document.getElementById("quote").innerHTML = this.responseText;
        console.log(JSON.parse(this.responseText));
    }
};

xhr.send();

//----------------------------------------------------------------------------------------------------------------------------------

let url = new URLSearchParams(window.location.search);
url = url.get('id');

//alert(url)

let xhr = new XMLHttpRequest();

let articles = "";
let feature = "";
let latest = "";
let carrous = "";
let other = "";

xhr.open("GET", "https://foodog.herokuapp.com/articles", true);

xhr.onreadystatechange = function () {

  if (this.readyState == 4 && this.status == 200) {

    let parsedData = JSON.parse(xhr.responseText);
    console.log(parsedData);

     for (let i = 0; i < parsedData.docs.length; i++) {

         if(parsedData.docs[i]._id == url) {



    //          main += /*html*/ `
           
           
    //        <h2>nutrition</h2>
    //             <h3>the 11 dog food label tricks every owner needs to know</h3>

    //             <!-- Image -->
    //             <figure class="container-fluid">
    //                 <img src="${parsedData.docs[i].imgUrl}" alt="main picture">
    //             </figure>
    //             `

    //   document.querySelector("#articleTitle").innerHTML = main;


other += /*html*/ `
  
    <div class="asideOne col-lg-6">
      <div class="aside-img col-12"> <a href="test.html?id=${parsedData.docs[i]._id}"><img class="col-12" src="${parsedData.docs[i].imgUrl}"></a></div>
      <p class="aside-title col-12">${parsedData.docs[i].title}</p>
    </div>
   `
}}

document.querySelector("body").innerHTML = other;

}
}
xhr.send();