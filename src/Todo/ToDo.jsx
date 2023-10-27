import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./todo.css"

export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [lista, setLista ] = useState(listaLocalStorage   || []);
   const [tipo, setTipo ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [imagem, setImagem ] = useState("");
   const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

   useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));}, [lista]);

    const salvar =(e) =>{
        // e.preventDefault(); > previnir o comportamento
        e.preventDefault();
        setLista([...lista, {
                tipo: tipo, 
                marca:marca, 
                preco: preco, 
                imagem: imagem,
                id: id
        }]);
        setId(id + 1);
        setTipo("");
        setMarca("");
        setPreco("");
        setImagem("");
        console.log(id)
    };

    const remover = (id) => {
        const auxLista = lista.filter((item) => item.id !== id);
        setLista(auxLista);
      };

    return (
        <div class="estilizando">
            <Link to="/">home</Link>
            <h2 class="txt">Meus Livrinhos</h2> 
            <div>
            <form onSubmit={salvar}>

             <p className="txt-input"><b>Escolha o tipo:</b></p>
            <input value={tipo} type="text"
            onChange={(e)=>{ setTipo(e.target.value)}}/>

            <p className="txt-input"><b>Escolha a/o Autor/a:</b></p>
             <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/> 

            <p className="txt-input"><b>Escolha o Preço Desejado:</b></p>
            <input value={preco} type="text"
            onChange={(e)=>{ setPreco(e.target.value)}}/>
           
           <p className="txt-input"><b>URL da Img:</b></p>
           <input value={imagem} type="text"
            onChange={(e)=>{ setImagem(e.target.value)}}/>


            <button className="btn">ADD</button>   
            </form>
        </div>         
         
            {lista.map((ativ)=>
            <div key= {ativ.id}>
                <Link to={`/detalhe/${ativ.id}`}><p>Tipo: {ativ.tipo}</p>
</Link>
                <p>Autor/a:: {ativ.marca}</p>
                <p>Preço: R${ativ.preco}</p>
                <p>Imagem:</p>
                <img src= {ativ.imagem} alt="" />
                <button onClick={() => remover(ativ.id)}><img src = "lixo.svg" alt="lixeira"/></button>

            </div>
        )} 
        </div>
    );
}
//map: manipular dados dentro de um array
//ativ. é o meu parametro