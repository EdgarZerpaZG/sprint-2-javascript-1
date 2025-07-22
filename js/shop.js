// Products
let products = [];

async function obtainData() {
    try {
        const response = await fetch('./json/products.json');
        if (!response.ok) {
            throw new Error("There're not JSON file.");
        }
        const data = await response.json();
        products = data.products;
        console.log("Products received:  ", products);
        return products;
    } catch (error) {
        console.error("Error uploading the data: ", error);
    }
}
obtainData().then(datos => {console.log(datos)});


// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
const buy = (id) => {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

        const product = products.find(item => item.id === id);
        const cartProduct = cart.find(item => item.id === id);

        if (cartProduct){
            cartProduct.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }

        console.log(cart);
        
        applyPromotionsCart();
        calculateTotal();
        printCart();
}


// Exercise 2
const cleanCart = () =>  {
    cart.length = 0;
    console.log("Carrito limpio:", cart);
    calculateTotal();
    printCart();
}

// Exercise 3
const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    let quantity = 0;
    const totalPrice = document.getElementById('total_price');
    const totalCount = document.getElementById('count_product');
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        quantity += item.quantity;
        total += parseFloat(item.totalDiscount || (item.price * quantity));
    }
    console.log("El total en el carrito es de: " + total + " €");
    totalCount.innerHTML = quantity;
    totalPrice.innerHTML = total.toFixed(2) + " €";
}

// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
    for(let i = 0; i < cart.length; i++){
        const item = cart[i];
        console.log("El total de " + item.name + " en el carrito es de: " + item.quantity);
        if(item.offer && item.quantity >= item.offer.number){
            console.log("El precio de cada " + item.name + " sin descuento es de: " + item.price);

            const discount = item.offer.percent;
            const discountPrice = item.price * (1 - discount / 100);

            item.totalDiscount = (discountPrice * item.quantity).toFixed(2);
            item.discountPrice = discountPrice.toFixed(2);

            console.log("El descuento aplicado en cada " + item.name + " es de: " + discountPrice.toFixed(2));
        }else{
            item.totalDiscount = (item.price * item.quantity).toFixed(2);
            item.discountPrice = item.price.toFixed(2);
        }
    }
}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartList = document.getElementById('cart_list');
    let tableRow = "";
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
}



// ** Nivell II **

// Exercise 7
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
}

const open_modal = () =>  {
    printCart();
}