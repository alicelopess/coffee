import { Trash } from "@phosphor-icons/react";
import { Counter } from "../../Counter";
import { IconButton } from "../../buttons/IconButton";
import { ItemMeasure, ItemDescription, ItemPrice, CartItemActions, CartItemContent, CartItemInformation, Wrapper, CartItemImageWrapper } from "./style";

export function CartItem() {
    return (
        <Wrapper>
            <CartItemImageWrapper>
                <img src="#" alt="#" />
            </CartItemImageWrapper>
            <CartItemContent>
                <CartItemInformation>
                <ItemDescription>
                    <span>Irlandês</span>
                    <ItemMeasure>227ml</ItemMeasure>
                </ItemDescription>
                <ItemPrice>
                    R$
                    <span>9,90</span>
                </ItemPrice>
                </CartItemInformation>
                <CartItemActions>
                    <Counter>1</Counter>
                    <IconButton onClick={() => console.log('Remove Item!')}>
                        <Trash size={20}/>
                    </IconButton>
                </CartItemActions>
            </CartItemContent>

        </Wrapper>
    )
}