import Header from "../components/Header";
import Link from "next/link";
import { BsCalendarDate  } from "react-icons/bs";
export default function Blog(){
    return(
        <>
        <Header/> 
        <div className="blog-wrapper">
            <section className="blog-holder">
            <h1>Blog</h1>
            <h2 className="linked-h2"><Link href="/blog/llamadas-sistema">Llamadas al sistema</Link></h2>
            <span className="article-data">
            <span className="date-holder"><BsCalendarDate/> <span className="date"> 21 de febrero, 2023</span></span>
            
        </span>
            <p>En sistemas operativos, una llamada al sistema (también conocida como syscall) es una interfaz de programación de aplicaciones (API) que proporciona una manera para que las aplicaciones soliciten ...</p>

            </section>
        </div>
        </>
    )
}