
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
const obj = {
  street: 10,
  // house: '15A',
  society: 'Earth Perfect'
}
console.log(findAddress(obj));
