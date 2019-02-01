
const returnFirstTwoDrivers = function (drivers) {
 return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
 return drivers.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (multiplyValue) {
 return function (value) {
   return multiplyValue * value;
 };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
 return whichDrivers(drivers);
};
const logDriverNames = function (drivers) {
 drivers.forEach(function (driver) {
   console.log(driver.name);
 });
};

const logDriversByHometown = function (drivers, hometown) {
 drivers.forEach(function (driver) {
   if (driver.hometown === hometown) {
     console.log(driver.name);
   }
 });
};

const driversByRevenue = function (drivers) {
 return drivers.slice().sort(function (driverOne, driverTwo) {
   return driverOne.revenue - driverTwo.revenue;
 });
};

const driversByName = function (drivers) {
 return drivers.slice().sort(function (driverOne, driverTwo) {
   return driverOne.name.localeCompare(driverTwo.name);
 });
};

const totalRevenue = function (drivers) {
 return drivers.reduce(function (total, currentDriver) {
   return currentDriver.revenue + total;
 }, 0);
};

const averageRevenue = function (drivers) {
 return totalRevenue(drivers) / drivers.length;
};
