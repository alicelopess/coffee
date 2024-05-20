import styled, { css }  from "styled-components";
import { IconButtonProps } from "./types";

export const Wrapper = styled.button<{variant:IconButtonProps['variant']}>`
    border: none;
    padding: .5rem;
    border-radius: .375rem;

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
        if(variant === 'ghost') {
            return css `
                background-color: transparent;
                color: var(--purple);

                &:hover,
                &:focus {
                    background-color: var(--gray-300);
                    color: var(--purple-dark);
                }
            `
        }
    }}
`