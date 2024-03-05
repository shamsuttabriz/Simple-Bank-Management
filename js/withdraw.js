document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Every withdraw section 
    const withdrawField = document.getElementById('user-withdraw');
    const currentWithdraw = parseFloat(withdrawField.value);

    // Total withdraw Balance
    const totalWithdrawBalance = document.getElementById('total-withdraw-amount');
    const prevWithdraw = parseFloat(totalWithdrawBalance.innerText);
    totalWithdrawBalance.innerText = (prevWithdraw + currentWithdraw);

    // Total Balance
    const totalBalanceField = document.getElementById('main-balance');
    const prevTotalBalance = parseFloat(totalBalanceField.innerText);
    if (prevTotalBalance > currentWithdraw) {
        totalBalanceField.innerText = (prevTotalBalance - currentWithdraw);
    }
    else {
        alert("insufficient Balance");
    }
});