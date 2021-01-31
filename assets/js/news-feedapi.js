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
        console.log(response);

    });


    let output = "";
    let latestNews = "news.value";

    for (var i in latestNews) {
        output += `
    
    <div class="col">   
    <div class="card hoverable">
      <div class="card-image">
        <img src="${latestNews[i].url}" class="responsive-img">
      </div>
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
    `;

    }

    if (output !== "") {
        $(".news-results").html(output);
    }

})

