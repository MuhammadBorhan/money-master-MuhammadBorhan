
// custom input field using function 
function getInputField(input) {
    const inputField = document.getElementById(input);
    const inputFieldText = inputField.value;
    const inputBalance = parseFloat(inputFieldText);
    return inputBalance;
}

function getButton(commonButton) {
    document.getElementById(commonButton).addEventListener('click', function () {

        // Calculate income and Expenses amount
        const incomeAmount = getInputField('income-input');
        const foodAmount = getInputField('food-input');
        const rentAmount = getInputField('rent-input');
        const clothesAmount = getInputField('clothes-input');

        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        document.getElementById('total-expns').innerText = totalExpenses;

        const balance = incomeAmount - totalExpenses;
        document.getElementById('balance').innerText = balance;

        // Calculate Saving amount and Remaining balance
        const saveInputValue = getInputField('save-input');
        const balance2 = document.getElementById('balance').innerText;

        if (isNaN(saveInputValue)) {

        } else {
            const savingBalance = (balance2 * saveInputValue) / 100;
            document.getElementById('saving-amount').innerText = savingBalance;
            const remainingBalance = balance2 - savingBalance;
            document.getElementById('remaining-bal').innerText = remainingBalance;
        }
    });
}
getButton('calculate-button');
getButton('save-button');
