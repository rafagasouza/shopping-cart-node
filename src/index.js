import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const cart = [];
const wishList = []; //para salvar items que queremos mas nao efetuamos a compra

const item1 = await createItem("Camisa", 23.5, 2);
const item2 = await createItem("Calça", 30.0, 6);
const item3 = await createItem("blusa", 30.0, 6);
const item4 = await createItem("calcinha", 30.0, 6);


await cartService.addItem(cart, item1)
await cartService.addItem(cart, item3)
await cartService.removeItem(cart, item1)
await cartService.removeItem(cart, item1)


await cartService.displayCart(cart)


