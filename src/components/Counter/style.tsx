import styled, { css } from "styled-components";
import { CounterProps } from "./types";

export const Wrapper = styled.div<{variant:CounterProps['variant']}>`
    display: flex;
    align-items: center;
    gap: .25rem;

    ${({variant}) => {
        if (variant === 'outlined') {
            return css`
                border: 1px solid var(--gray-400);
                border-radius: 6px;
            `
        }
    }}
`

export const CounterText = styled.span`
    color: var(--gray-900);
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: regular;
`