import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    return (
        <section className="max-w-screen-xl mx-auto">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </section>
    );
}

export default App;
