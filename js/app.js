/*Funcion declarada: Fibonacci*/
 function fibonacci () {
   var num1 = 0;
   var num2 = 1;
   var result =[];
   var arr;
    for (i=0; i<10; i++){
        arr= num1 + num2;
        num1 = num2;
        num2 = arr;
        result.push(arr);
    };
     return result;
};

console.log(fibonacci());



/*Palindromos*/
function palyndrom(str) {
    var middle = Math.floor(str.length/2);
    var part1 = str.slice(0,middle);
    var part2 = str.slice(middle+1,str.length);
    var part2rev = part2.split("").reverse().join("");
    console.log(part2rev);
    console.log(part2);
    console.log(part1);
    if (part1 === part2rev){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    };
}
palyndrom("palabra");
