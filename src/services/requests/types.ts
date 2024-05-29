export type Coffee = {
    name: string,
    description: string,
    id?: string,
    price: number,
    type: string,
    url: string,
    quantity: number
}

export interface CoffeeInCart extends Coffee {
    // id?: string,
    // coffeeId: string,
    amount: number,
    // quantity: number
}

export type CartOrder = {
    orderId: string,
    cart?: CoffeeInCart[]
}