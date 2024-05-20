import styled, { css } from "styled-components";
import { CardInfoProps } from "./types";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
`
export const Title = styled.span<{variant:CardInfoProps['variant']}>`
    font-family: "Baloo 2", sans-serif;
    font-size: .875rem;
    font-weight: 700;
    color: var(--gray-800);

    ${({variant}) => {
        if (variant === 'title-sm') {
            return css`
                font-size: 1rem;
            `
        }
    }}
`
export const Description = styled.span`
    font-family: "Roboto", sans-serif;
    font-size: .625rem;
    font-weight: 400;
    color: var(--gray-600);

    text-align: center;
`