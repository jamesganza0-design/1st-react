import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import ganza1 from "../assets/ganza1.webp";
import ganza2 from "../assets/ganza2.webp";
import ganza3 from "../assets/ganza3.webp";
import ganza4 from "../assets/ganza4.webp";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";




function Navbar() {
    const [showHomeDropdown, setShowHomeDropdown] = useState(false)
    const [showCatalogDropdown, setShowCatalogDropdown] = useState(false)
    const [showPagesDropdown,setShowPagesDropdown] = useState(false)
    const imagesgb = [
        { id: 1, image: ganza1, title: "Ana Grey Dining Chair", price: "$299.99" },
        { id: 2, image: ganza2, title: "Axis 2-Piece Sectional Sofa", price: "$339.99" },
        { id: 3, image: ganza3, title: "Axis 2-Seat Sofa", price: "$239.99" },
        { id: 4, image: ganza4, title: "Curved Back Dining Chair", price: "$159.99" }
    ]
    return (
        <div className="container">
            <h2 className="iture">miniture</h2>
            <div className="list1">
                <ul>
                    <a href="./"
                        onMouseEnter={() => setShowHomeDropdown(true)}
                        onMouseLeave={() => setShowHomeDropdown(false)}
                    ><span>Home</span><RiArrowDropDownLine className="arrow" />
                        {showHomeDropdown && (
                            <div className="elegance">
                                <p>Home v1 — Modern Elegance</p>
                                <p>Home v2 — Rustic Comfort</p>
                                <p>Home v3 — Minimalist Chic</p>
                                <p>Home v4 — Industrial Vibes</p>
                                <p>Home v5 — Vintage Revival</p>
                                <p>Home v6 — Kid’s Playland</p>

                            </div>
                        )}
                    </a>
                    <a href="/"
                        onMouseEnter={() => setShowCatalogDropdown(true)}
                        onMouseLeave={() => setShowCatalogDropdown(false)}
                    ><span><Link to="/catalog">Catalog</Link></span><RiArrowDropDownLine className="arrow" />
                        {showCatalogDropdown && (
                            <div className="jeans">
                                <div className="ganza13">
                                    <h3>Collection</h3>
                                    <h3>Most Popular</h3>
                                    <div className="finger">
                                        <h3>All Accept Chair (26)</h3>
                                        <GoArrowRight />
                                    </div>

                                </div>
                                {imagesgb.map((item) => {
                                    return (
                                        <>
                                            <div>
                                                <img className="bat1" src={item.image} alt="" />
                                                <p className="bat2">{item.title}</p>
                                                <p className="bat3">{item.price}</p>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        )}
                    </a>
                    <a href="./"
                    onMouseEnter={() => setShowPagesDropdown(true)}
                    onMouseLeave={() => setShowPagesDropdown(false)}
                    ><span><Link to="/Pages">Pages</Link></span><RiArrowDropDownLine className="arrow" />
                    {showPagesDropdown &&(
                        <ul className="entrance">
                      <a href="./"><span>About Us</span></a>
                      <a href="./"><span>FaQs</span></a>
                      <a href="./"><span>Contact Us</span></a>
                      </ul>
                    )
                    }
                    
                    
                    </a>
                    <a href="./"><span className="blogg">Blog</span></a>
                    <a href="./"><span className="blogg">Contact</span></a>
                </ul>
            </div>
            <div className="icons">
                <IoIosSearch className="icon1" />
                <MdOutlinePersonOutline className="icon2" />
                <MdOutlineShoppingBag className="icon3" />
            </div>
        </div>
    )
}
export default Navbar