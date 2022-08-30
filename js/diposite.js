document.getElementById('diposite-btn').addEventListener('click',function(){
const newDipositeValue = getInputValueById('diposite-field');
const previousDipositeTotal = getTextValueById('diposite-total');
const newDipositeTotal = previousDipositeTotal + newDipositeValue;
setValueById('diposite-total',newDipositeTotal);

const previousBalanceTotal = getTextValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDipositeValue;
setValueById('balance-total',newBalanceTotal);
})