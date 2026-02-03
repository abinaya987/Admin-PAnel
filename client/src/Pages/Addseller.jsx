import React, { useState, useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

function Addseller() {
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")

    const { addSeller } = useContext(AppContext);
    const navigate = useNavigate();

    const handleAddSeller = (e) => {
        e.preventDefault();

        const newSeller = {
            name,
            contact,
            email
        };
        addSeller(newSeller);
        navigate('/seller');
    }
    return (
        <>
            <h1>Add Seller Page</h1>
            <form onSubmit={handleAddSeller}>

                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Seller name" />
                <input type="text" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Seller Contact" />
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Seller Email" />
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Add Seller</button>

            </form>

        </>
    )
}

export default Addseller