function accum(s) {
	var answer = s.split("").map(function(char, i) {
    return char.toUpperCase() + otherCharacters(i, char)
  });
  return answer.join("-")
}

function otherCharacters(index, character) {
  var times = index
  addition = ''
  for(var i=0; i < times; i++){
    addition += character
  }
  return addition.toLowerCase()
}
