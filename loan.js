function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    if (amount === '' || interest === '' || years === '') {
        alert('Please fill in all fields');
        return;
    }

    const principal = parseFloat(amount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById('result').innerHTML = `
            <h4>Monthly Payment: $${monthly.toFixed(2)}</h4>
            <h4>Total Payment: $${(monthly * calculatePayments).toFixed(2)}</h4>
            <h4>Total Interest: $${((monthly * calculatePayments) - principal).toFixed(2)}</h4>
        `;
    } else {
        document.getElementById('result').innerHTML = '<h4>Please check your numbers</h4>';
    }
}