export default async function handler(req, res){
if (!req.body.code){
    res.status(400).json({"status":false, "message":"Bad request"})
    return;
}

            
            let params = new URLSearchParams()
            params.append("grant_type", "authorization_code")
            params.append("code", req.body.code)
            let authdata = btoa("641e281228a54c61a8f4095778f2df49:" + process.env.SPOTI_SECRET)
            params.append("redirect_uri", process.env.SPOTI_REDIRECT_URI)
            const get_token = await fetch("https://accounts.spotify.com/api/token", {
                "method":"POST",
                "headers":{
                    "Content-type":"application/x-www-form-urlencoded",
                    "Authorization":"Basic " + authdata
                },
                "body":params.toString()
            })
            
            const token_resp = await get_token.json()
            if (!token_resp.access_token){
                res.status(401).json({"status":false, "message":"Invalid code"})
                return;
            }

            const access_token = token_resp.access_token
            const tracks_resp = await fetch ("https://api.spotify.com/v1/me/top/tracks?limit=6", {
                        "headers":{
                            "Authorization":"Bearer " + access_token
                        }
                    })
            const tracks = await tracks_resp.json()

            if (tracks_resp.status != 200){
                res.status(401).json({"status":false, "message":"Invalid authorization token"})
                return;
            }
                        let artists = ""
                        tracks.items.map(item => {
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
console.log(JSON.stringify(object))
                        
                        const gpt_resp = await fetch("https://api.openai.com/v1/chat/completions", {
                            "method":"POST",
                            "headers":{
                                "Content-type":"application/json",
                                "Authorization":"Bearer " + process.env.GPT_SECRET
                            },
                            "body":JSON.stringify(object)
                        })
                        const gpt = await gpt_resp.json()

                        
                            
                            let info = JSON.parse(gpt.choices[0].message.content)
            
                            let message = ""
                            info.data.map(artist => {
                                
                                message +=  "<p>" + artist.name + " is similar to " + artist.similar_to + "</p>"
                            })

                        res.status(200).json({"status":true, "message":message})
                    
        }