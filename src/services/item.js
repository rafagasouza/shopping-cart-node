//Caso de uso
//criando um item
async function createItem(name, price, quantity) {
  return {
    name,
    quantity,
    price,
    subtotal: () => price * quantity,
  };
}

export default createItem