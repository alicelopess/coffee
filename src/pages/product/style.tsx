import styled from "styled-components";

export const Wrapper = styled.div `
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;

`
export const Navigation = styled.nav `
    padding: 20px 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--gray-900);

    color: var(--white);
`
export const Main = styled.main `
    position: relative;
    padding: .5rem 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--gray-900);

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray-500);
`
export const ProductInformation = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
`
export const ProductInformationHeader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    color: var(--yellow);
`
export const ProductTitle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    
    font-family: "Baloo 2", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--white);
`
export const ProductPrice = styled.span `
    font-family: "Baloo 2", sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--yellow);
`
export const ProductImage = styled.div `
    /* border: 1px solid violet; */
    
    width: 320px;
    height: 276px;

    position: absolute;
    bottom: 0;
    transform: translateY(20%);
    
    img {
        position: absolute;
        width: 100%;
    }
`

export const Footer = styled.footer `
    min-height: 222px;
    padding: 56px 2rem 2rem;

    background-color: var(--gray-100);

    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--gray-600);

    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const FooterSelectionWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
export const FooterSelectionOptions = styled.div`
    display: flex;
    gap: .5rem;
`
export const FooterActionWrapper = styled.div `
    padding: .5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 1rem;
    
    background-color: var(--gray-300);
`