import { IoIosSearch } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";



function Navbar() {
    return (
        <div className="container">
            <h2 className="iture">miniture</h2>
            <div className="list1">
                <ul>
                    <a href="./"><span>Home</span><RiArrowDropDownLine className="arrow" /></a>
                    <a href="./"><span>Catalogue</span><RiArrowDropDownLine className="arrow"/></a>
                    <a href="./"><span>Pages</span><RiArrowDropDownLine className="arrow"/></a>
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