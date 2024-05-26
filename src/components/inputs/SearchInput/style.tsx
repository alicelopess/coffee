import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`
export const Input = styled.input.attrs({
    type:"text"
})`
    width: 100%;
    border: none;
    border-radius: .25rem;
    background-color: var(--gray-800);
    padding: .75rem .75rem .75rem 2.25rem;
    color: var(--white);
    outline: 0;
    
    &::placeholder {
        font-family: "Roboto", sans-serif;
        font-size: .875rem;
        font-weight: 400;
        line-height: 130%;
        color: var(--gray-600);
    }

    /* @media only screen and (min-width: 1024px) {
        padding: .875rem .875rem .875rem 2.5rem;

        &::placeholder {
        font-size: 1rem;
        }
    } */
`
export const SearchIcon = styled.div`
    color: var(--gray-600);
    
    position: absolute;
    top: 50%;
    left: .75rem;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    ${Input}:focus-within + && {
        color: var(--yellow);
    }
`
