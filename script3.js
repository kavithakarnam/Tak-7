//conditional statements

//if else


let number =10;

if(number>5){

console.log("number is positive");

}

else if (number<5){

console.log("number is negative");
}
else{
    console.log("number is zero");
}


//loops// 

//for loop
let i;
for(i=0; i<5; i++){
    console.log(i);
    
}

let num;
for(num=10; num>0; num--){
console.log(num);
}

//while loop

let count=0;
while(count<5){
    console.log( "Kavitha");
    count++;
}

// string
name="kavitha  karnam";
console.log(name.length);


//Array

//Index number=0

let animal=["Dog", "Cat", "Monkey", "Rabbit","pig"];

console.log(animal);
console.log(animal.length);
console.log(animal[4]);
console.log(animal.sort());

//push, pop, del,  replace method
let flower=["rose", "lilly", "lotus", "marigold"];

animal .push("sun flower");
console.log(flower);

animal.pop("");
console.log(flower);

delete flower[1];
console.log(flower);

flower[2]="tulip";
console.log(flower);