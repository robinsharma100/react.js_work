import React,{useState} from 'react'
import "./CartItem.css"
const CartItem=({todo,Delete})=>{
   var total;
   total=(parseInt(todo.price))*(todo.myquantity);

    return(
   <div className="card px-2 cart_item my-2" >
        <img src={todo.img} className="card-img-top mt-2" style={{borderRadius:10}} alt="..."/ >
            <div className="card-body">
                <h3 className="card-title my-2 text-center">{todo.name}</h3>
                    <div className="row text-center">
                        <div className="col">
                            <div className="value_heading">Price</div>
                            <hr className="my-1"/>
                            <div>{todo.price}</div>
                        </div>
                        <div className="col">
                            <div className="value_heading">Quantity</div>
                            <hr className="my-1"/>
                            <div>{todo.myquantity}</div>
                        </div>
                        <div className="col">
                            <div className="value_heading">Total</div>
                            <hr className="my-1"/>
                            <div>{total}</div>
                        </div>
                    </div>
                <div className="d-flex my-4 justify-content-center">
                    <button className="Add_btn" onClick={()=>{Delete(todo)}}>Delete</button>
                </div>
            </div>
    </div>
   )
}

export default CartItem;