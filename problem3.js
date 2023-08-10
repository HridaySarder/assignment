function sortMaker(arr) {
  const first = arr[0];
  const second = arr[1];

  if (first < 0 || second < 0) {
      return 'Invalid Input';
  } else if (first === second) {
      return 'equal';
  } else {
      if (first > second) {
          return [first, second];
      } else {
          return [second, first];
      }
  }
}
console.log(sortMaker([4,-2]));