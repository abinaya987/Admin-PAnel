
import React from 'react'
import { AppContext } from '../Context/AppContext'



function Dashboard() {

     const { products } = React.useContext(AppContext); 
     const noofproducts = products.length;
    const list = [
        { title: "No Of Products", num: noofproducts },
        { title: "No Of Users", num: 100 },
        { title: "No Of Products SoldOut", num: 100 },
        { title: "imminent stock status", num: 100 },
        { title: "No Of Bills", num: 100 },
        { title: "Revenues", num: 100 }
    ]
    return (
        <>
            <div className="w-[100%]">
                <div className="grid grid-cols-3 gap-4">
                    {list.map((item, index) => (
                        <div key={index} className="border p-4 m-4 rounded lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                            <p className="text-3xl">{item.num}</p>
                        </div>
                    ))}
                </div>
            </div>



        </>
    )
}

export default Dashboard