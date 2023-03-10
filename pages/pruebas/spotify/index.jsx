export default function SpotiPrueba(params){
    return(
        <>
        <h2>{params.url}</h2>
         <a href={"https://accounts.spotify.com/es-ES/authorize?client_id=641e281228a54c61a8f4095778f2df49&redirect_uri=http://127.0.0.1:3000/pruebas/spotify/callback/&response_type=code&scope=user-top-read"}>Login with Spotify</a>
        </>
    )
}

export async function getServerSideProps(){
    return{
        props : {
            url:process.env.SPOTI_REDIRECT_URI
        }
    }
}