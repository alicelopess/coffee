import { IconButtonProps } from "./types";
import { Wrapper } from "./style";

export function IconButton({children, onClick, variant='default'}:IconButtonProps) {

    return (
        <Wrapper variant={variant} onClick={onClick}>
            {children}
        </Wrapper>
    )
}