import { Minus, Plus } from "@phosphor-icons/react";
import { IconButton } from "../buttons/IconButton";
import { CounterText, Wrapper } from "./style";
import { CounterProps } from "./types";

export function Counter({ variant, handleIncrement, handleDecrement, children }:CounterProps) {

    return (
        <Wrapper variant={variant}>
            <IconButton onClick={handleDecrement} variant="ghost">
                <Minus size={20}/>
            </IconButton>
            <CounterText>{children}</CounterText>
            <IconButton onClick={handleIncrement} variant="ghost">
                <Plus size={20}/>
            </IconButton>
        </Wrapper>
    )
}