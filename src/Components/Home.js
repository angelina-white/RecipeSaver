import { useEffect } from "react"
import { gsap } from "gsap";

function Home()
{
    //make title come in from right
    useEffect(() =>
    {
        gsap.from("#homeTitle", {
            x: 50,
            duration: 1
        })
    }, [])

    return (
        <div>
            <h1 id="homeTitle">Home</h1>
        </div>
    )
}

export default Home