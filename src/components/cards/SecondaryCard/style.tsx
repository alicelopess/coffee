import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--gray-200);
    max-width: 311px;
    
    padding: 1rem 1rem 1rem 7.25rem;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    
    border: 1px solid var(--gray-300);
    border-radius: 6px 36px 6px 36px;
    box-shadow: 0 2px 8px 0 rgb(0, 0, 0 / 4%);

    font-family: "Roboto", sans-serif;
    font-size: .625rem;
    font-weight: 400;
    color: var(--yellow-dark);
`