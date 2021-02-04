let price;
const countryInputRef = document.querySelector('.country-input');
const buttonRef = document.querySelector('.delivery-calc');

buttonRef.addEventListener('click', () => {
    const country = countryInputRef.value;
    switch (country.toLowerCase()) {
        case 'китай':
            price = 100;
            break;
    
        case 'чили':
            price = 250;
            break;
    
        case 'австралия':
            price = 170;
            break;
    
        case 'индия':
            price = 80;
            break;
    
        case 'ямайка':
            price = 120;
            break;
    
        default:
            price = undefined;
            alert('В вашей стране доставка не доступна');
    };

    if (price !== undefined) {
        const message = `Доставка в ${country.toUpperCase()} будет стоить ${price} кредитов`;
        console.log(message);
    }
});


