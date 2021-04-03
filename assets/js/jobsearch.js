//Credit : Rapid api https://rapidapi.com/marketplace
//Credit : Youtube.com for tutorials in api and jquery functions
$(document).ready(function () {
    $("#rolesearch").on("click", function (e) {
        e.preventDefault();
        const jobquery = $("#jobsquery").val();
        const locationQuery = $("#locationjobs").val();
        console.log("value of search with values", jobquery);
        console.log("value of search with both values", locationQuery);

        if (!jobquery, !locationQuery) {
            alert("PLEASE FILL OUT BOTH FIELDS")
        }

        let url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${jobquery}%20job%20vacancies%20${locationQuery}&pageNumber=1&pageSize=10&autoCorrect=true`

        if (jobquery && locationQuery) {
            console.log("list data results")
            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                dataType: "json",
                headers: {
                    "x-rapidapi-key": "d3c86e5140mshf9ee7714ea78605p16d425jsnf445de32948d",
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
                },
                beforeSend: function () {
                    $("#loader").show();
                },
                complete: function () {
                    $("#loader").hide();
                },
                success: function (advice) {
                    let output = "";
                    let jobsList = advice.value;

                    for (var i in jobsList) {
                        output += `
                        <h4 class="news-heading-title">${jobsList[i].title}</h4>
                        <p class ="joblists-content">${jobsList[i].description}</p>
                        <a href="${jobsList[i].url}" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" target="_blank">Read more</a>
                        <hr class="block-divider block-divider--long">
                        `;
                    }
                    if (output !== "") {
                        $("#jobList").html(output);
                    } else {
                        let NewsNotFound = "There is no jobs in this area. Please try searching a different job title or try a different location!";
                        $("#jobList").html(NewsNotFound);
                    }
                },
                error: function () {
                    console.log("Error");
                }
            });
        } else {
            console.log("job search!");
        }
    });
});