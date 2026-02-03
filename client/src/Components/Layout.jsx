import React, { useContext } from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactsIcon from '@mui/icons-material/Contacts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link, Outlet } from 'react-router-dom';
import { AppContext } from '../Context/AppContext.jsx';

const Layout = () => {
    const [activeindex, setActiveIndex] = React.useState(0);
    const { isLogin, setLogin } = useContext(AppContext);
    


    const sidebarLinks = [
        { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
        { name: "Products", path: "/products", icon: <InventoryIcon /> },
        { name: "Seller", path: "/seller", icon: <ContactsIcon /> },
        { name: "Category", path: "/category", icon: <CategoryIcon /> },
        { name: "Billing", path: "/billing", icon: <AccountBalanceWalletIcon /> },
        { name: "Users", path: "/users", icon: <PeopleAltIcon /> }
    ];

    return (
        <>
        {isLogin ?  (<div className='h-100hv'>
                <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                    <Link to="/" className="text-xl font-bold text-gray-700">
                        <h1>Inventory Management System</h1>
                    </Link>
                    <div className="flex items-center gap-5 text-gray-500">
                        <p>Hi! Admin</p>
                        <button onClick={() => setLogin(false)} className="border rounded-full text-sm px-4 py-1">Logout</button>
                       
                    </div>
                </div>
                <div className='flex'>
                <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                    {sidebarLinks.map((item, index) => (
                        <Link to={item.path} key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center py-3 px-4 gap-3
                            ${activeindex === index ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                    : "hover:bg-gray-100/90 border-white text-gray-700"
                                }`
                            }
                        >
                            {item.icon}
                            <p className="md:block hidden text-center">{item.name}</p>
                        </Link>
                    ))}
                </div>
                <div>
                    <Outlet />
                </div>
                </div>

            
            </div>) : (<><div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                    <Link to="/" className="text-xl font-bold text-gray-700">
                        <h1>Inventory Management System</h1>
                    </Link>
                    <div className="flex items-center gap-5 text-gray-500">
                        {isLogin ? (
                            <button onClick={() => setLogin(false)} className=" border rounded-full text-sm px-4 py-1">Logout</button>
                        ) : (
                            <Link to="/login" className="border rounded-full text-sm px-4 py-1">Login</Link>
                        )}
                       
                    </div> 
                </div>
                <h2 className='text-2xl text-center mt-10' >Please Login</h2></>
            )}
    
        </>
    );
};



export default Layout