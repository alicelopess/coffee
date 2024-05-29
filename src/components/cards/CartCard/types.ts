export type CartCardProps = {
    id: string,
    title: string,
    size: number,
    imageUrl: string,
    quantity: number,
    amount: number,
    handleIncrementItemOnCart: () => void,
    handleDecrementItemOnCart: () => void,
    handleRemoveItemFromCart: () => void
}