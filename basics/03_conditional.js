        
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

charges += unit * 4;
console.log(`Total electricity bill amount = ${charges}`);
