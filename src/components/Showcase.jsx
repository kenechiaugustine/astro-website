import { useState } from "react"

function Showcase() {

    const [name, setName] = useState('Kene')


    return (
        <>
            <h5> Showcase: Hello { name } </h5>
        </>
    )
}

export default Showcase