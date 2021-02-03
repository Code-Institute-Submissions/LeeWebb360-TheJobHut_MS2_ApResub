$(document).ready(function () {

    $("#search").on("click", function (e) {
        e.preventDefault();

        let query = $("#searchquery").val();
        let url = "https://newscatcher.p.rapidapi.com/v1/search?q=" + query + "&lang=en&sort_by=relevancy&page=1&media=True";

        if (query !== "") {

            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                headers: {
                    "x-rapidapi-key": "d3c86e5140mshf9ee7714ea78605p16d425jsnf445de32948d",
                    "x-rapidapi-host": "newscatcher.p.rapidapi.com"
                },
                

                beforeSend: function(){
                    $("#loader").show();
                },

                complete: function(){
                    $("#loader").hide();
                },

                success: function(data){
                    console.log(data);
                },

                error: function(){
                    console.log("Error");
                }

            });


        } else {
            console.log("please enter something")
        }



    });


})
