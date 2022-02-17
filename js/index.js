function getInputField(input) {
    const inputField = document.getElementById(input);
    const inputFieldText = inputField.value;
    const inputBalance = parseFloat(inputFieldText);
    return inputBalance;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeAmount = getInputField('income-input');
    const foodAmount = getInputField('food-input');
    const rentAmount = getInputField('rent-input');
    const clothesAmount = getInputField('clothes-input');

    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    document.getElementById('total-expns').innerText = totalExpenses;

    const balance = incomeAmount - totalExpenses;
    document.getElementById('balance').innerText = balance;

});

document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const saveInputValue = parseFloat(saveInput.value);

    const balance = document.getElementById('balance').innerText;
    const savingBalance = (balance * saveInputValue) / 100;
    document.getElementById('saving-amount').innerText = savingBalance;

    const remainingBalance = balance - savingBalance;
    document.getElementById('remaining-bal').innerText = remainingBalance;
});