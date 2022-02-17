
// custom input field using function 
function getInputField(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputBalance = parseFloat(inputField.value);
    return inputBalance;
}

function getButton(commonButton) {
    document.getElementById(commonButton).addEventListener('click', function () {

        // Calculate income and Expenses amount
        const incomeAmount = getInputField('income-input');
        const foodAmount = getInputField('food-input');
        const rentAmount = getInputField('rent-input');
        const clothesAmount = getInputField('clothes-input');

        if (incomeAmount > 0 && foodAmount > 0 && rentAmount > 0 && clothesAmount > 0) {
            const totalExpenses = foodAmount + rentAmount + clothesAmount;
            document.getElementById('total-expns').innerText = totalExpenses;

            const restBalance = incomeAmount - totalExpenses;
            document.getElementById('balance').innerText = restBalance;
        }
        else {
            alert('please enter number')
        }

        // Calculate Saving amount and Remaining balance
        const savingInputValue = getInputField('save-input');
        const restTotalBalance = document.getElementById('balance').innerText;

        if (savingInputValue > 0) {
            const savingBalance = (restTotalBalance * savingInputValue) / 100;
            document.getElementById('saving-amount').innerText = savingBalance;

            const remainingBalance = restTotalBalance - savingBalance;
            document.getElementById('remaining-bal').innerText = remainingBalance;
        }

    });
}
getButton('calculate-button');
getButton('save-button');
