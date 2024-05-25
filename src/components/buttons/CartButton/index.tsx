import { useNavigate } from 'react-router-dom'
import { Wrapper, CartQuantityContainer } from "./style";
import { ShoppingCart } from "@phosphor-icons/react";
import { CartButtonProps } from "./types";


export function CartButton({quantity}:CartButtonProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/cart");
    }

    return (
        <Wrapper onClick={handleClick}>
            <ShoppingCart 
                size={20} 
                weight="fill" 
                color={ quantity >= 1 
                    ?
                        "#8047F8"
                    :
                        "#C47F17"
                }
            />
            {quantity >= 1 
                &&
                    <CartQuantityContainer>
                        <span>
                            {quantity}
                        </span>
                    </CartQuantityContainer>
            }
            
        </Wrapper>
    )
}