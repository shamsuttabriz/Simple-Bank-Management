document.getElementById('btn-deposit').addEventListener('click', function () {
    // Every deposit section 
    const depositField = document.getElementById('user-deposit');
    const currentDeposit = parseInt(depositField.value);

    // Total Deposit Balance
    const totalDepositBalance = document.getElementById('total-deposit-amount');
    const prevDeposit = parseInt(totalDepositBalance.innerText);
    totalDepositBalance.innerText = (prevDeposit + currentDeposit);

    // Total Balance
    const totalBalanceBalance = document.getElementById('main-balance');
    const prevTotalBalance = parseFloat(totalBalanceBalance.innerText);
    totalBalanceBalance.innerText = (prevTotalBalance + currentDeposit);
});