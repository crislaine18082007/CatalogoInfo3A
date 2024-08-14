// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

import { useState } from "react";

export default function Home() {
    const [listaProdutos, setProdutos] = useState([

    {

        id: 1,

        item: "Cropped",

        preco: "R$ 30,00",

        imagem: "https://th.bing.com/th/id/OIP.1qSJggcK4-RZpT361tMN8QHaJ4?w=189&h=252&c=7&r=0&o=5&dpr=1.1&pid=1.7",

        

    },

    {

        id: 2,

        item: "Calça",

        preco: "R$ 50,00",

        imagem: "https://th.bing.com/th/id/OIP.uKkkvJdCiZk1ynnQ2LTMbAHaJQ?w=189&h=236&c=7&r=0&o=5&dpr=1.1&pid=1.7",

        

    },

    {

        id: 3,

        item: "Tenis",

        preco: "R$ 59,90",

        imagem: "https://th.bing.com/th/id/OIP.gxFDa1ZYJW_2eW13Yus64QHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    },
]);

const [listaPedidos, setListaPedidos] = useState([]);
const adicionarItemPedidos = (pedido)  => {
    setListaPedidos([...listaPedidos, pedido])
}

const removerItemPedidos = (id)=> {
    let listaAux = listaPedidos.filter((pedido, index)=> {
        if(index !== id){

            return pedido
         } 
         else {
            return null;
            }
        }
    );

    setPedidos(listaAux);
}

return(
  <div>
       <h1>Stylish Clothes</h1>
       {
    listaProdutos.map((produto) => 
      <div key={produto.id}>
      <p>{produto.item}</p>
      <p>{produto.preco}</p>
    <img src = {produto.imagem}/>    
    <button onClick={() => adicionarItemPedidos(produto)}> Adicionar </button>
</div>
    )
}
{
    listaPedidos.map((produto) =>
    <div key={produto.id}>
    <p>{produto.item}</p>
    <p>{produto.preco}</p>
  <img src = {produto.imagem}/>
  </div>
    )
}
</div>
);
}