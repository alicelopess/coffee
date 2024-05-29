import { ReactNode, createContext, useState } from "react"

import { createCartItem, finishPurchase, getCartItems, removeItemFromCart, updateCartItemQuantity } from "../services/requests"
import { CoffeeInCart } from "../services/requests/types"

export const CartContext = createContext({})

export function CartProvider({ children }:{children:ReactNode}) {
    
    //TODO: Setar o estado do conteúdo do carrinho
    //const [cartContent, setCartContent] = useState(cartContentData)
    const [cartContent, setCartContent] = useState<CoffeeInCart[]>([])

    async function getCartContent() {
        const requestData = await getCartItems()
        setCartContent(requestData)
    }
   

    const addCoffeeToCart = async (newCoffee:CoffeeInCart) => {
        await createCartItem(newCoffee)
        getCartContent()
    }

    const removeCoffeeFromCart = async (cartItemId:string) => {
        //TODO: Verificar a existência do produto no carrinho
        //Caso não exista => erro
        //Caso exista => enviar requisição para remover
        await removeItemFromCart(cartItemId)
        getCartContent()

        //TODO: Atualizar estado do carrinho
        setCartContent(cartContent.filter(cartItem => cartItem.id != cartItemId))
    }

    const updateCoffeeQuantityInCart = async (params:{itemId:string, quantity:number}) => {
        //TODO: Verificar a existência do produto no carrinho
        //Caso não exista => erro
        //Caso exista => enviar requisição do tipo patch passando os parâmetros dessa função
        
        params.quantity === 0 
        ?
            removeCoffeeFromCart(params.itemId)
        :
            await updateCartItemQuantity({
                id: params.itemId,
                quantity: params.quantity,
            })
        
        //TODO: Atualizar estado do carrinho    
        getCartContent()
    }
    
    const clearPurchasedCart = async () => {
        await finishPurchase()
        getCartContent()
    }

    function handleCartAmount() {
        
        const amount = cartContent.reduce((accumulator, item) => {
            return accumulator += item.amount
        }, 0)

        return amount
    }


    return (
        <CartContext.Provider value={{cartContent, removeCoffeeFromCart, addCoffeeToCart, handleCartAmount, updateCoffeeQuantityInCart, clearPurchasedCart}}>
            {children}
        </CartContext.Provider>
    )
}