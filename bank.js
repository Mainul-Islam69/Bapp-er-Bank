document.getElementById('button-dp').addEventListener('click', function(){
    // get the ammonut diposited
    const dpField = document.getElementById('Deposit-inpu');
    const newDepositAmmount = dpField.value;
    

    const deposittotal = document.getElementById('deposit-total');
    const previousDepositAmmount = deposittotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmmount) + parseFloat(newDepositAmmount);
    deposittotal.innerText = newDepositTotal;

    // update account balance
    const balancetotal = document.getElementById('balance-total');
    const previousBalanceAmmount = balancetotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceAmmount) + parseFloat(newDepositAmmount);
    balancetotal.innerText = newBalanceTotal;

    // clear the input field
    dpField.value = '';
  });


// handle withdrow
document.getElementById('withdrow-button').addEventListener('click', function(){
    withdrowField = document.getElementById('withdrow-input');
    const newWidthdrowAmmountText = withdrowField.value;
    const newWidthdrowAmmount = parseFloat(newWidthdrowAmmountText);
    console.log(newWidthdrowAmmountText);


    // set withdrow total
    const withdrowtotal =document.getElementById('withdrow-total');
    const previousWithdrowAmmountText = withdrowtotal.innerText;
    const previousWithdrowAmmount = parseFloat(previousWithdrowAmmountText);
    const newWithdrowTotal = previousWithdrowAmmount + newWidthdrowAmmount;
    withdrowtotal.innerText = newWithdrowTotal;


    //  update balance
    const balancetotal =document.getElementById('balance-total');
    const previousrBalanceTotalTex = balancetotal.innerText;
    const previousrBalanceTotal = parseFloat(previousrBalanceTotalTex);
    const newBalanceTotal = previousrBalanceTotal - newWidthdrowAmmount;

    balancetotal.innerText = newBalanceTotal;

    // clear withdrow input
    withdrowField.value = '';

})
