document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawValue = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getTextValueById('withdraw-total');
    const newWithdrawtotal = previousWithdrawTotal + newWithdrawValue;
    setValueById('withdraw-total', newWithdrawtotal);

    const previousBalanceTotal = getTextValueById('balance-total');
    console.log(previousBalanceTotal)
    const newBalanceTotal = previousBalanceTotal - newWithdrawValue;
    setValueById('balance-total' , newBalanceTotal);
})