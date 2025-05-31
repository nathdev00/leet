const flowerbed = [1, 0, 0, 0, 1];
const n = 2;

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let adjacentSlots: number = 0;
  function result(flowerbed: number[], n: number): boolean {
    adjacentSlots = checkFreeSlots(flowerbed);

    if (adjacentSlots >= n) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }

  function checkFreeSlots(flowerbed: number[]): number {
    for (let i = 0; i < flowerbed.length; i++) {
      if (
        flowerbed[i] === 0 && //if positon is
        (i === 0 || flowerbed[i - 1] === 0) && //is the start OR the flowerbed to the left is empty AND
        (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // i
      ) {
        console.log(adjacentSlots);
        flowerbed[i] = 1;
        adjacentSlots++;
      }
    }

    return adjacentSlots;
  }

  return result(flowerbed, n);
}

canPlaceFlowers(flowerbed, n);
