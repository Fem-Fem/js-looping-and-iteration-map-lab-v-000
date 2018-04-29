// Code your solution in this file.
function lowerCaseDrivers(drivers) {

  x = drivers.map(function (driver) { return driver.toLowerCase();});
  return x
}

function nameToAttributes(drivers) {

  x = drivers.map(function (driver) {
    split = driver.split(" ");
    return split;
    const newObj = {};
    newObj["firstName"] = split[0];
    newObj["lastName"] = split[1];
    // return split[0];
    return newObj;
  });
  return x
}
