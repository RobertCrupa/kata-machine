export default function bs_list(haystack: number[], needle: number): boolean {
  let min = 0;
  let max = haystack.length;

  while(min < max) {
    let mid = Math.floor( min + (max - min) / 2);
    let num = haystack[mid];

    if( num === needle ) {
      return true;
    } else if (num < needle) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }

  return false;

}
