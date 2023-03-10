export default function SpotiPrueba(params){
    return(
        <>
         <a href={"https://accounts.spotify.com/es-ES/authorize?client_id=641e281228a54c61a8f4095778f2df49&redirect_uri=" + params.url + "&response_type=code&scope=user-top-read%20user-read-email"}>Login with Spotify</a>
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