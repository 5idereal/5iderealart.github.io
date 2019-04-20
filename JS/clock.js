/*function red() {
    document.body.style.backgroundColor = "red";
}
function orangered() {
    document.body.style.backgroundColor = "orangered";
}
function yellow() {
    document.body.style.backgroundColor = "yellow";
}
function green() {
    document.body.style.backgroundColor = "green";
}
function blue() {
    document.body.style.backgroundColor = "blue";
}
function blueviolet() {
    document.body.style.backgroundColor = "blueviolet";
}
function violet() {
    document.body.style.backgroundColor = "violet";
}*/
function white() {
    document.body.style.backgroundColor = "white";
}
/*function grey() {
    document.body.style.backgroundColor = "grey";
}
function black() {
    document.body.style.backgroundColor = "black";
*/
$("#red").click(function () {
    $('body').removeClass();
    $('body').addClass('red');
});

$("#orange").click(function () {
    $('body').removeClass();
    $('body').addClass('class2');
});

$("#yellow").click(function () {
    $('body').removeClass();
    $('body').addClass('class3');
});

$("#green").click(function () {
    $('body').removeClass();
    $('body').addClass('class3');
});
$("#blue").click(function () {
    $('body').removeClass();
    $('body').addClass('class3');
});
$("#purple").click(function () {
    $('body').removeClass();
    $('body').addClass('class3');
});
$("#pink").click(function () {
    $('body').removeClass();
    $('body').addClass('class3');
});
$("#grey").click(function () {
    $('body').removeClass();
    $('body').addClass('class3');
});
$("#black").click(function () {
    $('body').removeClass();
    $('body').addClass('class3');
});
function rubik() {
    document.getElementById('date_time').className = ' clock Rubik';
}

function indie_flower() {
    document.getElementById('date_time').className = ' clock Indie_flower';
}
var goFS = document.getElementById("goFS");
goFS.addEventListener("click", function () {
    document.documentElement.requestFullscreen();
}, false);

$(document).ready(function () {
    adaptColor('.cover-info');
});

$(".roundbutton").delay(1000).fadeTo(3000, 0);
$(".roundbutton").on({
    mouseleave: function () {
        $(this).delay(1000).fadeTo(3000, 0);
    },
    mouseenter: function () {
        $(this).stop().fadeTo(10, 1);
    }
});

function adaptColor(selector) {
    var rgb = $(selector).css("background-color");

    if (rgb.match(/^rgb/)) {
        var a = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
            r = a[1],
            g = a[2],
            b = a[3];
    }
    var hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );
    if (hsp > 127.5) {
        $(selector).addClass('text-black');
    } else {
        $(selector).addClass('text-white');
    }
};