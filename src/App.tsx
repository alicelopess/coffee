import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from "./pages/home"
import Cart from "./pages/cart"
import Product from "./pages/product"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/product",
      element: <Product/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
