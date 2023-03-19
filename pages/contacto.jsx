export default function Contacto() {
    return(
        <>
        <section className="main-info-holder">
            <h1>Esta es la página de contacto</h1>
        </section>
        </>
    )
}

export async function getServerSideProps(context){
    const resp = await fetch(process.env.FETCH_URL, {
        "method":"POST",
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify({"allowprivate": context.req.cookies.auth})
    })
    const data = await resp.json();
    let admin = false
    if (context.req.cookies.auth === process.env.POST_PASS) admin = true
    return{
        props:{
            data,
            admin
        }
    }
}