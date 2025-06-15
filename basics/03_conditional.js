        
    //Check discount according to the amount
    let amount = Number(prompt('Enter the amount: '));
    // console.log(amount);
    /*        
    if (amount > 0 && amount <= 5000) {
        console.log(`Final amount: ${amount}`); // 0% discount
    } else if (amount > 5000 && amount <= 7000) {
        console.log(`Final amount: ${amount - Math.floor((amount * 5)/100)}`); // 5% discount
    } else if (amount > 7000 && amount <= 9000) {
        console.log(`Final amount: ${amount - Math.floor((amount * 10)/100)}`); // 10% discount
    } else if (amount > 9000) {
        console.log(`Final amount: ${amount - Math.floor((amount * 20)/100)}`); // 20% discount
    } else {
        console.log('wrong input');
    }
    */

    //more efficient way
    let discount = 0;
    if (amount > 0 && amount <= 5000) {
        discount = 0;
    } else if (amount > 5000 && amount <= 7000) {
        discount = 5;
    } else if (amount > 7000 && amount <= 9000) {
        discount = 10;
    } else if (amount > 9000) {
        discount = 20;
    } else {
        console.log('wrong input');
    }
    console.log(`Final amount: ${amount - Math.floor((amount * discount)/100)}`);


// Calculate total amount according to the electricity unit

let unit = Number(prompt('Enter total electricity units'));
let charges = 0; 

if(unit > 400){
    charges = (unit - 400) * 13  //13rs per unit above 400 units
    // console.log(charges); 
    unit = 400;  
}

if(unit > 200 && unit <= 400){
    charges += (unit - 200) * 8 //8rs per unit above 200 units
    unit = 200;
}

if(unit > 100 && unit <= 200){
    charges += (unit - 100) * 6 //6rs per unit above 100 units
    unit = 100;
}

charges += unit * 4; //4rs per unit between 0-100 units
console.log(`Total electricity bill amount = ${charges}`);




//INR

let money = prompt("Enter total money");
console.log(`money: ${money}`);
let notes = 0;

if (500 <= money){
    notes = Math.floor(money / 500);
    money = money % 500;
    console.log(`number of 500rs note ${notes}`);
}

if (money >= 200){
    notes = Math.floor(money / 200);
    money = money % 200;
    console.log(`number of 200rs note ${notes}`);
}

if (money >= 100){
    notes = Math.floor(money / 100);
    money = money % 100;
    console.log(`number of 100rs note ${notes}`);
}

if (money >= 50){
    notes = Math.floor(money / 50);
    money = money % 50;
    console.log(`number of 50rs note ${notes}`);
}

if (money >= 20){
    notes = Math.floor(money / 20);
    money = money % 20;
    console.log(`number of 20rs note ${notes}`);
}

if (money >= 10){
    notes = Math.floor(money / 10);
    money = money % 10;
    console.log(`number of 10rs note ${notes}`);
}

if (money >= 5){
    notes = Math.floor(money / 5);
    money = money % 5;
    console.log(`number of 5rs note ${notes}`);
}

if (money >= 2){
    notes = Math.floor(money / 2);
    money = money % 2;
    console.log(`number of 2rs coin ${notes}`);
}

if (money >= 1){
    notes = Math.floor(money / 1);
    money = money % 1;
    console.log(`number of 1rs coin ${notes}`);
}