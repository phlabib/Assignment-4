function canPay(changeArray, totalDue) {
    var totalMoney = 0;
    for (var i = 0; i < changeArray.length; i++){
        totalMoney += changeArray[i];
    }
    const canBuyCheps = totalDue <= totalMoney;
    console.log (totalDue, canBuyCheps);
}
    canPay ([1,2,5], 10);
    canPay ([1,5,5], 10);
