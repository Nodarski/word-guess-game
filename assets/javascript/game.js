//Buttons on screen
$(document).ready(function() {
   
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    
    for (i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
    }
});

$(".letter-button").on("click", function () {
    var fridgeMagnet = $("<div>");
    fridgeMagnet.addClass("letter fridge-color");
    fridgeMagnet.text($(this).attr("data-letter"));
    $("#display").append(fridgeMagnet);
});

var easy = ["Word","phrase","test"];
var medium = ["woorrdd","medium","teesstt"];
var stringToSplit = "hello world ";
var str = "How are you doing today?";
var res = str.split("");

var main = $("body");
var btns = main.find(".easyMode");

//click/split function
function myFunction(){
    var randomWord = easy[Math.floor(Math.random()*easy.length)];
    var spelling = randomWord.split("");
   

    for(i = 0; i < spelling.length; i++) {
        var letterDsp = $("<div>");
        letterDsp.addClass("hidden-block")
        letterDsp.attr("data-letter", spelling[i]);
        letterDsp.text(spelling[i]);
        $(".missingLetters").append(letterDsp);
    }
};


