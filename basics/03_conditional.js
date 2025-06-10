        
    //Check discount according to the amount
    let amount = Number(prompt('Enter the final amount: '));
    // console.log(amount);        
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