// Code your solution in this file.
function lowerCaseDrivers(drivers) {

  x = drivers.map(function (driver) { return driver.toLowerCase();});
  return x
}

function nameToAttributes(drivers) {

  x = drivers.map(function (driver) {
    split = driver.split(" ");
    // return split;
    const newObj = {};
    newObj.firstName = split[0];
    newObj.lastName = split[1];
    return newObj;
  });
  return x
}

function attributesToPhrase(drivers) {

  x = drivers.map(function (driver) {

    name = ;
    newObj.lastName = split[1];
    y =
    return "is from ";
  });
  return x
}
