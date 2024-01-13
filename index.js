// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (driversArray) => {
  return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = (driversArray) => {
  return driversArray.slice(-2);
};
// slice splice
function selectingDrivers(driversArray) {
  return [
    returnFirstTwoDrivers(driversArray),
    returnLastTwoDrivers(driversArray),
  ];
}

const createFareMultiplier = (value) => {
  return function () {
    return value * value;
  };
};

const fareDoubler = (fare) => createFareMultiplier(fare)();
const fareTripler = (fare) => createFareMultiplier(fare)() * fare;

const selectDifferentDrivers = (driversArray, fn) => {
  return fn(driversArray);
};
