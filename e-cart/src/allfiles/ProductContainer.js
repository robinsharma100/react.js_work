import React from 'react';
import ProductItem from './ProductItem';
import './ProductContainer.css'

const ProductContainer = (props) => {

  return (
      <div className="container main_container"> 
        <div className="w-100 h-100 text-center"><h2>Product List</h2></div>
        {
          props.todos.map((todo)=>{
            return (<ProductItem todo={todo} key={todo.sno} onSubVal={props.onSubVal}/>   
            )
        })
        }
      </div>
  );
}

export default ProductContainer;