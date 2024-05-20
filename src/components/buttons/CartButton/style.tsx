import styled from "styled-components"

export const Wrapper = styled.button`
    border: none;
    padding: .5rem;
    border-radius: .375rem;

    position: relative;
    background-color: transparent;
    cursor: pointer;
`
export const CartQuantityContainer = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 1000rem;
    
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(-50%);

    background-color: var(--purple);
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--white);
    font-family: "Roboto", sans-serif;
    font-size: .75rem;
    font-weight: 400;
`