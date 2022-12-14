import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../assets/models/sale";
import { BASE_URL } from "../../utils/request";
import BotaoNotificacao from '../botaoNotificacao';
import './index.css';

function SalesCard() {

  const date = new Date(new Date().setDate(new Date().getDate() - 365));

  const max = new Date();

  const [minDate, setMinDate] = useState(date);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    //recortar um texto em js slice 10 onde a string será cortada
    const dataMinima = minDate.toISOString().slice(0,10);

    const dataMax = maxDate.toISOString().slice(0,10);

    axios.get(`${BASE_URL}/sales?minDate=${dataMinima}&maxDate=${dataMax}`).then(response => {
      setSales(response.data.content);
    })

  }, [minDate,maxDate]);


  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Relatório de vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">

          <h3>Data inicial:</h3>
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => { setMinDate(date) }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy" />
        </div>
        <div className="dsmeta-form-control-container">

          <h3>Data final:</h3>
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => { setMaxDate(date) }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>

            {sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td className="show992">{sale.id}</td>
                  <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                  <td>{sale.sellerName}</td>
                  <td className="show992">{sale.visited}</td>
                  <td className="show992">{sale.deals}</td>
                  <td>{sale.amount.toFixed(2)}</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <BotaoNotificacao saleId={sale.id}/>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>

    </div>
  )
}
export default SalesCard;