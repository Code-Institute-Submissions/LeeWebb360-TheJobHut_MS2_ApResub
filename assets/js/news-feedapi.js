//Credit : Rapid api https://rapidapi.com/marketplace
//Credit : Youtube.com for tutorials in api and jquery functions
$(document).ready(function () {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=employmentuk&pageNumber=6&pageSize=12&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null",
        "method": "GET",
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
        let post_limit = 2;
        let materializeColWidth = 12 / post_limit;
        for (var i in latestNews) {
            output += `
    <div class="carousel-cell container-inline-block">
    <div class="col 1${materializeColWidth} m6 s12">   
    <div class="card medium hoverable">
    ${latestNews[i].image.thumbnail ?
                    `<div class="card-image">
                    <a href="${latestNews[i].url}" target="_blank">
        <img src="${latestNews[i].image.thumbnail}" class="img-fluid img-thumbnail" style="width:210px;height:120px"></a>    
      </div>`: null}
      <div class="card-content">
      <h6 class="latest-news-title" d-none d-md-inline-block>${latestNews[i].title}</h6>
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
                    prevNextButtons: false,
                    imagesLoaded: true,
                    resize: true
                });
            }, 0);
        }
    });
})



