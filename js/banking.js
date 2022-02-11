//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposoit
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newdepositTotal = previousDepositAmount + newdepositAmount;
    depositTotal.innerText = newdepositTotal;

    //utdate balance total

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the input feild
    depositInput.value = '';


 });
//handle withdraw event handler
    document.getElementById('withdraw-button').addEventListener('click', function(){
   const withdrawTnput = document.getElementById('withdraw-input');
   const withdrawAmountText = withdrawTnput.value;
   const newwithdrawAmount = parseFloat(withdrawAmountText);
   //console.log(withdrawAmountText);
  
   // set wihtdraw total 
   const withdrawTotal = document.getElementById('withdraw-total');
   const previouswithdrawText = withdrawTotal.innerText;
   const previouswithdrawTotal = parseFloat(previouswithdrawText);
   const newwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;
   withdrawTotal.innerText = newwithdrawTotal;
//utdate balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    withdrawTnput.value = '';
})

