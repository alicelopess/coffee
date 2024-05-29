import { useCart } from '../../hooks/useCart'

import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from "@phosphor-icons/react"
import { Button } from "../../components/buttons/Button"
import { Footer, FooterDescription, FooterPriceWrapper, Main, Header, HeaderTitle, Wrapper } from "./style"
import { CartCard } from "../../components/cards/CartCard"
import { CoffeeInCart } from '../../services/requests/types'
// import { useEffect } from 'react'
// import { getCartItems, removeItemFromCart } from '../../services/requests'
// import { useEffect, useState } from 'react'
// import { CoffeeInCart } from '../../services/requests/types'

function Cart() {
    const navigate = useNavigate();
    const { removeCoffeeFromCart, cartContent, handleCartAmount, updateCoffeeQuantityInCart, clearPurchasedCart } = useCart()
    console.log(cartContent)

    function handleClickBack() {
        navigate(-1);
    }
    function handleClickCheckout() {
        navigate('/checkout-success');
    }

    function handleIncrementCartItemQuantity(item: CoffeeInCart) {
        const incrementParams = {
            itemId: item.id,
            quantity: (item.quantity + 1)
        }

        updateCoffeeQuantityInCart(incrementParams)
    }

    function handleDecrementCartItemQuantity(item: CoffeeInCart) {
        const decrementParams = {
            itemId: item.id,
            quantity: (item.quantity - 1)
        }

        updateCoffeeQuantityInCart(decrementParams)
    }

    return (
        <Wrapper>
            <Header>
                <ArrowLeft onClick={handleClickBack} size={24} color="#272221" />
                <HeaderTitle>Carrinho</HeaderTitle>
            </Header>
            <Main>
                {
                    cartContent.length === 0 
                    ?
                        // console.log('Carrinho Vazio!')
                        <span
                            style={{   
                                    fontFamily: "'Baloo 2', sans-serif", 
                                    fontSize: "24px", 
                                    fontWeight: "700",
                                    color: "var(--yellow-dark)",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                        >Oops.. Seu carrinho está vazio!</span>
                    :
                        cartContent.map(item => {
                            return (
                                <CartCard 
                                    key={item.id}
                                    id={item.id}
                                    title={item.name}
                                    size={227}
                                    imageUrl={item.url}
                                    quantity={item.quantity}
                                    amount={item.amount}
                                    handleRemoveItemFromCart={() => {removeCoffeeFromCart(item.id)}}
                                    handleIncrementItemOnCart={() => {handleIncrementCartItemQuantity(item)}}
                                    handleDecrementItemOnCart={() => {handleDecrementCartItemQuantity(item)}}
                                />
                            )
                        })
                }
            </Main>
            <>
                {
                    cartContent.length != 0 
                    &&
                        <Footer>
                            <FooterDescription>
                                <span>Valor total</span>
                                <FooterPriceWrapper>
                                    R$ 
                                    <span>
                                        {
                                            handleCartAmount()
                                        }
                                    </span>
                                </FooterPriceWrapper>
                            </FooterDescription>
                            <Button onClick={() => {handleClickCheckout(); clearPurchasedCart()}} variant="yellow">CONFIRMAR PEDIDO</Button>
                        </Footer>
                }
            </>
        </Wrapper>
    )
}

export default Cart