// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.

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

return(
  <div>
       <h1>Stylish Clothes</h1>
       {
    listaProdutos.map((produto) => 
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



