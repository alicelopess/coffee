import { Minus, Plus } from "@phosphor-icons/react";
import { IconButton } from "../buttons/IconButton";
import { CounterText, Wrapper } from "./style";
import { CounterProps } from "./types";

export function Counter({children, variant}:CounterProps) {
    return (
        <Wrapper variant={variant}>
            <IconButton onClick={() => console.log(-1)} variant="ghost">
                <Minus size={20}/>
            </IconButton>
            <CounterText>{children}</CounterText>
            <IconButton onClick={() => console.log(+1)} variant="ghost">
                <Plus size={20}/>
            </IconButton>
        </Wrapper>
    )
}