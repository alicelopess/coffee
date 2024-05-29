import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from "@phosphor-icons/react"
import { Button } from "../../components/buttons/Button"
import { Footer, FooterDescription, FooterPriceWrapper, Main, Header, HeaderTitle, Wrapper } from "./style"
import { CartCard } from "../../components/cards/CartCard"
import { getCartItems, removeItemFromCart } from '../../services/requests'
import { useEffect, useState } from 'react'
import { CoffeeInCart } from '../../services/requests/types'

function Cart() {
    const navigate = useNavigate();

    function handleClickBack() {
        navigate(-1);
    }
    function handleClickCheckout() {
        navigate('/checkout-success');
    }

    const [cartContent, setCartContent] = useState<CoffeeInCart[]>([])

    async function getCartContent() {
        const cartContent = await getCartItems()
        setCartContent(cartContent)
        console.log(cartContent)
    }

    useEffect(() => {
        getCartContent()
    }, [cartContent.length])


    return (
        <Wrapper>
            <Header>
                <ArrowLeft onClick={handleClickBack} size={24} color="#272221" />
                <HeaderTitle>Carrinho</HeaderTitle>
            </Header>
            <Main>
                {
                    cartContent.map(item => {
                        return (
                            <CartCard 
                                id={item.id}
                                title={item.name}
                                size={227}
                                imageUrl={item.url}
                                quantity={item.quantity}
                                amount={item.amount}
                                //handleRemoveItemFromCart={async () => await removeItemFromCart(item.id)}
                            />
                        )
                    })
                }
            </Main>
            <Footer>
                <FooterDescription>
                    <span>Valor total</span>
                    <FooterPriceWrapper>
                        R$ <span>9.90</span>
                    </FooterPriceWrapper>
                </FooterDescription>
                <Button onClick={handleClickCheckout} variant="yellow">CONFIRMAR PEDIDO</Button>
            </Footer>
        </Wrapper>
    )
}

export default Cart