import Product from "./pages/product";
import SingleProduct from "./pages/product/single";

const routes = [
    {
        path: "/",
        element: <Product />,
    },
    {
        path: "/:id",
        element: <SingleProduct />,
    },
];

export { routes };