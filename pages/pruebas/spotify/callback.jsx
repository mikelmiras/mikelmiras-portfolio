import { useEffect } from "react";

export default function SpotiCallback({spoti_secret, url, gpt_secret}){
    useEffect(()=>{
        let data = new URLSearchParams(window.location.search)
        let code = data.get("code")
        if (!code){
            alert("method not valid")
        }else{
            console.log("Method")
            let params = new URLSearchParams()
            params.append("grant_type", "authorization_code")
            params.append("code", code)
            let authdata = btoa("641e281228a54c61a8f4095778f2df49:" + spoti_secret)
            params.append("redirect_uri", url)
            fetch("https://accounts.spotify.com/api/token", {
                "method":"POST",
                "headers":{
                    "Content-type":"application/x-www-form-urlencoded",
                    "Authorization":"Basic " + authdata
                },
                "body":params.toString()
            }).then(data => data.json()).then(data => {
                if (!data.access_token){
                    console.log(JSON.stringify(data))
                }else{
                    const token = data.access_token
                    fetch ("https://api.spotify.com/v1/me/top/tracks?limit=6", {
                        "headers":{
                            "Authorization":"Bearer " + token
                        }
                    }).then(data => data.json()).then(data=> {
                        let artists = ""
                        data.items.map(item => {
                            const song = (item.artists[0].name + " - " + item.name)
                            if (!artists.includes(item.artists[0].name)){
                            artists += item.artists[0].name + ", "
                        }
                        })
                        const object ={                    
"model": "gpt-3.5-turbo",                                        
"messages": [{"role": "user", "content": "Suggest artists similar to " + artists.substring(0, artists.length - 2) + ". In JSON format inside data array, and using this format {name:artist, similar_to:artist}"}],
"temperature": 0.3
}   
                        document.getElementById('content').innerHTML = "Cargando..."
                        fetch("https://api.openai.com/v1/chat/completions", {
                            "method":"POST",
                            "headers":{
                                "Content-type":"application/json",
                                "Authorization":"Bearer " + gpt_secret
                            },
                            "body":JSON.stringify(object)
                        }).then(data=> data.json()).then(data=>{
                            document.getElementById('content').innerHTML = ""
                            let info = JSON.parse(data.choices[0].message.content)
                            document.getElementById("content").innerHTML = ""
                            info.data.map(artist => {
                                console.log(artist.name + " is similar to " + artist.similar_to)
                                document.getElementById('content').insertAdjacentHTML("beforebegin", "<p>" + artist.name + " is similar to " + artist.similar_to + "</p>")
                            })

                        })
                    })
                }
            }).catch(error => {
                alert("Error :(")
            })
        }
    }, [])
    return(
        <div id="content"></div>
    )
}
