# 🛒 Projeto Carrinho de Compras - Shopee Clone

Este projeto é uma simulação de um sistema de carrinho de compras, desenvolvido em JavaScript como parte do Bootcamp MeuTudo. Ele simula funcionalidades básicas de um carrinho de e-commerce, como adicionar, remover e calcular itens.

## 📦 Funcionalidades

- Adicionar itens ao carrinho
- Remover itens do carrinho (um por vez ou totalmente)
- Aumentar e diminuir a quantidade de um item
- Calcular o valor total do carrinho
- Mostrar detalhes de cada item
- Modularização com `ESModules` para organização do código

## 🧪 Exemplo de uso

```js
import createItem from "./services/item.js";
import * as cartService from './services/cart.js';

const cart = [];

const item1 = await createItem("Camisa", 2, 23.50);
const item2 = await createItem("Calça", 1, 50.00);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
await cartService.calculate(cart);
```

## 🧱 Estrutura do Projeto

```
shopee-shopping-cart/
├── services/
│   ├── cart.js         # Funções para manipular o carrinho
│   └── item.js         # Função para criar um item com subtotal
├── index.js            # Arquivo principal de execução
├── README.md           # Documentação do projeto
```

## ⚙️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org) — Ambiente de execução JavaScript
- JavaScript ESModules (`import/export`)
- Async/Await
- Paradigma funcional básico (uso de `map`, `reduce`, `findIndex`)

## 🚀 Como executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/shopping-cart-node.git
```

2. Entre na pasta:
```bash
cd shopping-cart-node
```

3. Execute o projeto com Node:
```bash
node index.js
```

> ⚠️ Certifique-se de estar usando uma versão recente do Node.js (v14+).

## 📌 Próximos passos (ideias de melhoria)

- Interface com HTML/CSS
- Persistência com banco de dados ou localStorage
- Suporte a cupons de desconto
- Validação de estoque

## 🧑‍💻 Autor

Desenvolvido por **Ráfaga Matos** durante o Bootcamp MeuTudo 🚀
