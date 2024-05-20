import { ReactNode } from "react";
import { Wrapper } from "./style";

export function Button({children, onClick, variant='default'}:{children:ReactNode, onClick: () => void, variant?:'default'|'purple'|'yellow'|'ghost'}) {

    return (
        <Wrapper variant={variant} onClick={onClick}>
            {children}
        </Wrapper>
    )
}