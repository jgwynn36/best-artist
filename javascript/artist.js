$(document).ready(function () {

    //Array of Artist
    var artists = ['Whitney Houston', 'Michael Jackson', 'Prince', 'Beyonce', 'Jay Z'];

    //Display buttons
    function renderButtons() {
        for (var i = 0; i < artists.length; i++) {
            var buttons = $("<button>");
            buttons.addClass("artist-btn");
            buttons.attr("data-name", artists[i]);
            buttons.text(artists[i]);
            $("#buttons-view").append(buttons);
        }
    }

    function displayArtistInfo() {
        var artist = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artist + "&api_key=UqOHspQHffeUvko8YWXHGNx0rFReqXiu&limit=10";
        console.log("success got data", queryURL);

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                console.log(response);
                $("#gifsView").empty();
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    gifDiv.addClass("gifDiv");

                    var rating = $('<p>').text("Rating: " + results[i].rating);
                    gifDiv.append(rating);

                    var image = $('<img>');
                    image.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
                    image.attr("data-still", results[i].images.fixed_height_small_still.url); // still image
                    image.attr("data-animate", results[i].images.fixed_height_small.url); // animated image
                    image.attr("data-state", "still"); // set the image state
                    image.addClass("image");
                    gifDiv.append(image);
                    // pulling still image of gif
                    // adding div of gifs to gifsView div
                    $("#gifsView").prepend(gifDiv);

                }
            });
    }

    //Add New artist to array
    $("#addGif").on("click", function (event) {
        event.preventDefault();
        var artist = $("#artist-input").val().trim();
        artists.push(artist);
        renderButtons();
    });

    $(document).on("click", ".artist-btn", displayArtistInfo);

    renderButtons();
})