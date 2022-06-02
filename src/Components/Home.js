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
    useEffect(() =>
    {
        gsap.defaults({ease: "none", duration: 2});

        let sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".cont",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500",
          }
        });
        
        
        

        // gsap.from("#pinkBox", {
        //     scrollTrigger: {
        //         trigger: "#container",
        //         toggleActions: "restart pause reverse pause",
        //         start: "top top",
        //         end: "=+1000",
        //         scrub: true,
        //         pin: true,
        //         pinSpacing: false
        //     },
        //     // x: -1650,
        //     x: -500
        // });

        // gsap.from("#redBox", {
        //     scrollTrigger: {
        //         trigger: "#redBox",
        //         toggleActions: "restart pause reverse pause",
        //         start: "top top",
        //         scrub: true,
        //         pin: true,
        //         pinSpacing: false
        //     },
        //     x: 1650,
        // });

        // gsap.from("#orangeBox", {
        //     scrollTrigger: {
        //         trigger: "#orangeBox",
        //         toggleActions: "restart pause reverse pause",
        //         start: "top top",
        //         scrub: true,
        //         pin: true,
        //         pinSpacing: false
        //     },
        //     x: -1650,
        // });

    }, [])

    return (
        <div class="homePage">
            <Container>
                <Row>
                    <Col>
                    <div class="box" id="purpleBox">
                        <h1 class="homeTitle">Home</h1>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="cont">
                            <section class="panel pink">One</section>
                            <section class="panel red">Two</section>
                            <section class="panel orange">Three</section>
                        </div>                     
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home