import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { GoArrowRight } from "react-icons/go";
import { PiCopyright } from "react-icons/pi";
import { TiWorldOutline } from "react-icons/ti";
import { LiaCoinsSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
function Footer() {
    return (
        <div className="containel4">
            <div className="cont1">
                <div className="tube1">
                    <h2>Our Story</h2>
                    <p>Miniture is one of the biggest international<br></br> fashion companies, one of the world’s<br></br> largest distribution groups.</p>
                    <div className="james1">
                        <SlSocialFacebook className="book1" />
                        <FaXTwitter className="book2" />
                        <GrInstagram className="book3" />
                        <ImYoutube className="book4" />
                    </div>
                </div>
                <div className="tube2">
                    <h2>Quick links</h2>
                    <ul>
                        <a href="">Accent Chairs</a>
                        <a href="">Dinning Chair</a>
                        <a href="">Dining Room</a>
                        <a href="">Kid's Furniture</a>
                    </ul>
                </div>
                <div className="tube3">
                    <h2>Information</h2>
                    <ul>
                        <a href="">Privacy policy</a>
                        <a href="">Refund policy</a>
                        <a href="">Shipping & Return</a>
                        <a href="">Term & conditions</a>
                    </ul>
                </div>
                <div className="tube4">
                    <h2>Let’s get in touch</h2>
                    <div className="Foote-input">
                        <input className="tube5" type="text" placeholder="Enter your Email" />
                        <GoArrowRight className="tube6" />

                    </div>

                </div>
            </div>
            <div className="peace">
                <hr className="footer-border" />
                <div className="mwana">
                    <PiCopyright className="linye" />
                    <p className="buttle"> 2026 Miniture. Powered by Shopify</p>
                </div>
                <div className="chelsea">
                    <div className="barc">
                        <TiWorldOutline className="ward" />
                        <p className="comme">English</p>
                        <RiArrowDropDownLine />
                    </div>
                    <div className="drop">
                        <LiaCoinsSolid />
                        <p className="rwanda">Rwanda(USD$)</p>
                        <RiArrowDropDownLine />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer