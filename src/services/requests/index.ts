import { Coffee, CoffeeInCart, UpdateCartItemQuantityParams } from './types'

export async function getCoffees(): Promise<Coffee[]> {
    const response = await fetch("/api/coffees")
    const data = await response.json()
    
    return data['coffees']
}

export async function createCoffee(param: Coffee) {
    const response = await fetch(`/api/coffees`, {
        method: "POST",
        body: JSON.stringify(param),
        headers: {"Content-type": "application/json"}
    })
    const data = await response.json()
    console.log(data)
    // return data.coffee
}

export async function getOneCoffee(id:string): Promise<Coffee> {
    const response = await fetch(`/api/coffees/${id}`)
    const data = await response.json()

    return data.coffee
}




export async function createCartItem(param: CoffeeInCart) {
    const response = await fetch(`/api/orders`, {
        method: "POST",
        body: JSON.stringify(param),
        headers: {"Content-type": "application/json"}
    })
    const data = await response.json()
    console.log(data)
    // return data.coffee
}

export async function getCartItems(): Promise<CoffeeInCart[]> {
    const response = await fetch(`/api/orders`)
    const data = await response.json()

    console.log(data)
    return data.orders
}

export async function updateCartItemQuantity(params:UpdateCartItemQuantityParams) {
    const response = await fetch(`/api/orders/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({quantity: params.quantity}),
        headers: {"Content-type": "application/json"}
    })
    const data = await response.json()
    console.log(data)
    // return data.coffee
}

export async function removeItemFromCart(id:string) {
    await fetch(`/api/orders/${id}`, {
        method: "DELETE"
    })
}

export async function finishPurchase() {
    await fetch(`/api/orders`, {
        method: "DELETE"
    })
}