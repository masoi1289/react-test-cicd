import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/x1",
        element: <div>x1</div>,
    },
    {
        path: "/x2",
        element: <div>x2</div>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
