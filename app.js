


$(".btn-search").on("click", function () {
    var searchTerm = $('#exampleFormControlInput1').val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=YTSDGMTlFa0R2Zy2g21ZJdYhicTreY7B";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.response.docs);
        var results = response.response.docs;
        // console.log(results);
        for (var i = 0; i < results.length; i++) {
            var articlesDiv = $("<div>");
            // var p = $('<p>' + results[i].headline.main);
            // articlesDiv.append(p);
            articlesDiv.text(results[i].headline.main);
            $(".articles").append(articlesDiv);
            console.log(results[i].headline)
        }
    });
});


// Display the articles (if the value is 5, return .this)
