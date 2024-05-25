import { Wrapper } from "./style";
import { ButtonProps } from "./types";

export function Button({children, onClick, variant='default', background, type}:ButtonProps) {

    return (
        <Wrapper type={type} background={background} variant={variant} onClick={onClick}>
            {children}
        </Wrapper>
    )
}