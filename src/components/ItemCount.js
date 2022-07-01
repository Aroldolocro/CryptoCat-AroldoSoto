import { useState } from 'react'

import './styles/ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

const [count, setCount] = useState(initial);

const incrementar = () => {
    setCount(count + 1);
};
const decrementar = () => {
    setCount((valAnt) => (valAnt > 0 ? count - 1 : count))
};

  return (
    <div className='itemcount-c'> 
      <div className='img-box'></div>
      <div className='box-layout'>
      <p className='box b1'>USDT</p>
      <p className='box b2'>{count}</p>
      <button onClick={decrementar} className='box b3'>-</button>
      <button onClick={incrementar} className='box b4'>+</button>
      <button className='box b5'
        onClick={() => {
            if (count <= stock) {
                onAdd(count);
            }
            else {
                alert("No hay stock")
            }
        }} >
            COMPRAR
      </button>
      </div>
    </div>
  )
}

export default ItemCount
