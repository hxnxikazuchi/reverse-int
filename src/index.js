module.exports = function reverse (n) {
  let reversedNum = 0;
  if(n < 0){
    n = n *(-1); 
    }  
  while(n > 0){     
    reversedNum = reversedNum * 10 + n % 10;
    n = Math.floor(n / 10);

  }
  return reversedNum;
}
