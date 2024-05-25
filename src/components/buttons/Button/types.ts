import { ReactNode } from "react"

export type ButtonProps = {
    variant?: 'default'|'purple'|'yellow'|'ghost'|'outlined',
    background?: 'purple'|'yellow'|'gray',
    type?: 'button' | 'select'
    children: ReactNode,
    onClick: () => void 
}