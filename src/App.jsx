import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/category/:categoryName",
        element: <ProductCategory />,
      },

      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },

      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
