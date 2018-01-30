function theBeatlesPlay(players, instru) {
  var arr = [];
  var i = 0;
  for ( ; i < players.length ; i++ ) {
    arr.push(players[i] + " plays " + instru[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  for ( ; i < facts.length ; i++) {
    facts[i] += "!!!";
  }
  return facts;
}

function ()