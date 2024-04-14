import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CashierInterface from "./components/CashierInterface";
import TableManagementInterface from "./components/TableManagementInterface";
import Home from "./layout/Home";
import Order from "./pages/Order";
import { Toaster } from "react-hot-toast";
const routes = [
  {
    path: "",
    element: <Home />,
    children: [
      { path: "/", element: <CashierInterface /> },
      { path: "/order", element: <Order /> },
      { path: "/tables", element: <TableManagementInterface /> },
    ],
  },
];
const router = createBrowserRouter(routes);
function App() {
  return (
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
