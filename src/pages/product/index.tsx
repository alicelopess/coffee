import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from "@phosphor-icons/react"
import { Footer, FooterActionWrapper, FooterSelectionOptions, FooterSelectionWrapper, Main, Navigation, ProductImage, ProductInformation, ProductInformationHeader, ProductPrice, ProductTitle, Wrapper } from "./style"
import { CartButton } from "../../components/buttons/CartButton"
import { Tag } from "../../components/Tag"
import { Counter } from "../../components/Counter"
import { Button } from "../../components/buttons/Button"

function Product() {
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }

    return (
        <Wrapper>
            <Navigation>
                <ArrowLeft onClick={handleClick} size={24}/>
                <CartButton quantity={3} />
            </Navigation>
            <Main>
                <ProductInformation>
                    <ProductInformationHeader>
                        <ProductTitle>
                            <Tag background="product">ESPECIAL</Tag>
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
                    <FooterSelectionOptions>
                        <Button onClick={() => console.log('Select')} background="gray" type="select">114ml</Button>
                        <Button onClick={() => console.log('Select')} background="gray" type="select">140ml</Button>
                        <Button onClick={() => console.log('Select')} background="gray" type="select">227ml</Button>
                    </FooterSelectionOptions>
                </FooterSelectionWrapper>
                <FooterActionWrapper>
                    <Counter>1</Counter>
                    <Button 
                        background="purple" 
                        onClick={() => console.log('Adicionado ao carrinho!')}
                    >ADICIONAR</Button>
                </FooterActionWrapper>
            </Footer>
        </Wrapper>
    )
}

export default Product