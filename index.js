function theBeatlesPlay(players, instru) {
  var arr = [];
  for ( i = 0; i > players.lenght ; i++ ) {
    console.log(i)
    arr.push(players[i] + " plays " + instru[i]);
  }
  return arr;
}
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];



console.log(theBeatlesPlay(musicians, instruments))