import { Tag } from "../../Tag";
import { CardImage } from "../CardImage";
import { CardInfo } from "../CardInfo";
import { CardPrice, Wrapper } from "./style";
import { PrimaryCardProps } from "./types";

export function PrimaryCard({price}:PrimaryCardProps) {
    return (
        <Wrapper>
            <CardImage />
            <Tag>Especial</Tag>
            <CardInfo 
                title="Irlandês"
                description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            />
            <span>
                R$
                <CardPrice>{price}</CardPrice>
            </span>
        </Wrapper>
    )
}