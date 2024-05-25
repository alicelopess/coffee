import styled, { css }  from "styled-components";
import { ButtonProps } from "./types";

export const Wrapper = styled.button<{variant:ButtonProps['variant'], background:ButtonProps['background'], type:ButtonProps['type']}>`
    width: 100%;
    border: none;
    padding: .75rem 1rem;
    border-radius: .375rem;

    font-family: "Roboto", sans-serif;
    font-size: .875rem;

    cursor: pointer;

    ${({variant}) => {
        if(variant === 'default') {
            return css `
                background-color: var(--gray-400);
                color: var(--purple-dark);

                &:hover,
                &:focus {
                    background-color: var(--gray-300);
                    color: var(--purple);
                }
            `

        }
        if(variant === 'purple') {
            return css `
                background-color: var(--purple-dark);
                color: var(--white);

                &:hover,
                &:focus {
                    background-color: var(--purple);
                }
            `

        }
        if(variant === 'yellow') {
            return css `
                background-color: var(--yellow-dark);
                color: var(--white);

                &:hover,
                &:focus {
                    background-color: var(--yellow);
                }
            `
        }
        if(variant === 'ghost') {
            return css `
                background-color: transparent;
                color: var(--purple);

                &:hover,
                &:focus {
                    color: var(--purple-light);
                }
            `
        }
        if(variant === 'outlined') {
            return css `
                background-color: transparent;
                border: 1px solid var(--purple);
                color: var(--purple);
            `
        }
    }}

    ${({background}) => {
        if(background === 'purple') {
            return css `
                background-color: var(--purple-dark);
                color: var(--white);

                &:hover,
                &:focus {
                    background-color: var(--purple);
                    color: var(--white);
                }
            `

        }
        if(background === 'yellow') {
            return css `
                background-color: var(--yellow-dark);
                color: var(--white);

                &:hover,
                &:focus {
                    background-color: var(--yellow);
                }
            `
        }
        if(background === 'gray') {
            return css `
                background-color: var(--gray-400);
                color: var(--gray-700);

                &:hover,
                &:focus {
                    background-color: transparent;
                    border: 1px solid var(--purple);
                    color: var(--purple);
                }
            `

        }
    }}
    ${({type}) => {
        if(type === 'button') {
            return css `
                line-height: 160%;
                font-weight: 700;
            `

        }
        if(type === 'select') {
            return css `
                line-height: 130%;
                font-weight: 400;

                &:hover,
                &:focus {
                    font-weight: 700;
                }
            `

        }
    }}
`