import styled from "styled-components";
import { CardImageProps } from "./types";

export const Wrapper = styled.div<{variant:CardImageProps['variant']}>`
    width: 4rem;
    height: 4rem;

    border: 1px solid black;

    position: absolute;
    top: 0;
    left: 50%;

    transform: translateX(-50%) translateY(-9.9px);
`
export const Image = styled.img`
    width: 100%;
`
