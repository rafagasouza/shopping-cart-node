//Mapeamento Carrinho

//adicionar item
async function addItem(cart, item) {
  cart.push(item);
}

//remover item
async function removeItem(cart, name) {
  const index = cart.findIndex((item)=> item.name === name)

  if(index !== -1){
    cart.splice(index,1)
  }
}

//diminuir um item
async function diminuirUm(cart, item) {}

//aumentar um item
async function aumentarUm(cart, item) {}

//calcular total
async function calculate(cart) {
  const resultado = cart.reduce((total, item) => total + item.subtotal(),0);

  console.log(resultado)
}


export{
  addItem,
  calculate, removeItem
}