$(".dice").on("click", function () {
    window.location.href = "https://rajshah1302.github.io/DiceGame/";
});
$(".simon").on("click", function () {
    window.location.href = "https://rajshah1302.github.io/Simon-game/";
});

$(".simon").on("mouseenter", function () {
    $("h1").text('"Simon"')
}).on("mouseleave", function () {
    $("h1").text('"Ready, Set, Play!"')
});

$(".dice").on("mouseenter", function () {
    $("h1").text('"Dice"')
}).on("mouseleave", function () {
    $("h1").text('"Ready, Set, Play!"')
});

