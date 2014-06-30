var a = 100;
var b = 100;
var num = 0;
var product;

for(var i=0; i<=999;i++){
  product = a * b;
  var product2 = product.toString();
  var reverse = product2.split("").reverse().join("");
  if(product2 == reverse){
  console.log(a +"and " + b + " = " + product2);
}
  a += 1;
  b +=1;
}