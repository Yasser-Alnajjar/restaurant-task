import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CashierInterface from "./components/CashierInterface";
import TableManagementInterface from "./components/TableManagementInterface";
import Home from "./layout/Home";
import Order from "./pages/Order";

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
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
