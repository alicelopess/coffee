import styled from "styled-components"

export const Wrapper = styled.div<{variant:TagProps['variant']}> `
    padding: .375rem .75rem;
    border: 1px solid var(--purple);
    
    color: var(--purple-dark);
    font-size: .625rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;

`