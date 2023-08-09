// ----------------------------------
// Problem 1 start 
// ------------------------------------
function cubeNumber(number) {
    if (typeof number === 'number' && number > 0){
        return Math.pow (number,3);

    }
    else{
        return 'Please provide only positive number';
    }
}
// console.log (cubeNumber(3));
// console.log (cubeNumber(4));
// console.log(cubeNumber('output'));
// console.log(cubeNumber(-3));

// ------------------------------
// Problem - 2
// ---------------------------------
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please give only string';
    }

    if (string1.includes (string2)){
        return true;
    }
    else {
        return false;
    }
    


}

// console.log(matchFinder('John Doe', 'ohn'));
// console.log(matchFinder('javaScript', 'Code'));
// console.log(matchFinder('Peter Parker', 'Pen'));
// console.log(matchFinder('Peter Parker', 'pet'));
// console.log(matchFinder('Peter Parker', 125));
// Problem - 2 end





// ----------------------------------
// Problem 3 start 
// ------------------------------------
function sortMaker(arr){
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
  
//   console.log(sortMaker([2, 3])); 
//   console.log(sortMaker([4, 2])); 
//   console.log(sortMaker([4, 4]));
//   console.log(sortMaker([1, 2])); 
//   console.log(sortMaker([4, -2])); 


// / ----------------------------------
// Problem 4 start ************** without bonus part *****************
// ------------------------------------

function findAddress(arr) {
    const output = arr.street + ',' + arr.house + ',' + arr.society;
    return output;
}
    const inputObj = {street: 10, house: '15A',society: 'Earth Perfect'};
    const output = findAddress(inputObj);
    // console.log(output);
    



// / ----------------------------------
// Problem 5 start 
// ------------------------------------
    function canPay(changeArray, totalDue) {
        if (changeArray.length === 0) {
            console.log("You have no money. You cannot buy chips.");
            return ;
          }
        
        
        var totalMoney = 0;
        for (var i = 0; i < changeArray.length; i++){
            totalMoney += changeArray[i];
        }
        const canBuyCheps = totalDue <= totalMoney;
        console.log (totalDue, canBuyCheps);
    }
        canPay ([], 10);
        canPay ([1,2,5], 10);
        canPay ([1,5,5], 10);
