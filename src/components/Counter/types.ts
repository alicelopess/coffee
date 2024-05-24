import { ReactNode } from "react"

export type CounterProps = {
    children: ReactNode,
    variant?: 'default' | 'outlined';
}