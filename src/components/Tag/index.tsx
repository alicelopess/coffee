import { TagProps } from "./types";
import { Wrapper } from "./style";

export function Tag({children, variant='default', background}:TagProps) {
    return (
        <Wrapper variant={variant} background={background}>
            {children}
        </Wrapper>
    )
}