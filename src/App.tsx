import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from "./pages/home"
import Cart from "./pages/cart"
import Product from "./pages/product"
import CheckoutFinished from "./pages/checkout/checkout-finished"

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

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
