import { Price } from "./style";
import { CardPriceProps } from "./types";

export function CardPrice({children}:CardPriceProps) {
    return (
        <Price>{children}</Price>
    )
}