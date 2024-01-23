import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultTemplate({ children }) {
    return (
        <div>
            <Header></Header>
            <Navbar />
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
}