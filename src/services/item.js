//Caso de uso
//criando um item
async function createItem(name, quantity, price) {
  return {
    name,
    quantity,
    price,
    subtotal: () => price * quantity,
  };
}

export default createItem