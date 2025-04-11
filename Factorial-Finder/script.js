function factorial(n){
    let result = 1;
for(i=1;i<=n;i++){
 result *=i;
}
return result;
}

console.log(factorial(7))
//Even if it's 0, result is already 1