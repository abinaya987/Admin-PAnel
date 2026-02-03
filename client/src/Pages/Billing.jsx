import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'

function Billing() {
    const { products } = useContext(AppContext);

    const [selectedProductId, setSelectedProductId] = useState("");
    const [qty, setQty] = useState(1);
    const [billItems, setBillItems] = useState([]);

    const handleAddToBill = (e) => {
        e.preventDefault();
        // Loose equality to handle numeric IDs from assets and string IDs from inputs
        const product = products.find(p => p.id == selectedProductId);

        if (product && qty > 0) {
            const newItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                qty: parseInt(qty),
                total: product.price * parseInt(qty)
            };
            setBillItems([...billItems, newItem]);
            // Reset for next entry
            setQty(1);
        } else {
            alert("Please select a valid product and quantity");
        }
    };

    const grandTotal = billItems.reduce((acc, item) => acc + item.total, 0);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Billing Page</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Control Panel */}
                <div className="w-full lg:w-1/3 border p-4 rounded shadow-md h-fit">
                    <h2 className="text-xl font-semibold mb-4">Add Item</h2>
                    <form onSubmit={handleAddToBill} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-gray-700">Select Product</label>
                            <select
                                className="w-full border p-2 rounded"
                                value={selectedProductId}
                                onChange={(e) => setSelectedProductId(e.target.value)}
                            >
                                <option value="">-- Select Product --</option>
                                {products.map((product, index) => (
                                    <option key={index} value={product.id}>
                                        {product.name} (Stock: {product.stock})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700">Quantity</label>
                            <input
                                type="number"
                                className="w-full border p-2 rounded"
                                min="1"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                        >
                            Add to Bill
                        </button>
                    </form>
                </div>

                {/* Bill Table */}
                <div className="w-full lg:w-2/3 border p-4 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Invoice</h2>

                    {billItems.length === 0 ? (
                        <p className="text-gray-500">No items added yet.</p>
                    ) : (
                        <>
                            <table className="w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border p-2 text-left">Product</th>
                                        <th className="border p-2 text-right">Price</th>
                                        <th className="border p-2 text-center">Qty</th>
                                        <th className="border p-2 text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {billItems.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="p-2">{item.name}</td>
                                            <td className="p-2 text-right">${item.price}</td>
                                            <td className="p-2 text-center">{item.qty}</td>
                                            <td className="p-2 text-right">${item.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="mt-4 flex justify-end">
                                <div className="text-right">
                                    <h3 className="text-xl font-bold">Grand Total: ${grandTotal}</h3>
                                    <button
                                        className="mt-2 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
                                        onClick={() => alert(`Printing Bill! Total: $${grandTotal}`)}
                                    >
                                        Print Bill
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Billing