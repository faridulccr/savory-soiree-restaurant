import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// components
import App from "./App.jsx";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "./providers/AuthProvider";
import Contact from "./routes/Contact/Contact";
import Dashboard from "./routes/Dashboard/Dashboard";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import OurMenu from "./routes/Our-menu/OurMenu";
import OrderFood from "./routes/Our-shop/OrderFood";
import SignUp from "./routes/sign-up/SignUp";

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
                path: "/login",
                element: <Login />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
            {
                path: "/our-menu",
                element: <OurMenu />,
            },
            {
                path: "/order",
                element: <OrderFood />,
            },
            {
                path: "/order/:category",
                element: <OrderFood />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
