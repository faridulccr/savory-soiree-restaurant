import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// components
import App from "./App.jsx";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyCart from "./components/my-cart/MyCart";
import AuthProvider from "./providers/AuthProvider";
import Contact from "./routes/Contact/Contact";
import Dashboard from "./routes/Dashboard/Dashboard";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import OurMenu from "./routes/Our-menu/OurMenu";
import OrderFood from "./routes/Our-shop/OrderFood";
import SignUp from "./routes/sign-up/SignUp";

// Create a client
const queryClient = new QueryClient();

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
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard/my-cart",
                element: <MyCart />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>
);
