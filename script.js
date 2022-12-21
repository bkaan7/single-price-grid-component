$("body").css({
  margin: "0",
  padding: "0",
  "box-sizing": "border-box",
  "font-family": "'Karla', sans-serif",
  "background-color": "hsl(204, 43%, 93%)",
});

$(".container").css({
  width: "600px",
  height: "500px",
  padding: "50px",
  margin: "0 auto",
});

$(".areaOne").css({
  height: "180px",
  padding: "30px",
  "border-radius": "10px 10px 0 0",
  "background-color": "#fff",
});

$(".header").css({
  color: "hsl(179, 62%, 43%)",
});

$(".altHeader").css({
  color: "hsl(71, 73%, 54%)",
});

$(".text").css({
  color: "hsl(218, 22%, 67%)",
});

$(".areaTwo").css({
  display: "flex",
});

$(".boxOne").css({
  "background-color": "hsl(179, 62%, 43%)",
  width: "300px",
  color: " #fff ",
  padding: "30px",
  "border-radius": "0 0 0 10px",
});

$(".boxTwo").css({
  width: "300px",
  height: "220px",
  "background-color": "hsl(218, 22%, 67%)",
  color: " #fff ",
  padding: "30px",
  "border-radius": "0 0 10px 0",
});

$(".price").css({
  display: "flex",
  "align-items": "center",
});

$(".textColor").css({
  color: "hsl(204, 43%, 93%)",
  "padding-left": "15px",
});

$(".btn").css({
  width: "240px",
  padding: "15px",
  "margin-top": "10px",
  "background-color": "hsl(71, 73%, 54%)",
  border: "none",
  color: "#fff",
  "font-weight": "700",
  "border-radius": "7px",
});

$(".boxTwoText").css({});


// hover effect

$(".btn").hover(function () {
    // over
    $(this).css({
      "cursor":"pointer",
      "opacity" : ".8"
    })
  }, function () {
    // out
    $(this).css({
      "opacity" : "1"
    })
  }
);