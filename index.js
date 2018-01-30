function theBeatlesPlay(players, instru) {
  var arr = [];
  var i = 0;
  for ( ; i < players.length ; i++ ) {
    arr.push(players[i] + " plays " + instru[i]);
  }
  return arr;
}