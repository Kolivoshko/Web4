function v1(){
    for(let index = 1; index <= 100; index++){
        if (index%3 == 0) console.log("FIZZ");
        else if (index%5 == 0)  console.log("BUZZ");
        else console.log(index);
    }
}

function v2(){
    for(let index = 1; index <= 100; index++){
        if (index%3 == 0 && index%5 == 0) console.log("FIZZBUZZ");
        else if (index%3 == 0) console.log("FIZZ");
        else if (index%5 == 0)  console.log("BUZZ");
        else console.log(index);
    }
}

console.log("Version 1");
v1();
console.log("Version 2");
v2();