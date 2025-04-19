//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep){ 
    let intialVal =0;
for (i=0 ; i<arrayOfSheep.length; i++){ 
    if (arrayOfSheep[i] === true) {
     intialVal++
}
} 
return intialVal;
}
console.log(countSheeps([true ,true, false, true ,true]));

//one other try :
//    let counter = 0 ;
//    arrayOfSheep.map((m)=>{
//     if (m===true) counter++
//    });
//    return counter