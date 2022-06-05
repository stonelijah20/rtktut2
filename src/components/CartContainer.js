import CartItems from './CartItems'
import { useSelector, useDispatch } from "react-redux";
import { openModal } from '../features/modalSlice';

import React from 'react'

function CartContainer() {
    const dispatch = useDispatch()
    const {cartItems, total, amount} = useSelector((store) => store.cart )
    if(amount < 1){
        return (
            <section className="cart">
                <h2>Your Bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </section>
        )
    }
  return (
    <section className="cart">
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cartItems.map((item) => {
                return (
                    <div key={item.id}>
                        <CartItems key={item.id} {...item}/>
                    </div>
                )
            })}
        </div>
        <footer>
            <hr/>
            <div className='cart-total'>
                <h4>
                    total <span>${total.toFixed(2)}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
                Clear Cart
            </button>
        </footer>
    </section>
  )
}

export default CartContainer