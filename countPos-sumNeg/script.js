// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
function countNegsSumPosis(input){
    if (input === null || input.length === 0) return [];
  let  nvArr =[] ;
   let pos=0
   let neg=0
    for (let i =0 ;i<input.length;i++){
        if (input[i]<= 0){
      neg+=input[i]
        } else {
    pos++
    }
    }

 nvArr.push(pos);
 nvArr.push(neg);

 return nvArr
 //or just we can write return [pos , neg]
}
console.log(countNegsSumPosis([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
