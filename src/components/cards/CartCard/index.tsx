import { Trash } from "@phosphor-icons/react";
import { Counter } from "../../Counter";
import { IconButton } from "../../buttons/IconButton";
import { ItemMeasure, ItemDescription, ItemPrice, CartItemActions, CartItemContent, CartItemInformation, Wrapper, CartItemImageWrapper } from "./style";
import { CartCardProps } from "./types";
import { useNavigate } from "react-router-dom";

export function CartCard({
    id,
    title,
    size,
    imageUrl,
    quantity,
    amount,
    handleIncrementItemOnCart,
    handleDecrementItemOnCart,
    handleRemoveItemFromCart,
}:  CartCardProps) {
    
    const navigate = useNavigate()
    const handleClickOnCard = () => navigate(`/product/${id}`)

    return (
        <Wrapper>
            <CartItemImageWrapper onClick={handleClickOnCard}>
                <img src={imageUrl} />
            </CartItemImageWrapper>
            <CartItemContent>
                <CartItemInformation>
                <ItemDescription>
                    <span>{title}</span>
                    <ItemMeasure>{size}ml</ItemMeasure>
                </ItemDescription>
                <ItemPrice>
                    R$
                    <span>{amount}</span>
                </ItemPrice>
                </CartItemInformation>
                <CartItemActions>
                    <Counter 
                        handleIncrement={handleIncrementItemOnCart} 
                        handleDecrement={handleDecrementItemOnCart} 
                        variant="outlined" 
                    >{quantity}</Counter>
                    <IconButton onClick={handleRemoveItemFromCart}>
                        <Trash size={20}/>
                    </IconButton>
                </CartItemActions>
            </CartItemContent>

        </Wrapper>
    )
}