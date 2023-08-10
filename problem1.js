function cubeNumber(number){
  if(typeof number != 'number'){
    return 'Please provide me a number';
  }
  else{
    const result = number * number * number;
    return result;
  }
}


function matchFinder(string1, string2) {
  if(typeof string1 != 'string' || typeof string2 != 'string'){
    return 'Please provide me valid input';
  }
  else{
    return string1.includes(string2);
  }
}


function sortMaker(arr) {
  const first = arr[0];
  const second = arr[1];

  if (first < 0 || second < 0) {
      return 'Invalid Input';
  } else if (first === second) {
      return 'equal';
  } else {
      if (second > first) {
          return [second, first];
      } else {
          return [first, second];
      }
  }
}


function findAddress(obj) {
  if(typeof obj != 'object'){
    return "Please provide me a valid object";
  }
  else{
    const street = obj.street || '_';
    const house = obj.house || '_';
    const society = obj.society || '_';
    return street + ',' + house + ',' + society;
  }
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
      return "The array is empty";
  }

  let totalAmount = 0;
  for (let i = 0; i < changeArray.length; i++) {
      totalAmount = totalAmount + changeArray[i];
  }
  return totalAmount >= totalDue;
}

