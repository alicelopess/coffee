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
    coffeeId: Coffee["id"],
    id?: string,
    amount: number,
    coffeeSize: number,
}

export type CartOrder = {
    orderId: string,
    cart?: CoffeeInCart[]
}

export type UpdateCartItemQuantityParams = {
    id: string,
    quantity: number
}