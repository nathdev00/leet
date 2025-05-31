const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

const maxCandies = Math.max(...candies);
let greatestCandies: boolean[] = [];

for (let i = 0; i < candies.length; i++) {
  candies[i] + extraCandies >= maxCandies
    ? greatestCandies.push(true)
    : greatestCandies.push(false);
}

console.log(greatestCandies);
