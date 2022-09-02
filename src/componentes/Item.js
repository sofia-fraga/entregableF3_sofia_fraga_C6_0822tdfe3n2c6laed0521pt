import {useState} from 'react';

export default function Item({nombre, descripcion, stock, incrementarTotal}) {

    const [stockE, setStockE]=useState(stock)

    const reducirStock = () =>{
      setStockE(stockE-1)
      incrementarTotal()
    }

    return (
      <div className='producto'>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <h5>En stock: {stockE > 0 ? stockE : <span>agotado</span>}</h5>
        {stockE > 0 ? <button onClick={reducirStock}>"COMPRAR"</button> : <button disabled>"SIN STOCK"</button>}
      </div>
    )
  }