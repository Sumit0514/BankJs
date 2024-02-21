// up to Rs. 3,00,000 is nil
// from Rs. 3,00,000 to Rs. 6,00,000 is 5%
// from Rs. 6,00,000 to Rs. 9,00,000 is 10%
// from Rs. 9,00,000 to Rs. 12,00,000 is 15%
// from Rs. 12,00,000 to Rs. 15,00,000 is 20%
// above Rs. 15,00,000 is 20%
function tax(amount){
    let Tax = 0;
    if(amount<=300000){
        console.log("NO TAX")
    }
    else if(amount>300000 && amount<=600000){
        Tax=amount*0.05;
        console.log("You have to pay 5% Tax = "+Tax)
    }
    else if(amount>600000 && amount<=900000){
        Tax=amount*0.1;
        console.log("You have to pay 10% Tax = "+Tax)
    }
    else if(amount>900000 && amount<=1200000){
        Tax=amount*0.15;
        console.log("You have to pay 15% Tax = "+Tax)
    } 
    else if(amount>1200000 && amount<=1500000){
        Tax=amount*0.2;
        console.log("You have to pay 20% Tax = "+Tax)
    }
    else{
        Tax=amount*0.2;
        console.log("You have to pay 20% Tax = "+Tax)
    }
}
tax(1100000)