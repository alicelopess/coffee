export type CounterProps = {
    children: number,
    variant?: 'default' | 'outlined';
    handleIncrement: () => void
    handleDecrement: () => void
}