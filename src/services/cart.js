//quais ações meu carrinho pode fazer?
import catalog from "../data/catalog.js";
import inquirer from 'inquirer';
// ✔ adicionar item

async function addItem(userCart) {
    const choices = catalog.map(item => ({
        name: `${item.name} - R$${item.price.toFixed(2)}`,
        value: item
    }));

    const { selectedItem } = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedItem',
            message: 'Escolha um item para adicionar ao carrinho:',
            choices
        }
    ]);

    const verifyItem = userCart.find(item => item.id === selectedItem.id);

    if (verifyItem) {
        verifyItem.quantity += 1;
    } else {
        userCart.push({ ...selectedItem, quantity: 1 });
    }

    console.log(`✅ ${selectedItem.name} foi adicionado ao carrinho!\n`);
}

// // deletar item
async function deleteItem(userCart) {

    if (userCart.length === 0) {
        console.log("😐 Seu carrinho está vazio.");
        return;
    }

    const choices = userCart.map(item => ({
        name: `${item.name} - R$${item.price.toFixed(2)}`,
        value: item
    }));

    const { selectedItem } = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedItem',
            message: 'Escolha um item para deletar do carrinho:',
            choices
        }
    ]);

    console.log(`🗑️ ${selectedItem.name} foi removido do carrinho!\n`);

    const index = userCart.findIndex(item => item.id === selectedItem.id);
    if (index !== -1) {
        userCart.splice(index, 1);
    } else {
        console.log("Item não encontrado no carrinho.");
    }
}

// // remover item: diminui um item do carrinho
async function removeItem(userCart) {
    //1. encontrar o indice do item no carrinho
    if (userCart.length === 0) {
        console.log("😐 Seu carrinho está vazio.");
        return;
    }

    const choices = userCart.map(item => ({
        name: `${item.name} - R$${item.price.toFixed(2)}`,
        value: item
    }));

    const { selectedItem } = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedItem',
            message: 'Escolha um item para remover do carrinho:',
            choices
        }
    ]);

    const index = userCart.findIndex(item => item.id === selectedItem.id);
    if (index !== -1) {
        userCart[index].quantity -= 1;
        if (userCart[index].quantity === 0) {
            userCart.splice(index, 1);
        }
        console.log(`➖ ${selectedItem.name} foi removido do carrinho!\n`);
    } else {
        console.log("Item não encontrado no carrinho.");
    }
}

const calculateTotal = (userCart) => {
    return userCart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

async function displayCart(userCart) {
    if (userCart.length === 0) {
        console.log("😐 Seu carrinho está vazio.");
        return;
    }

    userCart.forEach(item => {
        console.log(`🛍️ ${item.name} - R$${item.price.toFixed(2)} (Quantidade: ${item.quantity})\n`);
    });

    const total = calculateTotal(userCart);
    console.log(`💰 Total do carrinho: R$${total.toFixed(2)}\n`);

}

export {
    addItem,
    deleteItem,
    removeItem,
    displayCart
};