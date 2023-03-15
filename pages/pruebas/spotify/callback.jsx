import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useEffect } from "react";
import { useState } from "react";
export default function SpotiCallback({redirecturl}){
    const [called, setCalled] = useState(false)
    useEffect(()=>{
        if (called) return;
        setCalled(true)
        const url = new URLSearchParams(window.location.search)
        if (!url.get("code")){
            document.getElementById('content').innerHTML = '<p style="color: red;">Error</p>';
            return;
        }
        document.getElementById('content').innerHTML = '<p style="color: white;">Cargando...</p>'
        fetch(redirecturl, {
            "method":"POST",
            "headers":{
                "Content-type":"application/x-www-form-urlencoded"
            },
            "mode":"cors",
            "body":"code=" + url.get("code")
        }).then(data=>data.json()).then(data=>{
            if (!data.status){
                document.getElementById('content').innerHTML = '<p style="color: red;">' + data.message +'</p>';
            }else{
                document.getElementById('content').innerHTML = '<p style="color: white;">' + data.message +'</p>';
            }
        }).catch(e =>{
            console.log(e)
            document.getElementById('content').innerHTML = '<p style="color: red;">' + e + '    </p>';
        })

    }, [called])
    return(
        <div id="content"></div>
    )
}

export function getServerSideProps(){
    return{
        props:{
            redirecturl:process.env.API_URL
        }
    }
}