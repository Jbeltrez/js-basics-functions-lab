// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    let hQ = 42;
    if (value < 42) {
        return hQ - value 
    } else if (value > 42) {
        return value - hQ; 
    } 
}

function distanceFromHqInFeet(someValue) {
    return (distanceFromHqInBlocks(someValue) * 264);

}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    return (Math.abs(startingBlock - endingBlock) * 264);

}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
