import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    padding: 0 48px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 51px;
`

export const ImageWrapper = styled.div`
    max-width: 270px;
`

export const Content = styled.div`
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--gray-800);

    text-align: center;
`

export const ContentTitle = styled.span`
    font-family: "Baloo 2", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--yellow-dark);
`