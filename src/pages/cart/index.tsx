import { ArrowLeft } from "@phosphor-icons/react"
import { Button } from "../../components/buttons/Button"
import { Footer, FooterDescription, FooterPriceWrapper, Main, Header, HeaderTitle, Wrapper } from "./style"
import { CartCard } from "../../components/cards/CartCard"

function Cart() {
    return (
        <Wrapper>
            <Header>
                <ArrowLeft size={24} color="#272221" />
                <HeaderTitle>Carrinho</HeaderTitle>
            </Header>
            <Main>
                <CartCard />
                <CartCard />
                <CartCard />
            </Main>
            <Footer>
                <FooterDescription>
                    <span>Valor total</span>
                    <FooterPriceWrapper>
                        R$ <span>9.90</span>
                    </FooterPriceWrapper>
                </FooterDescription>
                <Button onClick={() => {console.log('Compra realizada!')}} variant="yellow">CONFIRMAR PEDIDO</Button>
            </Footer>
        </Wrapper>
    )
}

export default Cart