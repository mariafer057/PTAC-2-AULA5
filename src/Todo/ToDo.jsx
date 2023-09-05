import { useState } from "react";
import { Link } from "react-router-dom";
import "./todo.css"

export default function ToDo() {
   const [tipo, setTipo ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [lista, setLista ] = useState([]);
   const [id,setId] = useState(1);
    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                tipo: tipo, marca:marca, preco: preco,

                id: id
        }]);
        setId(id + 1);
        setTipo("");
        setMarca("");
        setPreco("");
    };

    return (
        <div>
            <Link to="/">home</Link>
            <h2 class="txt">Shoes mult</h2>    
            <form onSubmit={salvar}>
            <input value={tipo} type="text"
            onChange={(e)=>{ setTipo(e.target.value)}}/>
            <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/>
            <input value={preco} type="text"
            onChange={(e)=>{ setPreco(e.target.value)}}/>
            <button class="btn btn-success">ADD</button>   
            </form>      
            {lista.map((ativ)=>
            <div key= {ativ.id}>

                <p>Tipo: {ativ.tipo}</p>
                <p>Marca: {ativ.marca}</p>
                <p>Preco:R${ativ.preco}</p>
            </div>
            )} 
        </div>
    );
}