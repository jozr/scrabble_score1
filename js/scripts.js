var scrabble = function(word) {
    var splitWord = word.toUpperCase().split('');
    var score = 0;

    var scrabblePoints = ["A", 1, "E", 1, "I", 1, "O", 1, "U", 1,
    "L", 1, "N", 1, "R", 1, "S", 1, "T",1,
    "D", 2, "G", 2, "B", 3, "C", 3, "M", 3, "P", 3,
    "F", 4, "H", 4, "V", 4, "W", 4, "Y", 4,
    "K", 5, "J", 8, "X", 8, "Q", 10, "Z", 10];


    for (var i = 0; i < splitWord.length; i++) {
        for(var j = 0; j < scrabblePoints.length; j++) {
            if (splitWord[i] === scrabblePoints[j]){
                score += scrabblePoints[j+1];
             }
        }
        console.log(score);
    }
    return score;
};

$(document).ready(function() {
    $("form#scrabble-machine").submit(function(event) {
        event.preventDefault();
        var input = $("input#word").val();

        var result = scrabble(input);
        var point = "point"

        if (result > 1) {
            point = " points";
        }

        $("#result").show();
        $('.real-score').text(result);
        $('.point').text(point);


    })
})



    /*var onePoint = {};//{"A":1, "E":1, "I":1, "O":1, "U":1, "L":1, "N":1, "R":1, "S":1, "T":1};
    var twoPoint = {};//"D":2, "G":2};
    var threePoint = {};//"B":3, "C":3, "M":3, "P":3};
    var fourPoint = {};//"F":4, "H":4, "V":4, "W":4, "Y":4};
    var fivePoint = {};//"K":5};
    var eightPoint = {};//"J":8, "X":8};
    var tenPoint = {};//"Q":10, "Z":10};*/

    /*var combinedPoint = {"onePoint": {"A":1, "E":1, "I":1, "O":1, "U":1, "L":1, "N":1, "R":1, "S":1, "T":1},
                        "twoPoint": {"D":2, "G":2},
                        "threePoint": {"B":3, "C":3, "M":3, "P":3},
                        "fourPoint": {"F":4, "H":4, "V":4, "W":4, "Y":4},
                        "fivePoint": {"K":5},
                        "eightPoint": {"J":8, "X":8},
                        "tenPoint": {"Q":10, "Z":10}
                    }*/


    /*for (var key  combinedPoint.length; key++) {
        console.log(key);
        var obj = combinedPoint[key];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)){
                console.log(prop + " = " + obj[prop]);
            }
        }
    }*/

