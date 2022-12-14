
// custom input field using function 
function getInputField(inputField) {
    const inputFieldText = document.getElementById(inputField);
    const inputBalance = parseFloat(inputFieldText.value);
    return inputBalance;
}

function getButton(buttonField) {
    document.getElementById(buttonField).addEventListener('click', function () {

        // Calculate income and Expenses amount
        const incomeAmount = getInputField('income-input');
        const foodAmount = getInputField('food-input');
        const rentAmount = getInputField('rent-input');
        const clothesAmount = getInputField('clothes-input');

        if (0 <= incomeAmount && 0 <= foodAmount && 0 <= rentAmount && 0 <= clothesAmount) {
            const totalExpenses = foodAmount + rentAmount + clothesAmount;
            const netSavingBalance = document.getElementById('saving-amount').innerText;
            const netIncome = incomeAmount - netSavingBalance;
            if (totalExpenses <= incomeAmount && totalExpenses <= netIncome) {
                document.getElementById('total-expns').innerText = totalExpenses;
                const restBalance = incomeAmount - totalExpenses;
                document.getElementById('balance').innerText = restBalance;
            } else {
                alert('opps..! your total Expenses is over than total Income.')
            }
        }
        else {
            alert('please enter number')
        }

        // Calculate Saving amount and Remaining balance
        const savePercentValue = getInputField('save-input');
        const totalIncome = getInputField('income-input');

        if (savePercentValue > 0) {
            const savingBalance = (totalIncome * savePercentValue) / 100;
            const restBalanceTotal = document.getElementById('balance').innerText;
            if (savingBalance <= restBalanceTotal) {
                document.getElementById('saving-amount').innerText = savingBalance;
                document.getElementById('remaining-bal').innerText = restBalanceTotal - savingBalance;
            } else {
                alert('Sorry...!!! you have not enough balance');
            }
        }
    });
}
getButton('calculate-button');
getButton('save-button');
