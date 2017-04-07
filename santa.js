function santa(people) {
  var returnObj = {};
  var shuffled = shuffle(people);

  for(var i=0; i<shuffled.length; i++) {
    if(i === shuffled.length-1){
      returnObj[shuffled[i]] = shuffled[0];
    } else {
      returnObj[shuffled[i]] = shuffled[i+1];
    }
  }

  return returnObj;
}

function shuffle(list) {
  return list;
}

var people = ['John', 'George', 'Paul', 'Ringo'];

console.log(santa(people));