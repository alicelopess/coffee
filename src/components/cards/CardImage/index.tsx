import { Wrapper, Image } from "./style";
import { CardImageProps } from "./types";

export function CardImage({variant}:CardImageProps) {
    return (
        <Wrapper variant={variant}>
            <Image src="#" alt="#" />
        </Wrapper>
    )
} 