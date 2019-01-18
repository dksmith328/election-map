var makeCandidate = function(newName, newColor){

  var candidate = {};
  candidate.name = newName;
  candidate.results = {};
  candidate.color = newColor;
  candidate.totalVotes= 0;

  candidate.tallyVotes = function() {

      this.totalVotes = 0;

    for (var i = 0; i < this.results.length; i++)
    {
      this.totalVotes = this.totalVotes + this.results[i];
     };

  };

  return candidate;

};

  var candidate1 = makeCandidate("Megatron", [132, 17, 11]);

 var candidate2 =
makeCandidate("Bumblebee", [245, 141, 136]);

candidate1.results = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2];

candidate2.results = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1];

candidate1.tallyVotes();
candidate2.tallyVotes();

console.log(candidate1.totalVotes);
console.log(candidate2.totalVotes);

var setStateResults = function(state){

    theStates[state].winner = null;

    if (candidate1.results[state] > candidate2.results[state]) {

        theStates[state].winner = candidate1;

    } else if (candidate1.results[state] < candidate2.results[state]) {

        theStates[state].winner = candidate2;

    }

  var stateWinner = theStates[state].winner;

if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color;
} else {
    theStates[state].rgbColor = [11,32,57];
}
var stateTable = document.getElementById("stateResults");
var header = stateTable.children[0].children[0];
var body = stateTable.children[1];
var stateName= header.children[0];
var abbrev = header.children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnerResults = body.children[2].children[1];

var countryTable = document.getElementById("countryResults");
var row = countryTable.children[0].children[0];

row.children[0].innerText = candidate1.name;
row.children[1].innerText= candidate1.totalVotes;
row.children[2].innerText= candidate2.name;
row.children[3].innerText= candidate2.totalVotes;
row.children[5].innerText= winner;

  stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = candidate1.name;
candidate2Name.innerText = candidate2.name;

candidate1Results.innerText = candidate1.results[state];
candidate2Results.innerText = candidate2.results[state];

if (theStates[state].winner === null){
    winnerResults.innerText = "DRAW";
} else {
    winnerResults.innerText = theStates[state].winner.name;
}
}

var winner = "?"

if (candidate1.totalVotes >
 candidate2.totalVotes) {
    winner = candidtate1.name;
} else if (candidate1.totalVotes < candidate2.totalVotes) {
    winner = candidate2.name;
} else {
    winner = "DRAW";
}

console.log("AND THE WINNER IS..." + winner + "!!!!");
