import { Model, createServer } from "miragejs"

const data = [
    {       
        name: "Expresso Tradicional", 
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
        type: "Tradicional",
        url: "/assets/expresso-tradicional.svg",
        quantity: 1
    },
    {      
        name: "Expresso Americano", 
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.90,
        type: "Tradicional",
        url: "/assets/expresso-americano.svg",
        quantity: 1
    },
    {      
        name: "Expresso Cremoso", 
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.90,
        type: "Tradicional",
        url: "/assets/expresso-cremoso.svg",
        quantity: 1
    },
    {      
        name: "Latte", 
        description: "Café expresso com o dobro de leite e espuma cremosa",
        price: 9.90,
        type: "Tradicional",
        url: "/assets/latte.svg",
        quantity: 1
    },
    {      
        name: "Expresso Gelado", 
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.90,
        type: "Tradicional",
        url: "/assets/cafe-gelado.svg",
        quantity: 1
    },
    {  
        name: "Capuccino", 
        description: "Bebida com canela feita de doses de café, leite e espuma",
        price: 9.90,
        type: "Doce",
        url: "/assets/capuccino.svg",
        quantity: 1
    },
    {      
        name: "Mocaccino", 
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.90,
        type: "Doce",
        url: "/assets/mochaccino.svg",
        quantity: 1
    },
    {      
        name: "Chocolate Quente", 
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.90,
        type: "Doce",
        url: "/assets/chocolate-quente.svg",
        quantity: 1
    },
    {       
        name: "Cubano", 
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.90,
        type: "Especial",
        url: "/assets/cafe-cubano.svg",
        quantity: 1
    },
    {       
        name: "Havaiano", 
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.90,
        type: "Especial",
        url: "/assets/cafe-havaiano.svg",
        quantity: 1
    },
    {      
        name: "Árabe", 
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.90,
        type: "Especial",
        url: "/assets/cafe-arabe.svg",
        quantity: 1
    },
    {      
        name: "Irlandês", 
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.90,
        type: "Especial",
        url: "/assets/cafe-irlandes.svg",
        quantity: 1
    },
]

export default createServer({
    
    models: {
        coffee: Model,
        order: Model
    },

    routes() {
        this.namespace = "api"

        this.get("/coffees")

        this.get("/coffees/:id", (schema, request) => {
            const id = request.params.id
            return schema.coffees.find(id)
        })

        this.post("/coffees", (schema, request) => {
            const attrs = JSON.parse(request.requestBody)
            return schema.coffees.create(attrs)
        })

        this.post("/orders", (schema, request) => {
            const attrs = JSON.parse(request.requestBody)
            return schema.orders.create(attrs)
        })
        
        this.get("/orders")

        this.delete("/orders/:id", (schema, request) => {
            const id = request.params.id
            return schema.orders.find(id).destroy()
        })
    },

    seeds(server) {
        data.forEach(item => {
            server.create("coffee", item)
        })
    }
})