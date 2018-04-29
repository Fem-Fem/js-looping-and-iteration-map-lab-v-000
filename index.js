// Code your solution in this file.
function lowerCaseDrivers(drivers) {

  x = drivers.map(function (driver) {
    return driver.toLowerCase());
  });
  return x
}

//
//   return Object.assign({}, lc, { equipment: 'Laptop' });
// }
//
// const equippedEngineers = newEngineers.map(function (eng) {
//   return Object.assign({}, eng, { equipment: 'Laptop' });
// });
