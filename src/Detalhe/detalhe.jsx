import { useParams } from "react-router-dom";
import Card from '../componentes/Card';

export default function Detalhe(){
    const {id} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    console.log(lista);

    const ativ = lista.filter((objeto) => {
        if(objeto.id == id){
            return objeto;
        }
        return null
    })
    console.log(ativ[0]);
    
    return(
       <Card ativ={ativ[0]}></Card>
    );
}

//useParams: PARA EXTRAIR O PARAMETRO ID
//const lista = JSON.parse(localStorage.getItem("Lista")): O localStorage está recuperando os "itens"
//const ativ = lista.filter((objeto) => blábláblá... usa o negocio do negocio do filter para poder filtrar e encontrar os objetos na lista com o ID 
//return(<Card ativ={ativ[0]}></Card>); Está renderizando um component Card passando pelo Array (ativ)
//E o console.log(Lista) mostra o result final