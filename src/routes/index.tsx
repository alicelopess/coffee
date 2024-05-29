import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Cart from "../pages/cart";
import CheckoutFinished from "../pages/checkout/checkout-finished";
import Product from "../pages/product";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/product/:id",
        element: <Product />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/checkout-success",
        element: <CheckoutFinished />
    },
])