//quais ações meu carrinho pode fazer?

// ✔ adicionar item
async function addItem(userCart, item) {
    userCart.push(item);
}

// calcular total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

// deletar item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

// remover item: diminui um item do carrinho
async function removeItem(userCart, item) {
    //1. encontrar o indice do item no carrinho
    const indexFound = userCart.findIndex(p => p.name === item.name);

    //2. Caso não encontre o item
    if(indexFound == -1) {
        console.log(`Item não encontrado`);
        return;
    }

    //3. Item > 1 subtrair um item, item = 1 remover o item
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log('Shopee cart list:')
    userCart.forEach(item => {
        console.log(`Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Subtotal: ${item.subtotal()}`);
    });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };