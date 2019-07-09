


$(".btn-search").on("click", function () {
    var searchTerm = $('#exampleFormControlInput1').val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=YTSDGMTlFa0R2Zy2g21ZJdYhicTreY7B";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.response.docs);
    });

    // $("#exampleFormControlInput1").val();



});
