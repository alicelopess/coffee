import styled, { css } from "styled-components";
import { CardInfoProps } from "./types";

export const Wrapper = styled.div<{alignOptions:CardInfoProps['alignOptions']}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;

    ${({alignOptions}) => {
        if (alignOptions === 'left') {
            return css`
                align-items: flex-start;
            `
        }
    }}
`
export const Title = styled.span<{titleOptions:CardInfoProps['titleOptions']}>`
    font-family: "Baloo 2", sans-serif;
    font-size: .875rem;
    font-weight: 700;
    color: var(--gray-800);

    ${({titleOptions}) => {
        if (titleOptions === 'title-sm') {
            return css`
                font-size: 1rem;
            `
        }
    }}

    /* @media only screen and (min-width: 640px) {
        font-size: var(--title-md);
    } */
`
export const Description = styled.span<{alignOptions:CardInfoProps['alignOptions']}>`
    font-family: "Roboto", sans-serif;
    font-size: .625rem;
    font-weight: 400;
    color: var(--gray-600);
    text-align: center;

    ${({alignOptions}) => {
        if (alignOptions === 'left') {
            return css`
                text-align: left;

                /* @media only screen and (min-width: 640px) {
                    font-size: var(--text-sm);
                } */
            `
        }
    }}
`