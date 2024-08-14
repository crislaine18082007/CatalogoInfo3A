// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

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

return (
    <div>
        <h1>Stylish Clothes</h1>
    </div>
)
}





