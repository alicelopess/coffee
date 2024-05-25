import { useNavigate } from "react-router-dom"
import { Tag } from "../../Tag";
import { CardImage } from "../CardImage";
import { CardInfo } from "../CardInfo";
import { CardPrice } from "../CardPrice";
import { Wrapper } from "./style";
import { PrimaryCardProps } from "./types";

export function ProductCard({price, cardOption}:PrimaryCardProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/product");
    }

    return (
        <Wrapper onClick={handleClick} cardOption={cardOption}>
            { cardOption === 'primary' || cardOption === undefined 
                ? 
                    <>
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
                    </>
                : 
                    <>
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
                    </>
            }
        </Wrapper>
    )
}