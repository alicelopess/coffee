import { ReactNode } from "react"

export type IconButtonProps = {
    variant: 'ghost' | 'default',
    children: ReactNode,
    onClick: () => void 
}