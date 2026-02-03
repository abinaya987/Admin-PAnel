import React from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

function Seller() {
  const { sellers } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleAddproduct = () => {
    navigate('/add-seller');
  };

  return (
    <>
      <h1>Sellers</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sellers.map((seller, index) => (
          <div className="border p-4 m-4 rounded shadow-lg flex flex-col" key={index}>
            <h2 className="text-xl font-semibold mb-2">{seller.name}</h2>
            <p className="text-gray-700">Contact: {seller.contact}</p>
            <p className="text-gray-600">Email: {seller.email}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddproduct}
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded"
      >
        Add seller
      </button>
    </>
  );
}

export default Seller;
