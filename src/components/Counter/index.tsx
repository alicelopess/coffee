import { Minus, Plus } from "@phosphor-icons/react";
import { IconButton } from "../buttons/IconButton";
import { CounterText, Wrapper } from "./style";
import { CounterProps } from "./types";

export function Counter({children}:CounterProps) {
    return (
        <Wrapper>
            <IconButton onClick={() => console.log(+1)} variant="ghost">
                <Plus />
            </IconButton>
            <CounterText>{children}</CounterText>
            <IconButton onClick={() => console.log(-1)} variant="ghost">
                <Minus />
            </IconButton>
        </Wrapper>
    )
}