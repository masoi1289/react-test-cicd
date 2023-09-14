import { useState } from "react";
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
]);

function App() {

    return <RouterProvider router={router} />;
}

export default App;
