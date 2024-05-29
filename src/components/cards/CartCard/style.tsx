import styled from "styled-components";

export const Wrapper = styled.div `
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray-900);

    border-bottom:  1px solid var(--gray-300);
`
export const CartItemImageWrapper = styled.div `
    width: 64px;
    height: 64px;

    img {
        width: 100%;
    }
`
export const CartItemContent = styled.div `
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
`
export const CartItemInformation = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
`
export const ItemDescription = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`
export const ItemMeasure = styled.div `
    font-size: 14px;
    color: var(--gray-600);
`
export const ItemPrice = styled.div `
    font-family: "Baloo 2", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray-900);
`
export const CartItemActions = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;
`