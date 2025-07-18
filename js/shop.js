console.log("Saludos desde shop.js")
// Products
// async function obtenerDatosJSON() {
//   try {
//     const respuesta = await fetch('../json/products.json');
//     const datos = await respuesta.json();
//     console.log(datos);
//   } catch (error) {
//     console.error('Error al obtener los datos:', error);
//   }
// }
// obtenerDatosJSON();

const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// console.log(products)

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

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
        
        calculateTotal();
        // applyPromotionsCart();
}


// Exercise 2
const cleanCart = () =>  {

    cart.length = 0;
    console.log("Carrito limpio:", cart);
    calculateTotal();

}

// Exercise 3
const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    let quantity = 0;
    const totalPrice = document.getElementById('total_price');
    const totalCount = document.getElementById('count_product');
    for (let i = 0; i < cart.length; i++) {
        quantity += cart[i].quantity;
        total += cart[i].price * quantity;
    }
    console.log("El total en el carrito es de: " + total + " €");
    totalCount.innerHTML = quantity;
    totalPrice.innerHTML = total.toFixed(2) + " €";
}

// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
    for(let i = 0; i < cart.length; i++){
        console.log(cart[i].quantity);
        if(cart[i].id == 1 && cart[i].quantity >= 3){
            console.log("Precio sin descuento: " + cart[i].price);
            const priceDct1 = cart[i].price * 0.2;
            console.log("Descuento aplicado: " + priceDct1);
        }
        if(cart[i].id == 3 && cart[i].quantity >= 10){
            console.log("Precio sin descuento: " + cart[i].price);
            const priceDct2 = cart[i].price * 0.3;
            console.log("Descuento aplicado: " + priceDct2);
        }
    }
}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    printCart();
}