import { useEffect } from "react"
import { gsap } from "gsap";
import itemData from "../data/item";

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

    const imageList = itemData.map((item) =>
    {
        return (
            <img class="homeImages" src={item} />
        )
    })

    return (
        <div>
            <h1 id="homeTitle">Home</h1>
            {imageList}
        </div>
    )
}

export default Home