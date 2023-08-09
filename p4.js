function findAddress(obj) {
   
    var output = obj.street + ',' + obj.house + ',' + obj.society;
  
    return output;
  }

  var inputObj = { street: 10, house: '15A', society: 'Earth Perfect' };
var output = findAddress(inputObj);
console.log(output); 
