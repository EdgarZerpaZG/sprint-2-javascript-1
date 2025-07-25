let products = [];
let cart = [];
let total = 0;

const cartLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const loadCartLocalStorage = () => {
    const cartStorage = localStorage.getItem('cart');
    if (cartStorage) {
        cart = JSON.parse(cartStorage);
        applyPromotionsCart();
        calculateTotal();
        printCart();
    }
};

async function obtainData() {
    try {
        const response = await fetch('./json/products.json');
        if (!response.ok) throw new Error("No se encontró el archivo JSON.");
        const data = await response.json();
        products = data.products;
        localStorage.setItem('products', JSON.stringify(products)); // punto 3
        return products;
    } catch (error) {
        console.error("Error cargando los datos:", error);
    }
}

obtainData().then(loadCartLocalStorage);

const buy = (id) => {
        const product = products.find(item => item.id === id);
        const cartProduct = cart.find(item => item.id === id);

        if (cartProduct){
            cartProduct.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }
        applyPromotionsCart();
        calculateTotal();
        printCart();
        cartLocalStorage();
}

const cleanCart = () =>  {
    cart.length = 0;
    calculateTotal();
    printCart();
    cartLocalStorage();
}

const calculateTotal = () =>  {
    total = 0;
    let quantity = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        quantity += item.quantity;
        total += parseFloat(item.totalDiscount || (item.price * item.quantity));
    }
    return { total, quantity };
}

const applyPromotionsCart = () =>  {
    for(let i = 0; i < cart.length; i++){
        const item = cart[i];
        if(item.offer && item.quantity >= item.offer.number){
            const discount = item.offer.percent;
            const discountPrice = item.price * (1 - discount / 100);
            item.totalDiscount = (discountPrice * item.quantity).toFixed(2);
            item.discountPrice = discountPrice.toFixed(2);
        }else{
            item.totalDiscount = (item.price * item.quantity).toFixed(2);
            item.discountPrice = item.price.toFixed(2);
        }
    }
}

const printCart = () => {
    let tableRow = "";
    const cartList = document.getElementById('cart_list');
    for(let i = 0; i < cart.length; i++){
        const item = cart[i];
        const unitPrice = item.discountPrice ? item.discountPrice : item.price;
        const totalPrice = item.totalDiscount ? item.totalDiscount : (item.price * item.quantity).toFixed(2);
        tableRow +=    `<tr class="text-center">
                            <th scope="row">${item.name}</th>
                            <td>${unitPrice} €</td>
                            <td> 
                                <i id="product_decrease" class="fa-solid fa-minus" onclick="removeFromCart(${item.id})"></i> 
                                    ${item.quantity}
                                <i id="product_increase" class="fa-solid fa-plus" onclick="addFromCart(${item.id})"></i>
                            </td>
                            <td>${totalPrice} €</td>
                        </tr>`;
    }
    cartList.innerHTML = tableRow;
    const { total, quantity } = calculateTotal();
    const totalPrice = document.getElementById('total_price');
    const totalCount = document.getElementById('count_product');
    totalCount.innerHTML = quantity;
    totalPrice.innerHTML = total.toFixed(2) + " €";
}

const removeFromCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (item.id === id) {
            item.quantity -= 1;
            if (item.quantity <= 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
    applyPromotionsCart();
    calculateTotal();
    printCart();
    cartLocalStorage();
}

const addFromCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (item.id === id) {
            item.quantity += 1;
            break;
        }
    }
    applyPromotionsCart();
    calculateTotal();
    printCart();
    cartLocalStorage();
}