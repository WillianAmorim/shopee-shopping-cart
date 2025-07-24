import inquirer from 'inquirer';
import { addItem, displayCart, deleteItem, removeItem } from '../services/cart.js';

const userCart = [];
const myWhishList = []

export async function menu() {
    let sair = false;

    while (!sair) {
        const { opcao } = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcao',
                message: 'O que você deseja fazer?',
                choices: [
                    '🛒 Adicionar item ao carrinho',
                    '📦 Visualizar carrinho',
                    '🛒 Deletar item do carrinho',
                    '➖ Remover item do carrinho',
                    '⭐ Adicionar item à lista de desejos',
                    '📦 Visualizar lista de desejos',
                    '🗑️ Deletar item da lista de desejos',
                    '❌ Sair'
                ]
            }
        ]);

        switch (opcao) {
            case '🛒 Adicionar item ao carrinho':
                await addItem(userCart);
                break;

            case '📦 Visualizar carrinho':
                await displayCart(userCart);
                break;

            case '🛒 Deletar item do carrinho':
                await deleteItem(userCart);
                break;

            case '➖ Remover item do carrinho':
                await removeItem(userCart);
                break;

            case '⭐ Adicionar item à lista de desejos':
                await addItem(myWhishList);
                break;

            case '📦 Visualizar lista de desejos':
                await displayCart(myWhishList);
                break;

            case '🗑️ Deletar item da lista de desejos':
                await deleteItem(myWhishList);
                break;

            case '❌ Sair':
                sair = true;
                console.log('👋 Até mais!');
                break;
        }
    }
}
