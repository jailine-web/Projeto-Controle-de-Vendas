import axios from 'axios';
import icone from '../../assets/img/IconeDeNotificacao.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
    saleId : number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response =>{
        console.log("Sucess");
    })
}

function BotaoNotificacao({saleId}: Props) {
    return (
     <div className="dsmeta-red-btn" onClick={()=>{handleClick(saleId)}}><img src= {icone} alt="Notificar" />
     </div>
    )
 }
 
 export default BotaoNotificacao
 