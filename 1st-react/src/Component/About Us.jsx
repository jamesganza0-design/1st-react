import ish1 from "../assets/ish1.webp"
import { useState } from "react"
import screen1 from "../assets/screen1.png"
import screen2 from "../assets/screen2.png"
import screen3 from "../assets/screen3.png"
import screen4 from "../assets/screen4.png"
import prada1 from "../assets/prada1.png"
import prada2 from "../assets/prada2.png"
import prada3 from "../assets/prada3.png"
import prada4 from "../assets/prada4.png"
import prada5 from "../assets/prada5.png"
import ball1 from "../assets/ball1.webp"
import ball2 from "../assets/ball2.webp"
import ball3 from "../assets/ball3.webp"
import ball4 from "../assets/ball4.webp"
import ball5 from "../assets/ball5.webp"
import ball6 from "../assets/ball6.webp"
import { PiInstagramLogoLight } from "react-icons/pi";
function AboutUs() {
    function counter() {
        const { count, setCount } = useState(0)
    }
    return (
        <div className="phone7">
            <h1 className="ishimwe">Transforming Your House into a Home<br></br> with Beautifully Crafted Furniture<br></br> for Every Room</h1>
            <img className="sub-phone1" src={ish1} alt="" />
            <div className="wanje">
                <h2>Established In 2008</h2>
                <p>At Miniture, our journey began in 2008 with a vision to redefine how people<br></br>
                    perceive and experience furniture. Over the years, we have grown from a small,<br></br>
                    family-owned business into a leading provider of exquisite furniture, known for<br></br>
                    our dedication to quality, craftsmanship, and innovation.</p>
            </div>
            <div className="wanje">
                <h2>The Early Years</h2>
                <p className="wanjye1">In the early years of our company, we started as a humble workshop,
                    crafting <br></br>furniture by hand with a commitment to excellence. Our founder,
                    Dzung Nova,<br></br> had a passion for woodworking and a deep appreciation for the artistry that<br></br> goes into
                    creating fine furniture. This dedication laid the foundation for our<br></br> company's values and principles.</p>
            </div>
            <div className="wanje">
                <h2>Growth and Expansion</h2>
                <p className="wanjye2">As our reputation for quality craftsmanship and unique designs grew,
                    so did our<br></br> business. We expanded our operations to include a showroom where
                    customers<br></br> could experience our furniture firsthand. This expansion allowed us to
                    connect<br></br> with our customers on a more personal level and showcase the range of
                    <br></br>possibilities our furniture offered.</p>
            </div>
            <div className="wanje">
                <h2>Innovation and Customization</h2>
                <p className="wanjye3">In the 2023, we took a significant leap by embracing technology
                    innovation<br></br> in our design and manufacturing processes.
                    This allowed us to offer a wider<br></br> range of customization options to our customers.
                    Whether it was choosing<br></br> different finishes, fabrics, or custom dimensions,
                    we wanted every piece to<br></br> reflect the unique style and personality of its owner.</p>
            </div>
            <div className="touches">
                <div>
                    <h1>450+</h1>
                    <p className="forward">Premium products</p>
                </div>
                <div>
                    <h1>25+</h1>
                    <p className="forward">Years experiences</p>
                </div>
                <div>
                    <h1>3600+</h1>
                    <p className="forward">Happy customers</p>
                </div>
                <div>
                    <h1>92+</h1>
                    <p className="forward">Award gained</p>
                </div>
            </div>
            <h1 className="teamings">Our Team</h1>
            <div className="screening">
                <img className="screen" src={screen1} alt="" />
                <img className="screen" src={screen2} alt="" />
                <img className="screen" src={screen3} alt="" />
                <img className="screen" src={screen4} alt="" />
            </div>
            <div className="prada1a">
                <img className="prada1b" src={prada1} alt="" />
                <img className="prada1b" src={prada2} alt="" />
                <img className="prada1b" src={prada3} alt="" />
                <img className="prada1b" src={prada4} alt="" />
                <img className="prada1b" src={prada5} alt="" />
            </div>
            <div className="grass2">
                <div className="grass1">
                    <h1>Instagram Shop</h1>
                    <p>Tag @miniture in your Instagram photos for<br></br> a chance to be featured here.</p>
                    <button className="grass3">Visite our instagram</button>
                </div>
                <div className="empire">
                    <div className="balla">
                        <img className="bag1" src={ball1} alt="" />
                        <PiInstagramLogoLight className="inst6" />
                        <img className="bag2" src={ball2} alt="" />
                        <PiInstagramLogoLight className="inst6" />
                    </div>
                    <div className="ballb">
                        <img className="bag3" src={ball3} alt="" />
                        <PiInstagramLogoLight className="inst6" />
                        <img className="bag4" src={ball4} alt="" />
                        <PiInstagramLogoLight className="inst6" />
                    </div>
                    <div className="ballc">
                        <img className="bag5" src={ball5} alt="" />
                        <PiInstagramLogoLight className="inst6" />
                        <img className="bag6" src={ball6} alt="" />
                        <PiInstagramLogoLight className="inst6" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs