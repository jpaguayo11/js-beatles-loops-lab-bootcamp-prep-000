function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  for (var i = 0; i <= 4; i++ ) {
  emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}
