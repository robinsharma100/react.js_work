import React from 'react'
import './ProductDetails.css'
import  { useState } from 'react'

const ProductDetail=({productDetail})=>{
    const[name,setName] = useState();
    const[img,setImage] = useState({
        file:null
    });
    const[description,setDescription] = useState('');
    const[price,setPrice] = useState(0);
    const[quantity,setQuantity] = useState(0);

    var handleImage=(event)=> {
        var reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState){
                setImage({file:reader.result})
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (!name || !img||!description||!price||!quantity) {
            alert("field is empty");
        }
        else{
        productDetail(name,img,description,price,quantity);
        setName('');
        setImage("");
        setPrice(0);
        setQuantity(0);
        setDescription('');
        }
    }

    return(
        <>  <div className='form_container container-fluid'>
            <h3 className="text-center my-4">Product Details</h3>
            <div className="form_box">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label  className="form-label">Product Name</label>
                            <input type="text" name='Product' className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} id="inputAddress" placeholder="Enter product name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Select image</label>
                        <input className="form-control" name='img' type="file" accept="image/*"  onChange={(e)=>{handleImage(e)}} id="formFile"/>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Description</label>
                            <input type="text" name='Description' className="form-control" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="describe"/>
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Price</label>
                            <input type="number" name='Price' value={price} onChange={(e)=>{setPrice(e.target.value)}} className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Quantity</label>
                            <input type="number" name='Quantity' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} className="form-control" />
                    </div>      
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary mt-1 mb-4 submit_button">Add Item</button>
                    </div>
                </form>
            </div>
          </div>  
        </>
    )
}

export default ProductDetail