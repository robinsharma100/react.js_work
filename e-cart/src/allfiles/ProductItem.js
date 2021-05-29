import React, {useState} from 'react'
import "./ProductItem.css"

const ProductItem =({todo,onSubVal})=>{
    const [state, setState] = useState(0);
    var Sub=()=>{
        if(state>0){
            setState(state-1)
        }
        else{
            alert("select a value");
        }
    }
    var Add=()=>{
        if(state<todo.quantity){
            setState(state+1)
        }
        else{
            alert("cannot exceed the limit");
        }
    }

    return(
    <>
        <div className="card mb-3 " >
            <div className="row g-0">
                <div className="col-md-4 d-flex  align-items-center img_col">
                    <div className="w-100 mx-1 h-100 d-flex align-items-center justify-content-center">
                        <img src={todo.img} alt="..." style={{ minHeight: 250,borderRadius:10}} className="img-fluid my-1 "/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="detail ms-4 my-3">
                            <div className="d-flex justify-content-between align-items-center ">    
                                <div><span>Product</span> : <span>{todo.name}</span></div>
                                <div >Desc: {todo.description}</div>
                            </div>
                            <div className="d-flex justify-content-between ">    
                                <div >Price: {todo.price}</div>
                                <div >Quantity: {todo.quantity}</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex py-4 select_div">
                        <span className="mx-4 select  py-2">select quantity:</span>
                        <span><button type="button" onClick={()=>{Add()}} class="val_change_btn">+</button></span>
                        <span className="mx-2 btn value_btn">{state}</span>
                        <span><button type="button" onClick={()=>{Sub()}} class="val_change_btn">−</button></span>
                    </div>
                    <button className="Add_btn float-end mx-3 mb-3" onClick={()=>{onSubVal(state,todo)}}>Add to Cart</button>
                </div>
            </div>
        </div>
    </>);
}

export default ProductItem;