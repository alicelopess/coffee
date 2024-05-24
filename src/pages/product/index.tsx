import { ArrowLeft } from "@phosphor-icons/react"
import { Footer, FooterActionWrapper, FooterSelectionWrapper, Main, Navigation, ProductImage, ProductInformation, ProductInformationHeader, ProductPrice, ProductTitle, Wrapper } from "./style"
import { CartButton } from "../../components/buttons/CartButton"
import { Tag } from "../../components/Tag"
import { Counter } from "../../components/Counter"
import { Button } from "../../components/buttons/Button"

function Product() {
    return (
        <Wrapper>
            <Navigation>
                <ArrowLeft size={24}/>
                <CartButton quantity={3} />
            </Navigation>
            <Main>
                <ProductInformation>
                    <ProductInformationHeader>
                        <ProductTitle>
                            <Tag>ESPECIAL</Tag>
                            <span>Irlandês</span>
                        </ProductTitle>
                        
                        <span>R$ 
                            <ProductPrice>9,90</ProductPrice>
                        </span>
                    </ProductInformationHeader>

                    <span>Bebida a base de café, uísque irlandês, açúcar e chantilly</span>
                </ProductInformation>
                <ProductImage>
                    <img src="#" alt="#" />
                </ProductImage>
            </Main>
            <Footer>
                <FooterSelectionWrapper>
                    <span>Selecione o tamanho:</span>
                    <div>botão botão botão</div>
                </FooterSelectionWrapper>
                <FooterActionWrapper>
                    <Counter>1</Counter>
                    <Button 
                        variant="purple" 
                        onClick={() => console.log('Adicionado ao carrinho!')}
                    >ADICIONAR</Button>
                </FooterActionWrapper>
            </Footer>
        </Wrapper>
    )
}

export default Product