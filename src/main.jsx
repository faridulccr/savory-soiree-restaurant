import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// components
import App from "./App.jsx";
import ErrorPage from "./ErrorPage";
import Contact from "./routes/Contact/Contact";
import Dashboard from "./routes/Dashboard/Dashboard";
import Home from "./routes/Home/Home";
import OurMenu from "./routes/Our-menu/OurMenu";
import OurShop from "./routes/Our-shop/OurShop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/our-menu",
                element: <OurMenu />,
            },
            {
                path: "/our-shop",
                element: <OurShop />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
