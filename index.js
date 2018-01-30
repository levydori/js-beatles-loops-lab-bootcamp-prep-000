function theBeatlesPlay(players, instru) {
  var arr = [];
  for ( i = 0; i < players.length ; i++ ) {
    console.log(i)
    arr.push(players[i] + " plays " + instru[i]);
  }
  return arr;
}