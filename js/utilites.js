function getInputValueById(fieldId){
    const inputField = document
    .getElementById(fieldId);
    const fieldValueString = inputField.value;
    const inputValue = parseFloat(fieldValueString);
    inputField.value = '';
    if(isNaN(inputValue)){
        alert('plese enter a number');
        return;
    }
    return inputValue;
}

function getTextValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function setValueById(elementId, newValue){
    if(isNaN(newValue)){
        return;
    }
    const getElements = document.getElementById(elementId);
    getElements.innerText = newValue;
}