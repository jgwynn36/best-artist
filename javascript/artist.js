topics = ['whitney houston', 'michael jackson', 'prince', 'beyonce', 'jay z']



function renderButtons() {
for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("artist-btn");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons-view").append(a);
}
}

$("#add-artrist").on("click", function (event) {
    event.preventDefault();
    var artist = $("#artist").val().trim();
    artist.push(artist);
    renderButtons();
});

$(document).on("click", "#artist", displayArtistInfo);


renderButtons();

