// Code your solution in this file!
// helpers.js

// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
  }
  
  // Function to calculate distance from headquarters in feet (1 block = 264 feet)
  function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
  }
  
  // Function to calculate distance travelled in feet between two locations
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  // Function to calculate fare price based on distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  // Export functions to be used in other files
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  