export type ProductCardProps = {
    title: string,
    description: string,
    price: number,
    imageUrl: string,
    cardOption?: 'primary' | 'secondary',
    handleClick: () => void
}