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
  for(var i=0; i<list.length; i++){
    //generate random number such that i <= j < n
    var j = getRandomInt(i, list.length);
    //exchange list[i] and list[j]
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }

  return list;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}

var people = ['John', 'George', 'Paul', 'Ringo'];

console.log(santa(people));
