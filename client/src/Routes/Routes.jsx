import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard.jsx'
import Products from '../Pages/Products.jsx'
import Category from '../Pages/Category.jsx'
import Seller from '../Pages/Seller.jsx'
import Billing from '../Pages/Billing.jsx'
import Users from '../Pages/Users.jsx'
import Login from '../Pages/Login.jsx'
import Layout from '../Components/Layout.jsx'
import Addproduct from '../Pages/Addproduct.jsx'
import Addseller from '../Pages/Addseller.jsx'


function AllRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Layout />}>
                <Route path="category" element={<Category />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="seller" element={<Seller />} />
                <Route path="billing" element={<Billing />} />
                <Route path="users" element={<Users />} />
                <Route path="add-product" element={<Addproduct />} />
                <Route path="add-seller" element={<Addseller />} />

            </Route>

        </Routes>
    );
}

export default AllRoutes