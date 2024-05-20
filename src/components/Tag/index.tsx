import { TagProps } from "./types";
import { Wrapper } from "./style";

export function Tag({children, variant='default'}:TagProps) {
    return (
        <Wrapper variant={variant}>
            {children}
        </Wrapper>
    )
}