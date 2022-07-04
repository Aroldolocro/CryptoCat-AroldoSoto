import { useState } from 'react'

import './styles/ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

const [count, setCount] = useState(initial);

const incrementar = () => {
    setCount(count + 1);
};
const decrementar = () => {
    setCount((valAnt) => (valAnt > 1 ? count - 1 : count))
};

  return (
    <div className='itemcount-c'> 
    
      <div className='C-1'></div>

      <div className='C-2'>

      <div className='C-2-B1'><p className='txt-1'>USDT</p></div>
      <div className='C-2-B2'>
        <button className='C-2-B2B1' onClick={decrementar}><p className='txt-2'>-</p></button>
        <div className='C-2-B2B2'>{count}</div>
        <button className='C-2-B2B3' onClick={incrementar}><p className='txt-2'>+</p></button>
      </div>
      <button className='C-2-B3'
      onClick={() => {
          if (count <= stock) {
              onAdd(count);
          }
          else {
              alert("No hay stock")
          }
      }} >
          <p className='txt-3'>COMPRAR</p>
  </button>

      </div>

    </div>
  )
}

export default ItemCount