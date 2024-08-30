const reverseString = function(word) {
   let x =word.length;
   let reversed = '';
   for(let i = x-1;i>= 0;i--){
    reversed +=word.charAt(i);
   } 
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
