import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import cartItems from '../cartItems';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
    //  console.log(
    //     useSelector((store)=>{
    //         console.log(store);
    //     }));
    const dispatch = useDispatch();
    const { cartItems, units, total } = useSelector((store) => store.cart);

    if (units < 1) {
        return <section className='cart'>
            <header>
                <h2>Your cart</h2>
                <h4 className='empty-cart'> is currently empty</h4>
            </header>
        </section>
    }
    return <section className='cart'>
        <header>
            <h2>Your cart</h2>
        </header>
        <div>
            {
                cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })
            }
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    Total Amount : <span> ${total}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </footer>
    </section>

}

export default CartContainer;