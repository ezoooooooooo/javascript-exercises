const repeatString = function(word,num) {
  let result = '';
  if(num < 0){
   result = "ERROR"
  }
  else{for(let i = 1; i<=num;i++){
     console.log(word);
     result +=word;
   }}
   
    return result;

};

// Do not edit below this line
module.exports = repeatString;
