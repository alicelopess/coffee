import {
  RouterProvider
} from "react-router-dom"
import { router } from "./routes"
import "./services/api"
import { CartProvider } from "./contexts/CartContext"

function App() {


return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
