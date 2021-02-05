$(document).ready(function () {

        let url = "https://newscatcher.p.rapidapi.com/v1/search?q=online%20courses&lang=en&sort_by=relevancy&page=1&page_size=5&media=True",

});

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

                success: function (advice) {
                    let output = "";
                    let careerList = advice.articles;

                    for (var i in careerList){
                        output += `
                        <h3 class="news-heading-title">${careerList[i].title}</h3>
                        <img class="news-media-image border border-dark rounded" src="${careerList[i].media}">
                        <br></br>
                        <p class="newscontent">${careerList[i].summary}</p>
                        <p>Published on: ${careerList[i].published_date}</p>
                        <a href="${careerList[i].link}" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" target="_blank">Read more</a>
                        <br></br>
                        <hr class="block-divider block-divider--long">
                        `;
                    }
                

                if(output !== ""){

                    $("#careerAdvice").html(output);
                }else{
                    let NewsNotFound = "This news is not available. Please try searching a different topic";
                    $("#careerAdvice").html(NewsNotFound);
                }
                },
                    

        error: function() {
            console.log("Error");
        }
    
    })


