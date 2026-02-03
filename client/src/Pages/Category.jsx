import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Category() {
    const { categorys } = useContext(AppContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categorys.map((category, index) => (
                    <div key={index} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                            {/* Placeholder icon based on first letter */}
                            {category.name.charAt(0)}
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                        <p className="text-gray-600">{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category