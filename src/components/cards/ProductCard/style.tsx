import styled, { css } from "styled-components";
import { PrimaryCardProps } from "./types";

export const Wrapper = styled.div<{cardOption:PrimaryCardProps['cardOption']}>`
    background-color: var(--gray-200);
    max-width: 166.4px;
    
    padding: 4.5rem .75rem 1rem;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;
    
    border: 1px solid var(--gray-300);
    border-radius: 4.8px 28.8px 4.8px 28.8px;
    box-shadow: 0 2px 8px 0 rgb(0, 0, 0 / 5%);

    font-family: "Roboto", sans-serif;
    font-size: .625rem;
    font-weight: 400;
    color: var(--yellow-dark);

    ${({cardOption}) => {
        if (cardOption === 'secondary') {
            return css`
                max-width: 311px;
    
                padding: 1rem 1rem 1rem 7.25rem;

                align-items: flex-start;
                gap: .5rem;
                
                border-radius: 6px 36px 6px 36px;
                box-shadow: 0 2px 8px 0 rgb(0, 0, 0 / 4%);
            `
        }
    }}
`