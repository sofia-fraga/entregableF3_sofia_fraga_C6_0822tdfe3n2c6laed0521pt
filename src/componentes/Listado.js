import React from 'react'
import Item from './Item';

export default function Listado({data, incrementarTotal}) {
  return (
    <div className='container'>
      {data.map((item)=> <Item key={item.id} nombre={item.producto.nombre} descripcion={item.producto.descripcion} stock={item.stock} incrementarTotal={incrementarTotal}/>)}
    </div>
  )
}