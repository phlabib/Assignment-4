function sortMaker(arr){
  // if (!Array.isArray (arr) || arr.length !== 2){
  //   return 'Invalid Input';
  // }
  const [first, second]= arr;

  if (typeof second !== 'number' || second <= 0){
    return 'Invalid Input';
  }

  if (first > second) {
    return [first, second];
  }
  else if (first < second) {
    return[second, first];
  }
  else {
    return 'equal'
  }
}

console.log(sortMaker([2, 3])); 
console.log(sortMaker([4, 2])); 
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2])); 
console.log(sortMaker([4, -2])); 