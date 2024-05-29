import { Wrapper, Image } from "./style";
import { CardImageProps } from "./types";

export function CardImage({imageSize, cardOrientation, src, alt}:CardImageProps) {
    return (
        <Wrapper imageSize={imageSize} cardOrientation={cardOrientation}>
            <Image src={src} alt={alt} />
        </Wrapper>
    )
} 