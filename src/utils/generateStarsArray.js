export default function generateStarsArray(starAverage) {
  const fullStars = Math.floor(starAverage);
  const starArr = [];

  
  for (let i = 1; i <= fullStars; i++) {
    starArr.push(1);
  }
  if (starAverage < 5) {
    const partialStar = starAverage - fullStars;
    starArr.push(partialStar);

    const emptyStars = 5 - starArr.length;
    for (let i = 1; i <= emptyStars; i++) {
      starArr.push(0);
    }
  }
  return starArr
}
