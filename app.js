$.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
  showQuote(data);
});

function showQuote (data) {
    $("#quote").append(data.message);
}

$(".refresh").click(() => {
    $("#quote").load("index.html #quote");
})