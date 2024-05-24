import styled, { css }  from "styled-components";

export const Wrapper = styled.button<{variant:'default'|'purple'|'yellow'|'ghost'}>`
    width: 100%;
    border: none;
    padding: .75rem 1rem;
    border-radius: .375rem;

    font-family: "Roboto", sans-serif;
    font-size: .875rem;
    line-height: 160%;
    font-weight: 700;

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
    }}
`