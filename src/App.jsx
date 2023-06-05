import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    const location = useLocation();
    const isLoginPage = location.pathname.includes("login");
    const isSigninPage = location.pathname.includes("sign-up");

    return (
        <section className="max-w-screen-xl mx-auto">
            {isLoginPage || isSigninPage || <Header />}
            <main>
                <Outlet />
            </main>
            {isLoginPage || isSigninPage || <Footer />}
        </section>
    );
}

export default App;
