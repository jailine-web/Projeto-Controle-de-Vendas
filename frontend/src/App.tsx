import BotaoNotificacao from "./Componentes/botaoNotificacao"
import Header from "./Componentes/Header"
import Salescard from './Componentes/SalesCard'

function App() {
   return (
    <>
    <Header></Header>

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
