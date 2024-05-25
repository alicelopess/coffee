import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/buttons/Button';
import { Content, ContentTitle, ImageWrapper, Wrapper } from './style';

function CheckoutFinished() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <Wrapper>
            <ImageWrapper>
                <img src="src/assets/checkout-finished.svg" alt="#" />
            </ImageWrapper>
            <Content>
                <ContentTitle>Uhu! Pedido confirmado</ContentTitle>
                <span>Agora é só aguardar que logo o café chegará até você!</span>
            </Content>
            <Button onClick={handleClick} background='purple'>IR PARA A HOME</Button>
        </Wrapper>
    )
}

export default CheckoutFinished