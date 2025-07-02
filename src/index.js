import createItem from "./services/item.js"
import * as cartService from './services/cart.js'

const cart = []

const item1 = await createItem('Camisa', 23.50, 2)
const item2 = await createItem('Calça', 30.00, 6)

console.log('Seu carrinho de compras!')
await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)





await cartService.removeItem(cart, item2.name)

await cart.forEach((item)=>{
  console.log(`Item: ${item.name}, Preço: ${item.price}, Quantidade: ${item.quantity}`)
})

console.log('Total:')
await cartService.calculate(cart)