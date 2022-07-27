/////////////////////// AUPHAN TEST ///////////////////////////

// =========================P3================================
//1. Provide an array of numbers, determine the largest, second largest, third largest number.
// Example: with array [3, 4, 8, 10, 12] , the output would be [12, 10, 8]

arr = [1,10,7,9,8,5,3,2,9] //input
function find3Biggestnumbers (array) {
   var arr3=[];
   //for loop to get the 3 largest values
   for(var i=0;i<3;++i) {
      //use reduce() to get the key of the largest number
      var max_index = array.reduce(function(max, crNum, index, arr){
         //if max > current number: return max else return key of max
         return  arr[max] > crNum ? max : index
      },0);
      //add largest number to arr3[]
      arr3.push(array[max_index]);
      //remove the largest number
      array.splice(max_index,1);
   }     
   //return arr3[] 
   return arr3;
}
//print to console screen
console.log(find3Biggestnumbers(arr))

//2. Find a pair of numbers given in an array input whose sum is equal to a given number input
// Example: with input array [1, 3, 5, 6, 8, 11] and given sum input is 19. The output should be (8, 11)

arr2 = [1,6,7,9,8,5,3,2,9]    //input                                 
function findPairsNumber(array, sum) {  
   //the first loop takes the values ​​of input                 
   for (e1 in array) {
      //the second loop takes the values ​​of input   
      for (e2 in array) {
         if(array[e1] + array[e2] == sum && e1 != e2) {  
            //return Array include 2 nummber satisfy the condition
            return [array[e1],  array[e2]]
         }
      }
   }
   //returns null if there are no matching pairs
   return null
}
//print to console screen
console.log(findPairsNumber(arr2, 5))

//3. Write the most optimum program that will output numbers from 1-50 (separated by 1 space) with these conditions:
// Every even number should be bracketed, eg (2) (4)
// Every multiple of 3 should have a “$” after it, eg 3$
// Numbers that satisfy both conditions will have both, eg (6$)

function printNumber(a, b) {
   array=[];
   //c = array length
   c=b-a; 
   //the loop to assign the values ​​to array if satisfy the condition   
   for(var i=0; i<=c; i++){
      if(!(a%2)&&!(a%3)) array.push(`(${a}$)`)
      else if(!(a%3)) array.push(`${a}$`)
      else if(!(a%2)) array.push(`(${a})`)
      else array.push(`${a}`)
      ++a;
   }
   //concatenate array elements into a string separated by commas use .join('') method
   return (array.join(' '));
}
//print to console screen
console.log(printNumber(1, 50));
