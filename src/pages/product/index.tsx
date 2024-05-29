import { useCart } from '../../hooks/useCart' 

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOneCoffee } from '../../services/requests'

import { useNavigate } from 'react-router-dom'

import { ArrowLeft } from "@phosphor-icons/react"
import { Footer, FooterActionWrapper, FooterSelectionOptions, FooterSelectionWrapper, Main, Navigation, ProductImage, ProductInformation, ProductInformationHeader, ProductPrice, ProductTitle, Wrapper } from "./style"
import { CartButton } from "../../components/buttons/CartButton"
import { Tag } from "../../components/Tag"
import { Counter } from "../../components/Counter"
import { Button } from "../../components/buttons/Button"
import { Coffee } from '../../services/requests/types'

function Product() {
    const { id: coffeeId } = useParams()
    const navigate = useNavigate();

    const { cartContent, addCoffeeToCart } = useCart()

    const [coffee, setCoffee] = useState<Coffee>()
    console.log(coffee)
    
    const getCoffeeData = async (id:string) => {
        const coffeeData = await getOneCoffee(id)
        setCoffee(coffeeData)
    }

    function navigateGoBack() {
        navigate(-1);
    }

    function navigateToCart() {
        navigate("/cart");
    }

    const [coffeeQuantityOutsideCart, setCoffeeQuantityOutsideCart] = useState(1)

    const incrementCoffeeQuantityOutsideCartState = () => {
        setCoffeeQuantityOutsideCart(coffeeQuantityOutsideCart + 1)
    }
    const decrementCoffeeQuantityOutsideCartState = () => {
        if(coffeeQuantityOutsideCart > 1) {
            setCoffeeQuantityOutsideCart(coffeeQuantityOutsideCart - 1)
        }
    }

    useEffect(() => {
        // if (coffeeId) getOneCoffee(coffeeId)
        if (coffeeId) getCoffeeData(coffeeId)
    }, [coffeeId])

    return (
        <Wrapper>
            <Navigation>
                <ArrowLeft onClick={navigateGoBack} size={24}/>
                <CartButton handleClick={() => {navigateToCart()}} quantity={cartContent.length} />
            </Navigation>
            <Main>
                <ProductInformation>
                    <ProductInformationHeader>
                        <ProductTitle>
                            <Tag background="product">ESPECIAL</Tag>
                            <span>{coffee?.name}</span>
                        </ProductTitle>
                        
                        <span>R$ 
                            <ProductPrice>{coffee?.price}</ProductPrice>
                        </span>
                    </ProductInformationHeader>

                    <span>{coffee?.description}</span>
                </ProductInformation>
                <ProductImage>
                    <img style={{top: 0, transform: "translateY(-50%)", zIndex: 1000}} width="64px" height="137px" src="/assets/coffee-smoke.svg" />
                    <img style={{bottom: 0}} src="/assets/product-page-coffee.svg" />
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
                    <Counter 
                        handleDecrement={decrementCoffeeQuantityOutsideCartState} 
                        handleIncrement={incrementCoffeeQuantityOutsideCartState}
                    >{coffeeQuantityOutsideCart}</Counter>
                    <Button 
                        background="purple" 
                        // onClick={() => console.log('Adicionado ao carrinho!')}
                        onClick={() => {
                            addCoffeeToCart({
                                name: coffee?.name,
                                description: coffee?.description,
                                price: coffee?.price,
                                type: coffee?.type,
                                url: coffee?.url,
                                coffeeId: coffee?.id,
                                quantity: coffeeQuantityOutsideCart,
                                amount: (coffeeQuantityOutsideCart * coffee?.price),
                                coffeeSize: 227,
                            })
                        }}
                    >ADICIONAR</Button>
                </FooterActionWrapper>
            </Footer>
        </Wrapper>
    )
}

export default Product