// Code your solution in this file!
// index.js

function distanceFromHqInBlocks(street) {
    if (street > 42) {
      return street - 42;
    } else {
      return 42 - street;
    }
  }
  
  function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    if (start < end) {
      return (end - start) * 264;
    } else {
      return (start - end) * 264;
    }
  }
  
  function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);
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
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  }
  