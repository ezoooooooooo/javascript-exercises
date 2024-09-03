const leapYears = function(x) {
 if(x%4==0 && x%100!=0 )
 {
  console.log(x+" is a leap year")
  return true;
 }
 else if (x%4==0 && x%100==0 && x%400==0){
  console.log(x+" is a leap year")
  return true;
 }
 else{
  console.log(x+ " is not a leap year")
  return false;
 }
};

// Do not edit below this line
module.exports = leapYears;
