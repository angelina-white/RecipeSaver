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
        gsap.from(".homeTitle", {
            x: 50,
            duration: 1
        })
    }, [])

    // scrolling
    useEffect(() =>
    {
        gsap.defaults({ease: "none", duration: 2});

        //yellow coming in from right
        gsap.from(".yellow", {
            scrollTrigger:
            {
                trigger: ".yellow",
                start: "top top",
                pin: true,
                scrub: true,
            }, x: -1700
        })

        gsap.from(".blue", {
            scrollTrigger:
            {
                trigger: ".blue",
                start: "top top",
                pin: true,
                scrub: true,
            }, x: 1700
        })


        //horizontal scrolling
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
    })


    return (
        <div class="homePage">
            <Container>
                <Row>
                    <Col>
                        <div class="box" id="purpleBox">
                            <h1 class="homeTitle">Home</h1>
                            <h2 id="homeDes">Web app to store all of your favorite websites!</h2>
                            <h3 id="galleryScroll">Scroll down for gallery</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="leftRight">
                            <img className="yellow box" src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg" />
                            <img class="green" src="https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg" />
                            <img class="greenblue" src="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/https%3A%2F%2Fs3.amazonaws.com%2Fpixtruder%2Foriginal_images%2Ff5cffedb779ce8ea3991f8020b5616d39ef6c0ee" />
                            <img class="blue" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F23%2F15925-creamy-au-gratin-potatoes-mfs_121.jpg" />
                            <img class="bluebluepurple" src="https://www.budgetbytes.com/wp-content/uploads/2019/10/Creamy-Pesto-Chicken-Pasta-close-skillet.jpg" />
                            <img class="bluepurplepurple" src="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg" />
                        </div>                     
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="cont">
                            <img class="panel" src="https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/paleo-scallops-with-chimichurri.jpg?quality=82&strip=1"/>
                            <img class="panel" src="https://static.onecms.io/wp-content/uploads/sites/9/2022/04/15/Tamarind-Chicken-FT-RECIPE0522.jpg"/>
                            <img class="panel" src="https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg"/>
                        </div>                     
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home