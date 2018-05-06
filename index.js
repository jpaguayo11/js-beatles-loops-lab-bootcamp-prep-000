function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  for (var i = 0; i <= 3; i++ ) {
  emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts (facts) {
  var emptyArray = []
  var i = 0
  while (i < facts.length ) {
    emptyArray.push(`${facts[i]}!!!`)
    i++
  }
  return emptyArray
}
