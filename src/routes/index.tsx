import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BorrowSummary from "../pages/BorrowSummary";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "allBooks", Component: AllBooks },
      { path: "addBook", Component: AddBook },
      { path: "borrowSummary", Component: BorrowSummary },
    ],
  },
]);

export default router;
