Total_Balance=500000;
let mode={
    ATM:150000,
    UPI:100000,
    Online:50000,
    TapToPay:15000,
}
function withdrawl(amount,a){
    if(amount<=a){
        Total_Balance=Total_Balance-amount
        console.log("TRANSACTION SUCCESSFUL")
        console.log("TOTAL BALANCE LEFT IS "+Total_Balance)
    }
    else{
        console.log("TRANSACTION FAILED")
    }
}
withdrawl(10000,mode.TapToPay) //enter the amount fisrt and then the mode of transaction eg.(mode.UPI)


