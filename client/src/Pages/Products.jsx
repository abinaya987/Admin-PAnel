import React from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'


function Products() {

    const { products } = React.useContext(AppContext);
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/add-product');

    }
    return (
        <>
            <h1>Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="border p-4 m-4 rounded lg shadow-lg flex flex-col">
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-3xl">{product.price}</p>
                        <p className="text-gray-600">Stock: {product.stock}</p>
                        <p className="text-gray-600">Category: {product.category}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleAddProduct} className="mt-4 bg-green-600 text-white py-2 px-4 rounded">Add Product</button>
        </>
    )
}

export default Products