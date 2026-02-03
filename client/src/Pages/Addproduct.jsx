import React, { useState, useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

function Addproduct() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")

    const { addProduct } = useContext(AppContext);
    const navigate = useNavigate();

    const handleAddproduct = (e) => {
        e.preventDefault();

        const newProduct = {
            id,
            name,
            category,
            price,
            stock
        };
        addProduct(newProduct);
        navigate('/products');
    }
    return (
        <>
            <h1>Add Product Page</h1>
            <form onSubmit={handleAddproduct}>

                <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter Product id" />
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product name" />
                <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product category" />
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product price" />
                <input type="text" name="stock" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Enter Product stock" />
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Add Products</button>

            </form>

        </>
    )
}

export default Addproduct