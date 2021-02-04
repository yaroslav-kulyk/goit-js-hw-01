let total = 100;
const ordered = 50;
const orderSuccess = 'Заказ оформлен, с вами свяжется менеджер';
const orderFail = 'На складе недостаточно товаров!';

const orderStatus = ordered <= total ? orderSuccess : orderFail;

console.log(orderStatus);