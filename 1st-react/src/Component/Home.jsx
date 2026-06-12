import { LuArmchair } from "react-icons/lu";
import pic1 from "../assets/pic1.webp"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import pic1a from "../assets/pic1a.png"
import pic2 from "../assets/pic2.webp"
import pic4 from "../assets/pic4.webp"
import pic5 from "../assets/pic5.webp"
import pica from "../assets/pica.webp"
import picb from "../assets/picb.webp"
import picc from "../assets/picc.webp"
import picd from "../assets/picd.webp"
import pice from "../assets/pice.webp"
import picf from "../assets/picf.webp"
import picg from "../assets/picg.webp"
import pich from "../assets/pich.webp"
import gang from "../assets/gang.webp"
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrPlay } from "react-icons/gr";
import image1 from "../assets/image1.webp"
import fto1 from "../assets/fto1.webp"
import fto2 from "../assets/fto2.webp"
import fto3 from "../assets/fto3.webp"
import fto4 from "../assets/fto4.webp"
import shop1 from "../assets/shop1.png"
import shop2 from "../assets/shop2.png"
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiWallet } from "react-icons/pi";
import { PiBasketball } from "react-icons/pi";
import { HiOutlineCreditCard } from "react-icons/hi2";
import ball1 from "../assets/ball1.webp"
import ball2 from "../assets/ball2.webp"
import ball3 from "../assets/ball3.webp"
import ball4 from "../assets/ball4.webp"
import ball5 from "../assets/ball5.webp"
import ball6 from "../assets/ball6.webp"
import { PiInstagramLogoLight } from "react-icons/pi";


function Home() {
    const pics = [
        { id: 1, image: pica, title: "AnaGreyDiningChair", price: "$299.99" },
        { id: 2, image: picb, title: "Natural Wood Dining Chair", price: "$100" },
        { id: 3, image: picc, title: "Paolo Black Wood Dining Chair", price: "$200" },
        { id: 4, image: picd, title: "Curved Back Dining Chair", price: "$300" },
        { id: 5, image: pice, title: "Pali Black Hardwood Dining Chair", price: "$400" },
        { id: 6, image: picf, title: "Paolo Natural Wood Dining Chair", price: "$350" },
        { id: 7, image: picg, title: "Muirfield Sculptural Metal Accent Chair", price: "$250" },
        { id: 8, image: pich, title: "Wells Renew Vegan Leather Chair", price: "$450" },
    ]
    const images = [
        { id: 1, image: fto1, title: "Lounge Deep Chaise Lounge", price: "$243" },
        { id: 2, image: fto2, title: "Polly Sand Brown Accent Chair", price: "$435" },
        { id: 3, image: fto3, title: "Axis 2-Seat Sofa", price: "$132" },
        { id: 4, image: fto4, title: "Medoc Swivel Chair", price: "$142" }
    ]
    const shops = [
        { id: 1, image: shop1 },
        { id: 2, image: shop2 }
    ]
    return (
        <div className="elsee" >

            <div className="pra1">
                <button className="chair" ><LuArmchair /></button>
                <span className="text">Elevate Your Lifestyle</span><br /><span className="jim">with Our Furniture</span><br /><div className="phone"><span>Creations</span>
                    <button className="now">Shop now</button></div>
            </div>
            <div>
                <img className="foto1" src={pic1} alt="" />
                <div className="arro">
                    <GoArrowLeft className="left" />
                    <GoArrowRight className="right" />
                </div>
            </div>
            <div className="photos">
                <div className="living">
                    <img className="pic1a" src={pic1a} alt="" />
                    <h4 className="ggg">LIVING ROOM</h4>
                </div>
                <div className="bed">
                    <img className="pic2" src={pic2} alt="" />
                    <h4 className="jjj">BED ROOM</h4>
                </div>
                <div className="frog">
                    <div className="chen">
                        <img className="pic4" src={pic4} alt="" />
                        <h4 className="kit">KITCHEN</h4>
                    </div>
                    <div className="kkk">
                        <img className="pic5" src={pic5} alt="" />
                        <h4 className="hhh" >KID ROOM</h4>
                    </div>
                </div>
            </div>
            <div className="tzt">
                <h2><span className="youx">You Are In</span> <span className="line">Kitchen <span><RiArrowDropDownLine className="msn" /></span></span></h2>

            </div>
            <div className="mpics">
                {pics.map((item) => {
                    return (
                        <>
                            <div>
                                <img className="imagesection" src={item.image} alt="" />
                                <p className="fff">{item.title}</p>
                                <p className="zzz">{item.price}</p>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className="vcn">
                <button className="core">Shop all product</button>
            </div>
            <div className="bbc">
                <img className="big" src={gang} alt="" />
                <div><GrPlay className="arnold" /></div>
                <div className="jim">
                    <h5 className="inch">LIMITED TIME ONLY</h5>
                    <h1 className="meet">The living room event up to<br></br><span className="delic">30% off</span></h1>
                    <p className="cvc">Use this text to share information about your brand with your customers.<br></br> Describe a product, share announcements, or welcome customers to your<br></br> store.</p>
                    <div className="yves">
                        <button className="kounde">Shop the sale</button>
                    </div>
                </div>

            </div>
            <h4 className="hasing">Top deal today</h4>
            <h2 className="champio">Up to 30% off The Living Room Event</h2>
            <img className="section1" src={image1} alt="" />
            <div className="chief">
                <div className="bushali"><h4>CRAFT OWN FURNITURE</h4></div>
                <div className="kevin"><h2>Your New For Ever Favorties Are Here</h2></div>
            </div>
            <h1 className="sell">Top Sellers</h1>
            <div className="entres">
                {images.map((item) => {
                    return (
                        <>
                            <div>
                                <img className="picturesection" src={item.image} alt="" />
                                <p className="oop">{item.title}</p>
                                <p className="kkz">{item.price}</p>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className="bandles">
                {shops.map((item) => {
                    return (
                        <>
                            <div>
                                <img className="shopsection" src={item.image} alt="" />
                            </div>
                        </>
                    )
                })}
            </div>
            <div className="content">
                <div className="truck">
                    <div><LiaShippingFastSolid className="trucka" /></div>
                    <div >
                        <h3>Free Shipping</h3>
                        <p className="freee">Free Shipping for orders</p>
                    </div>
                </div>
                <div className="wallet">
                    <div><PiWallet className="truckb" /></div>
                    <div>
                        <h3>Money Guarantee</h3>
                        <p className="freee">Within 30 days</p>
                    </div>
                </div>
                <div className="basket">
                    <div><PiBasketball className="truckc" /></div>
                    <div>
                        <h3>Online Support</h3>
                        <p className="freee">24 hours a day, 7 days a week</p>
                    </div>
                </div>
                <div className="flexi">
                    <div><HiOutlineCreditCard className="truckd" /></div>
                    <div>
                        <h3>Flexible Payment</h3>
                        <p className="freee">Pay with Multiple Credit Cards</p>
                    </div>
                </div>
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
export default Home