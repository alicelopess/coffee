import { CardImage } from "../CardImage";
import { CardInfo } from "../CardInfo";
import { CardPrice } from "../CardPrice";
import { Wrapper } from "./style";
import { SecondaryCardProps } from "./types";

export function SecondaryCard({price}:SecondaryCardProps) {
    return (
        <Wrapper>
            <CardImage imageSize="image-md" cardOrientation="horizontal"/>
            <CardInfo 
                titleOptions="title-sm" 
                alignOptions="left"
                title="Expresso Tradicional"
                description="O tradicional café feito com água quente e grãos moídos"
            />
            <span>
                R$
                <CardPrice>{price}</CardPrice>
            </span>
        </Wrapper>
    )
}