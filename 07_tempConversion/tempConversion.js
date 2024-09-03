const convertToCelsius = function(x) {
    let C = (x -32)*5/9;
    C = Math.round(C *10)/10;
    return C;
};

const convertToFahrenheit = function(x) {
  let F = (x * 9/5) + 32
  F = Math.round(F*10)/10;
  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
