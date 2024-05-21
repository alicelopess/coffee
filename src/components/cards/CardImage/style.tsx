import styled, { css } from "styled-components";
import { CardImageProps } from "./types";

export const Wrapper = styled.div<{imageSize:CardImageProps['imageSize'], cardOrientation:CardImageProps['cardOrientation']}>`
    width: 4rem;
    height: 4rem;

    border: 1px solid yellow;

    position: absolute;
    top: 0;
    left: 50%;

    transform: translateX(-50%) translateY(-9.9px);

    ${({imageSize}) => {
        if (imageSize === 'image-sm') {
            return css`
                width: 4rem;
                height: 4rem;
            `
        }
        if (imageSize === 'image-md') {
            return css`
                width: 6rem;
                height: 6rem;
            `
        }
        if (imageSize === 'image-lg') {
            return css`
                width: 7.5rem;
                height: 7.5rem;
            `
        }
    }}

    ${({cardOrientation}) => {
        if (cardOrientation === 'horizontal') {
            return css`
                position: absolute;
                top: 0;
                left: 0;

                transform: translateX(8px) translateY(-16px);
            `
        }
    }}
`
export const Image = styled.img`
    width: 100%;
`
