import { Wrapper, Image } from "./style";
import { CardImageProps } from "./types";

export function CardImage({imageSize, cardOrientation}:CardImageProps) {
    return (
        <Wrapper imageSize={imageSize} cardOrientation={cardOrientation}>
            <Image src="#" alt="#" />
        </Wrapper>
    )
} 