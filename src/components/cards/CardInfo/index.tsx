import { Description, Title, Wrapper } from "./style";
import { CardInfoProps } from "./types";

export function CardInfo({title, description, variant}: CardInfoProps) {
    return (
        <Wrapper>
            <Title variant={variant}>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    )
}