export default function two_crystal_balls(breaks: boolean[]): number {
  const h = breaks.length;
  const jump = Math.floor( Math.sqrt(h) );
  let curr = 0;

  while (curr < h && breaks[curr] === false) {
    curr += jump;
  }

  if( curr > h ) return -1;

  while (breaks[curr] === true) {
    curr -= 1; 
  }

  return curr + 1;
} 
