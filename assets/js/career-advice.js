$(document).ready(function () {

    $("#coursesearch").on("click", function (e) {
        e.preventDefault();

        const querytwo = $("#coursequery").val();
        console.log("value of search", querytwo);
        
        let url = `https://google-search3.p.rapidapi.com/api/v1/search/q=${querytwo}+job+vacancy&num=8`

        if (querytwo !== "") {

            console.log("list courses")

            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                headers: {
                    "x-rapidapi-key": "d3c86e5140mshf9ee7714ea78605p16d425jsnf445de32948d",
                    "x-rapidapi-host": "google-search3.p.rapidapi.com"
                },


                beforeSend: function () {
                    $("#loader").show();
                },

                complete: function () {
                    $("#loader").hide();
                },

                success: function (advice) {
                    let output = "";
                    let careerList = advice.results;

                    for (var i in careerList){
                        output += `
                        <h4 class="news-heading-title">${careerList[i].title}</h4>
                        <a href="${careerList[i].link}" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" target="_blank">Read more</a>
                        <hr class="block-divider block-divider--long">
                        `;
                    }
                

                if(output !== ""){

                    $("#onlineCourses").html(output);
                }else{
                    let CourseNotFound = "This course is not available. Please try searching a different topic";
                    $("#onlineCourses").html(CourseNotFound);
                }
                },
                    

        error: function() {
            console.log("Error");
        }
    
    })

        } else {
            console.log("something has gone wrong!");
        }
    });
});

