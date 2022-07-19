const returnFirstTwoDrivers = function (names) {
    return [names[0], names[1]];

}
const returnLastTwoDrivers = function (names){
    return [names[names.length-2], names[names.length-1]];
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function multiply(fare){
        return int*fare;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,returnDriver){
    return returnDriver(drivers);
}