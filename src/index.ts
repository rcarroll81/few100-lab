import './styles.css';

const num = document.getElementById('num') as HTMLInputElement;
const billAmount = document.getElementById('bill-amount') as HTMLSpanElement;
const tenPercent = document.getElementById('ten') as HTMLButtonElement;
const fifteenPercent = document.getElementById('fifteen') as HTMLButtonElement;
const twentyPercent = document.getElementById('twenty') as HTMLButtonElement;
const tipPercent = document.getElementById('tip-percent') as HTMLSpanElement;
const tipAmount = document.getElementById('tip-amount') as HTMLSpanElement;
const totalBill = document.getElementById('bill-total') as HTMLSpanElement;
const tipButtons = document.querySelectorAll('#amount-buttons button');
tipButtons.forEach((el)=> el.addEventListener('click', setUp));

num.addEventListener('keyup', updateUi);

function updateUi() {
    billAmount.innerText = '$' + this.value; // Format this.
    const amountOfTip = (currentAmountForTip / 100) * +this.value;
    tipAmount.innerHTML = '$' + amountOfTip.toString();
    const amountOfBill = amountOfTip + (+this.value);
    totalBill.innerHTML = '$' + amountOfBill.toString();
}

let currentAmountForTip = 20;
 function setUp(){
    tipPercent.innerText = this.dataset.amount + '%';
    currentAmountForTip = +this.dataset.amount;    
    tipButtons.forEach(button => {
        const clickedButton = button as HTMLButtonElement;
        if(this == button) {
            clickedButton.disabled = true;
        } else {
            clickedButton.disabled = false;
        }

       updateUi.call(num);
    })
};

/*
When the amount changes
take the currentAmountToTip
    convert it to a percentage
multiply it by the amount
show that as the tip amount
add that tip amount to the amount for the total bill


*/

