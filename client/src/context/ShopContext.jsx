import { createContext, useContext } from 'react'
import { products } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {
    const navigate = useNavigate()

    const currency = "$"

    const value = {currency,products,navigate}
    return  <ShopContext.Provider value={value}>
         {children}
     </ShopContext.Provider>
}

export const useShopContext = () => {
    return useContext(ShopContext)
}
