import { Wrapper, CartQuantityContainer } from "./style";
import { ShoppingCart } from "@phosphor-icons/react";


export function CartButton({quantity}:{quantity:number}) {
    return (
        <Wrapper>
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