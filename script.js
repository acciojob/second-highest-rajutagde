function secondHighest(arr) {
  if (arr.length < 2 || new Set(arr).size === 1) {
    return -Infinity;
  }
  arr.sort(function(a, b) {
    return b - a;
  });
  return arr[1];
}
