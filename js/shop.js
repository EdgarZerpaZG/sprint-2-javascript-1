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

const total = 0;

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
        
        calculateTotal();
        console.log(cart);
}


// Exercise 2
const cleanCart = () =>  {

    for(let product in cart){
        if(cart.hasOwnProperty(product)){
            cart.splice(0, cart.length);
            console.log(cart);
        }else{
            console.log("El carrito está vacio!")
        }
    }

    calculateTotal();

}

// Exercise 3
const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
    const totalPrice = document.getElementById('total_price');
    const productTotalPrice = cart.filter((i) => i.price);
    console.log(productTotalPrice)
    totalPrice.innerHTML = productTotalPrice;
}

// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
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