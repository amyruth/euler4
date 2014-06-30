var a = 100;
var b = 100;
var product;
var values = [];
for(var i=100; i<=999;i++){
  product = a * b;
  var product2 = product.toString();
  var reverse = product2.split("").reverse().join("");
  if(product2 == reverse){
  	values.push(parseInt(product2));
  	
}
  a += 1;
  b +=1;
}
console.log(values);
console.log("The largest palindrome number found is: "+Math.max.apply(Math, values));

/*Just realized I'm not taking all the possibilities into account, just matched pairs of numbers. Oh well, it was something to do.
*//*Have to pull largest palindrome from array
figure out how to display the two multipliers
put console msg in new postion.*/