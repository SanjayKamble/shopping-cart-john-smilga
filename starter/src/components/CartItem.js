import React from 'react';
import { useDispatch } from 'react-redux';
import { ChevronUp, ChevronDown } from '../icons';
import { removeItem,increase,decrease } from '../features/cart/cartSlice';


const CartItem = ({ id, title, price, img, units }) => {
  const dispatch = useDispatch();
  return (

    <article className='cart-item'>
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>

      <div>
        <button className='amount-btn' 
        onClick={
           ()=>{ dispatch(increase({id}))}}><ChevronUp /></button>

        <p className='amount'>{units}</p>
        <button className='amount-btn'onClick={()=>{ if(units===1){
              dispatch(removeItem(id));
              return;
            }dispatch(decrease({id}))}}><ChevronDown /></button>

      </div>
    </article>
  )


}

export default CartItem