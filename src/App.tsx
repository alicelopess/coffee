import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { useEffect } from "react"
import Cart from "./pages/cart"
import CheckoutFinished from "./pages/checkout/checkout-finished"
import Home from "./pages/home"
import Product from "./pages/product"
import "./services/api"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product/>,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout-success",
      element: <CheckoutFinished />,
    },
  ])

  async function getCoffess() {
    const response = await fetch("/api/coffees")
    const coffees = await response.json()

    console.log(coffees)
  }

  useEffect(() => {
    getCoffess()
  }, [])

return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
