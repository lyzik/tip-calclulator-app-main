function inputCalc(){
    setTimeout(() => {
        calculate(document.querySelector('.customVal').value * 0.01); }, 0)
}

function calculate(tip){
    let bill = document.querySelector('.bill').value;
    let peopleAmount = document.querySelector('.peopleNum').value;
    let _tip = (bill * tip);

    if(bill > 0 && peopleAmount > 0){
        document.querySelector('.tip-text').innerText = `$${(_tip/peopleAmount).toFixed(2)}`;
        document.querySelector('.total-text').innerText = `$${((parseFloat(bill) + parseFloat(_tip))/peopleAmount).toFixed(2)}`;
        document.querySelector('.warning').style.color = 'transparent';
        document.querySelector('.peopleNum').style.border = 'none';
        document.querySelector('.resetBut').style.backgroundColor = 'hsl(184, 14%, 56%)';
    }else if(peopleAmount <= 0){
        document.querySelector('.warning').style.color = 'red';
        document.querySelector('.peopleNum').style.border = 'solid 2px red';
    }
}

function reset(){
    document.querySelector('.tip-text').innerText = "$0.00";
    document.querySelector('.total-text').innerText = "$0.00";
    document.querySelector('.resetBut').style.backgroundColor = 'hsla(186, 14%, 43%, 50%)'
}

function hover(){
    document.querySelector('.resetBut').style.backgroundColor = 'hsl(189, 41%, 97%)';
}
