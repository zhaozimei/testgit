'use strict';

function thousands_separators(num){
   var result;
   var arr2 = [];
   var arr = ('' + num).split('.');
   
   var a = arr[0].length%3;
   var b = Math.floor(arr[0].length/3); 
  if(arr[0].length>3){
   arr2.push(arr[0].slice(0,a)) 
  for(var i=0;i<b;i++){ 
  arr2.push(arr[0].slice(a,a+3))
   a = a+3;
   }
   if(a%3 == 0){
   arr2.splice(0,1)
   }
   }else{
   arr2.push(arr[0])
   }
   var str = arr2.join();
   var add = 0;
   if(arr.length == 2&&arr[1]!=0){
   add = str + '.'+arr[1];
   }else{
   add = str ;
   }
   result = +add;
   return add;
  }

module.exports = thousands_separators;
