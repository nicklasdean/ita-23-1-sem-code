function getTotalPrice(cart) {
    let total_price = 0;

    for(let item in cart) {
        const itemHasPriceAndQuantity = item.price && item.quantity;
        if(itemHasPriceAndQuantity) {
            total_price = total_price + item.price * item.quantity;
        }
    }

    return total_price;
}

const cart = [
    {name: 'apple', price: 1, quantity: 3},
    {name: 'banana', price: 2, quantity: 2},
    {name: 'cherry', price: 3, quantity: 1}
];

console.log(getTotalPrice(cart))

