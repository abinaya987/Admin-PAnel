import { createContext, useState } from "react"
// Rename import to avoid naming conflict with state
// Rename import to avoid naming conflict with state
// Rename import to avoid naming conflict with state
import { Products as InitialProducts, sellers as InitialSellers, users as InitialUsers, categorys as InitialCategories } from "../assets/Assets"
import { useNavigate } from "react-router-dom"

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();

    // Default true for development so Dashboard/Products show without login
    const [isLogin, setLogin] = useState(false);
    // Initialize products from asset file
    const [products, setProducts] = useState(InitialProducts);
    const [sellers, setSellers] = useState(InitialSellers);
    const [users, setUsers] = useState(InitialUsers);
    const [categorys, setCategories] = useState(InitialCategories);

    const handleLogin = () => {
        navigate("/login");
    }
    const validateLogin = (username, password) => {
        if (username === "admin" && password === "admin123") {
            setLogin(true);
            navigate("/");
            return true;
        } else {
            return false;
        }
    }

    const addProduct = (product) => {
        setProducts([...products, product]);
    }

    const addSeller = (seller) => {
        setSellers([...sellers, seller]);
    }

    const sharedState = {
        products, sellers, users, categorys, isLogin, setLogin, handleLogin, validateLogin, addProduct, addSeller
    };

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    )
}
