import axios from 'axios';
import { toast } from 'react-toastify';
import icone from '../../assets/img/IconeDeNotificacao.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
    saleId : number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response =>{
        toast.info("SMS enviado com sucesso");
    })
}

function BotaoNotificacao({saleId}: Props) {
    return (
     <div className="dsmeta-red-btn" 
     onClick={() => handleClick(saleId)}>
        <img src= {icone} alt="Notificar" />
     </div>
    )
 }
 
 export default BotaoNotificacao
 