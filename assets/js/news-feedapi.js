$(document).ready(function () {


    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=employment%20uk&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null",
        "method": "GET",
        "dataType": "Json",
        "headers": {
            "x-rapidapi-key": "d3c86e5140mshf9ee7714ea78605p16d425jsnf445de32948d",
            "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response.value);

        let cardArray = [];
        let output = "";
        let latestNews = response.value;

        for (var i in latestNews) {
            output += `
    <div class="carousel-cell">
    <div class="col">   
    <div class="card hoverable">
    ${latestNews[i].image.url ?
      `<div class="card-image">
        <img src="${latestNews[i].image.webpageUrl}" class="responsive-img">
      </div>`:null}
      <div class="card-content">
      <span class="card-title"><i class="material">more_vert</i></span>
      <h6>${latestNews[i].title}</h6>
    </div>

    <div class="card-reveal">
    <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
    <p>${latestNews[i].description}</p>
    </div>
    
    <div class="card-action">
    <a href="${latestNews[i].url}" target="_blank" class="btn">Read More</a>
    </div>
    </div>
    </div>
    </div>
    `;

        }

        if (output !== "") {
            $("#news-carousel").html(output);
            setTimeout(() => {
                let elem = document.querySelector('#news-carousel');
                let flkty = new Flickity(elem, {
                    cellAlign: 'left',
                    contain: true,
                    autoPlay: true,
                    freeScroll: true,
                    wrapAround: true,
                    pageDots: false,
                    prevNextButtons: false
                });
            }, 0);

        }
    });
})

