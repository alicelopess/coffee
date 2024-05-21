import { Description, Title, Wrapper } from "./style";
import { CardInfoProps } from "./types";

export function CardInfo({title, description, titleOptions, alignOptions}: CardInfoProps) {
    return (
        <Wrapper alignOptions={alignOptions}>
            <Title titleOptions={titleOptions}>{title}</Title>
            <Description alignOptions={alignOptions}>{description}</Description>
        </Wrapper>
    )
}