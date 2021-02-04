let credits = 23580;
const pricePerDroid = 3000;

const droidInputRef = document.querySelector('.droid-input');
const buttonRef = document.querySelector('.droid-order');

buttonRef.addEventListener('click', () => {
    const droitQty = Number(droidInputRef.value);
    const totalPrice = droitQty * pricePerDroid;

    if (totalPrice > credits) {
        alert('Недостаточно средств на счету!');
    } else {
        credits -= totalPrice;
        alert(`Вы купили ${droitQty} дроидов, на счету осталось ${credits} кредитов.`)
    }
});