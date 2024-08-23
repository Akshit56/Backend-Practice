// must know basics: forEach, Map, filter, find, indexOf

var arr = [1,2,3,4];
//1.forEach(traverses on all the element of the array)
arr.forEach(function(val){
  console.log(val+" Hello");
})

//2. map(creates a new blank array with same number of elements and lets you change the new array accordingly)
var newarray = arr.map(function(val){
  return val+12;
})
console.log(newarray);

//3. Filter(as the name suggests)
var newans = arr.filter(function(val){
  if(val>=3){
    return true;
  }
  else{
    return false;
  }
})

console.log(newans);
//4. find(left to right search karega array ko and if 2 same values there, then left vali return karega)
var ans2 = arr.find(function(val){
  if(val === 2){
    return val;
  }

})
console.log(ans2);


console.log(arr.indexOf(4));