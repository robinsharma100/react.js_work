import React from 'react'
import CartItem from './CartItem'
import "./Cart.css"
const Cart=({CartData,Delete})=>{

    return(
    <>
        <div className="card cart_container mt-3">
            <h3 className='text-center'>Cart</h3>
            {
            CartData.map((todo)=>{
            return (<CartItem todo={todo} Delete={Delete} key={todo.sno}  />   
            )
        })
        }
        </div>
    </>
    )
}

export default Cart;