

// Components
import { Tag } from "../../Tag";
import { CardImage } from "../CardImage";
import { CardInfo } from "../CardInfo";
import { CardPrice } from "../CardPrice";
import { Wrapper } from "./style";

// Types
import { ProductCardProps } from "./types";

export function ProductCard({title, handleClick, description, price, cardOption, imageUrl}:ProductCardProps) {

    return (
        <Wrapper onClick={handleClick} cardOption={cardOption}>
            { cardOption === 'primary' || cardOption === undefined 
                ? 
                    <>
                    <CardImage src={imageUrl}/>
                    <Tag>Especial</Tag>
                    <CardInfo 
                        title={title}
                        description={description}
                    />
                    <span>
                        R$
                        <CardPrice>{price}</CardPrice>
                    </span>
                    </>
                : 
                    <>
                    <CardImage imageSize="image-md" cardOrientation="horizontal" src={imageUrl}/>
                    <CardInfo 
                        titleOptions="title-sm" 
                        alignOptions="left"
                        title={title}
                        description={description}
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