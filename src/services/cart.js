//Mapeamento Carrinho

//adicionar item
async function addItem(cart, item) {
  cart.push(item);
}

//remover a unidade de item 
async function removeItem(cart, item) {
  const index = cart.findIndex((p) => p.name === item.name);


  if (index === -1) {
    console.log('Não encontrado')
  }
  
  if(cart[index].quantity > 1){
    cart[index].quantity -= 1
  }else if(cart[index].quantity === 1){
    deleteItem(cart,item.name)
  }

  
}

//deleta o item

async function deleteItem(cart, name){
  const index = cart.findIndex((item) => item.name === name);

  if(index !== -1){
    cart.splice(index,1)
  }
}



//calcular total
async function calculate(cart) {
  const resultado = cart.reduce((total, item) => total + item.subtotal(), 0);

  console.log(`Total: R$${resultado}`);
}

async function displayCart(cart) {
  console.log("Shopee Cart List:");
  cart.forEach((item, index) => {
    console.log(`${index + 1} - Item: ${item.name} - Quantidade: ${item.quantity}x - Valor Uni: R$${item.price} - Subtotal: R$${item.subtotal()}`);
  });
  await calculate(cart)
}

export { addItem, calculate, removeItem, displayCart, deleteItem};
