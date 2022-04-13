let now = new Date();

let colors = [
    "rgba(116,120,122)",
    "rgba(121,168,104)",
    "rgba(116,120,122)",
    "rgba(191,174,99)"
];

let animateIfNeeded = function (element, numVal) {
    if (parseInt($(element).html()) === numVal) {
        return;
    }
    $(element).css("transform", "scale(1,0.01)");
    setTimeout(function () {
        $(element).css("background-color", colors[numVal % 4]);
        $(element).css("transform", "scale(1,1)");
        $(element).html(numVal);
    }, 350);
};

let timeUpdater = function () {
    now = new Date();
    animateIfNeeded("div.hour-tile-0", parseInt(now.getHours() / 10));
    animateIfNeeded("div.hour-tile-1", parseInt(now.getHours() % 10));
    animateIfNeeded("div.min-tile-0", parseInt(now.getMinutes() / 10));
    animateIfNeeded("div.min-tile-1", parseInt(now.getMinutes() % 10));
    animateIfNeeded("div.second-tile-0", parseInt(now.getSeconds() / 10));
    animateIfNeeded("div.second-tile-1", parseInt(now.getSeconds() % 10));
};

setInterval(timeUpdater, 1000);

