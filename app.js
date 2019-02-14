$("#btn").click(() => {
  $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", (data, status) => {
    $("#quote").text(data.message);
  });
});