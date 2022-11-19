import BotaoNotificacao from "./Componentes/botaoNotificacao"
import Header from "./Componentes/Header"
import Salescard from './Componentes/SalesCard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   return (
    <>
    <ToastContainer/>
    <Header/>

    <main>
      <section id="sales">
        <div className="dsmeta-container">
            <Salescard></Salescard>
        </div>
      </section>
    </main>
    </>
    
   )
}

export default App
