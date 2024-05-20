import styled, { css } from "styled-components";
import { TagProps } from "./types";

export const Wrapper = styled.div<{variant:TagProps['variant']}> `
    /* min-width: ; */
    padding: .375rem .75rem;
    border: 1px solid var(--purple);
    border-radius: 100rem;
    
    color: var(--purple-dark);
    font-size: .625rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;

    cursor: pointer;
    
    ${({variant}) => {
        if (variant === 'selected') {
            return css`
                background-color: var(--purple);
                color: var(--white);
            `
        }
    }}

`