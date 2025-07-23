import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWhishList = []

console.log('Welcome to the your Shopee Cart!')

const item1 = await createItem('PS5', 4999.99, 1)
const item2 = await createItem('Xbox Series X', 2999.99, 3)

// adicionar itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2); // remove o segundo item (Xbox Series X)
await cartService.removeItem(myCart, item2); // remove o segundo item (Xbox Series X)
await cartService.removeItem(myCart, item2); // remove o segundo item (Xbox Series X)

await cartService.displayCart(myCart);

// deletar itens do carrinho
/* await cartService.deleteItem(myCart, item1.name);
await cartService.deleteItem(myCart, item2.name); */

console.log("Shopee Cart Total Is:")
await cartService.calculateTotal(myCart);