import { ReactNode, createContext } from "react"
// import { CoffeeInCart } from "../services/requests/types"

export const CartContext = createContext(null)

export function CartProvider({ children }:{children:ReactNode}) {
    return (
        <CartContext.Provider value={null}>
            {children}
        </CartContext.Provider>
    )
}