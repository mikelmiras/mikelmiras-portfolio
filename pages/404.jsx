import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFound(){
    return(
        <>
        <Header/>
        <div className="blog-wrapper">
        <section className="blog-holder">
            <h1>404</h1>
            <h2>La página que has solicitado no existe.</h2>
        </section>
        </div>
        <Footer/>
        </>
    )
}