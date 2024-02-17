import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function DefaultTemplate({ children }) {
    return (
        <div>
            <Header />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
}