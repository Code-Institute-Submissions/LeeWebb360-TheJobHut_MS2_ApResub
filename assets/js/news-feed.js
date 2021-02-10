$(document).ready(function () {

    $("#search").on("click", function (e) {
        e.preventDefault();

        const query = $("#searchquery").val();
        const countryQuery = $("#countrynews").val();
        console.log("value of search with values", query);
        console.log("value of search with both values", countryQuery);
      

        let url = `https://newscatcher.p.rapidapi.com/v1/search?q=${query}&lang=en&sort_by=relevancy&country=${countryQuery}&not_sources=teamtalk.com%2C%20ajc.com%2C%20reddit.com%2C%20tmcnet.com&ranked_only=false&page=1&page_size=5&media=True`

        if (query && countryQuery) {

            console.log("making results readable")

            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                headers: {
                    "x-rapidapi-key": "d3c86e5140mshf9ee7714ea78605p16d425jsnf445de32948d",
                    "x-rapidapi-host": "newscatcher.p.rapidapi.com"
                },


                beforeSend: function () {
                    $("#loader").show();
                },

                complete: function () {
                    $("#loader").hide();
                },

                success: function (news) {
                    let output = "";
                    let newsResult = news.articles;

                    for (var i in newsResult){
                        output += `
                        <h3 class="news-heading-title">${newsResult[i].title}</h3>
                        <img class="news-media-image border border-dark rounded" src="${newsResult[i].media}">
                        <br></br>
                        <p class="newscontent">${newsResult[i].summary}</p>
                        <p>Published on: ${newsResult[i].published_date}</p>
                        <a href="${newsResult[i].link}" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" target="_blank">Read more</a>
                        <br></br>
                        <hr class="block-divider block-divider--long">
                        `;
                    }
                

                if(output !== ""){

                    $("#newsStory").html(output);
                }else{
                    let NewsNotFound = "This news is not available. Please try searching a different topic";
                    $("#newsStory").html(NewsNotFound);
                }
            },
                    

        error: function() {
            console.log("Error");
        }

    });

} else {
    console.log("please enter something");
    }
    }); 
});



