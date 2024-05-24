import styled from "styled-components";

export const Wrapper = styled.div `
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;

    background-color: var(--gray-100);

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray-800);
`
export const Header = styled.header `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    padding: 26px 32px;
`

export const HeaderTitle = styled.span `
    font-family: "Baloo 2", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray-800);

    justify-self: center;
`
export const Main = styled.footer `
    background-color: var(--gray-100);
    border-top:  1px solid var(--gray-300);
`
export const Footer = styled.footer `
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 28px 32px 40px;

    box-shadow: 0 -2 16 0 rgb(0 0 0 / 8%);
`
export const FooterDescription = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const FooterPriceWrapper = styled.span `
    font-family: "Baloo 2", sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-800);
`
