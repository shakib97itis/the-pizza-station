import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as loaderOrder } from "./features/order/Order";
import CreateOrder, {
  action as actionCreateOrder,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionCreateOrder,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
