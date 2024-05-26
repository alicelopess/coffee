import { createServer } from "miragejs"

export default createServer({
  routes() {
    this.namespace = "api"

    this.get("/coffees", () => {
      return {
        coffees: [
            {      
                id: 1, 
                name: "Expresso Tradicional", 
                description: "O tradicional café feito com água quente e grãos moídos",
                price: 9.90,
                type: "Tradicional",
                url: "src/assets/expresso-tradicional.svg"
            },
            {      
                id: 2, 
                name: "Expresso Americano", 
                description: "Expresso diluído, menos intenso que o tradicional",
                price: 9.90,
                type: "Tradicional",
                url: "src/assets/expresso-americano.svg"
            },
            {      
                id: 3, 
                name: "Expresso Cremoso", 
                description: "Café expresso tradicional com espuma cremosa",
                price: 9.90,
                type: "Tradicional",
                url: "src/assets/expresso-cremoso.svg"
            },
            {      
                id: 4, 
                name: "Latte", 
                description: "Café expresso com o dobro de leite e espuma cremosa",
                price: 9.90,
                type: "Tradicional",
                url: "src/assets/latte.svg"
            },
            {      
                id: 5, 
                name: "Expresso Gelado", 
                description: "Bebida preparada com café expresso e cubos de gelo",
                price: 9.90,
                type: "Tradicional",
                url: "src/assets/cafe-gelado.svg"
            },
            {      
                id: 6, 
                name: "Capuccino", 
                description: "Bebida com canela feita de doses de café, leite e espuma",
                price: 9.90,
                type: "Doce",
                url: "src/assets/capuccino.svg"
            },
            {      
                id: 7, 
                name: "Mocaccino", 
                description: "Café expresso com calda de chocolate, pouco leite e espuma",
                price: 9.90,
                type: "Doce",
                url: "src/assets/mochaccino.svg"
            },
            {      
                id: 8, 
                name: "Chocolate Quente", 
                description: "Bebida feita com chocolate dissolvido no leite quente e café",
                price: 9.90,
                type: "Doce",
                url: "src/assets/chocolate-quente.svg"
            },
            {      
                id: 9, 
                name: "Cubano", 
                description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
                price: 9.90,
                type: "Especial",
                url: "src/assets/cafe-cubano.svg"
            },
            {      
                id: 10, 
                name: "Havaiano", 
                description: "Bebida adocicada preparada com café e leite de coco",
                price: 9.90,
                type: "Especial",
                url: "src/assets/cafe-havaiano.svg"
            },
            {      
                id: 11, 
                name: "Árabe", 
                description: "Bebida preparada com grãos de café árabe e especiarias",
                price: 9.90,
                type: "Especial",
                url: "src/assets/cafe-arabe.svg"
            },
            {      
                id: 12, 
                name: "Irlandês", 
                description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
                price: 9.90,
                type: "Especial",
                url: "src/assets/cafe-irlandes.svg"
            },
        ],
      }
    })
  },
})