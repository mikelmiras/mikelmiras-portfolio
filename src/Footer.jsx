import { useState } from "react"

export default function() {
    const [date, setDate] = useState(new Date())
    return(
        <>
        <footer>
            <hr/>
            <p>Desarrollado por Mikel Miras</p>
            <p>© Mikel Miras {date.getFullYear()}</p>
        </footer>
        </>
    )
}