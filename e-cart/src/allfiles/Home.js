import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail'
import ProductContainer from './ProductContainer'
import Cart from './Cart'

const Home=()=>{
    let initTodo;
    let newcartdata;
    var[val,valChange]=useState(1);
    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    }
    else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    
    if(localStorage.getItem('CartData') === null) {
      newcartdata = [];
    }
    else {
      newcartdata = JSON.parse(localStorage.getItem("CartData"));
    }
        
        const [todos, setTodos] = useState(initTodo);
        const [CartData,setCartData] = useState(newcartdata);
        const productDetail = (name,img,description,price,quantity) => {
          let sno;
          if (todos.length === 0) {
            sno = 0;
          }
          else {
            sno = todos[todos.length - 1].sno + 1;
          }
          const myTodo = {
            sno: sno,
            name:name,
            img:img.file,
            description:description,
            price:price,
            quantity:quantity,
          }
          setTodos([...todos, myTodo]);
        }
    
      const onSubVal = (x,todo) => {
        var no;
        for(var i=0;i<todos.length;i++){
            if(todos[i]===todo){
                no=parseInt(todos[i].quantity)-x;
                no=no.toString();
                todos[i].quantity=no;
                }
               var myQuantity={
                  ...todo,
                  myquantity:x
                }
                setCartData([...CartData,myQuantity]);
              }
          setTodos(todos);
          valChange(val+1);
        }

    const Delete=(todo)=>{
      let quan;
      for(var i=0;i<todos.length;i++){
        if(todos[i].sno===todo.sno){
            quan=(parseInt(todos[i].quantity)+todo.myquantity);
            todos[i].quantity=quan.toString();
        }
        setCartData(CartData.filter((e) => {
          if(e.sno==e.sno){
          return e !== todo;}
        }));
      }
      
      setTodos(todos);  
      valChange(val+1);
    }

     useEffect(() => {
        localStorage.setItem("CartData",JSON.stringify(CartData));
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos,CartData,val]);
    
    return(
        <>
           <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-4 '>
                       <div className='row'>
                            <div className='col-12'>
                            <ProductDetail productDetail={productDetail}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-md-12'>
                                <Cart CartData={CartData} Delete={Delete} /> 
                            </div>
                        </div> 
                    </div>
                    
                    <div className='col-md-8 bg-primrary'>
                        <ProductContainer todos={todos} onSubVal={onSubVal} />
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Home;