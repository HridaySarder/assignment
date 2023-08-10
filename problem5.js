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
console.log(canPay([1,2,5],10));
