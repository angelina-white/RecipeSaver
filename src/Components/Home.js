import { useEffect } from "react"
import { gsap } from "gsap";
import itemData from "../data/item";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

    // scrolling
    // useEffect(() =>
    // {       
    //     gsap.defaults({ease: "none", duration: 2});
        
    //     const tl = gsap.timeline();
    //     tl.from("#imageA", {xPercent: -100})
    //       .from("#imageB", {xPercent: 100})
    //       .from("#imageC", {xPercent: -100})
        
    //     ScrollTrigger.create({
    //       animation: tl,
    //       trigger: "#imagesDisp",
    //       start: "top top",
    //       end: "+=500",
    //       scrub: true,
    //       pin: true,
    //       anticipatePin: 1
    //     })

    // }, [])


    useEffect(() =>
    {
        gsap.defaults({ease: "none", duration: 2});

        gsap.from("#pinkBox", {
            scrollTrigger: {
                trigger: "#pinkBox",
                toggleActions: "restart pause reverse pause",
                start: "top center",
                scrub: true,
                pin: true,
                pinSpacing: false
            },
            x: -500,
        });

        gsap.from("#redBox", {
            scrollTrigger: {
                trigger: "#redBox",
                toggleActions: "restart pause reverse pause",
                start: "top center",
                scrub: true,
                pin: true,
                pinSpacing: false
            },
            x: 500,
        });

        gsap.from("#orangeBox", {
            scrollTrigger: {
                trigger: "#orangeBox",
                toggleActions: "restart pause reverse pause",
                start: "top center",
                scrub: true,
                pin: true,
                pinSpacing: false
            },
            x: -500,
        });

    }, [])

    return (
        <div class="homePage">
            <Container>
                <Row>
                    <Col>
                        <h1 class="homeTitle">Home</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <div class="imagesDisp">
                            <img class="homeImages" id="imageA" src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg" />
                            <img class="homeImages" id="imageB" src="https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg" />
                            <img class="homeImages" id="imageC" src="https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/paleo-scallops-with-chimichurri.jpg?quality=82&strip=1" />
                        </div> */}
                        <div class="boxContainer">
                            <div class="box" id="pinkBox"></div>
                        </div>                        
                        <div class="boxContainer">
                            <div class="box" id="redBox"></div>
                        </div>
                        <div class="boxContainer">
                            <div class="box" id="orangeBox"></div>
                        </div>
                    </Col>
                </Row>
            </Container>


                {/* <img class="homeImages" id="imageA" src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg" /> */}
                {/* <img class="homeImages" id="imageB" src="https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg" /> */}
                {/* <img class="homeImages" id="imageC" src="https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/paleo-scallops-with-chimichurri.jpg?quality=82&strip=1" /> */}

        </div>
    )
}

export default Home