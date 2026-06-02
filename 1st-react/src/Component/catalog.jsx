import { GoHome } from "react-icons/go";
import james1 from "../assets/james1.webp"
import { PiSlidersHorizontalLight } from "react-icons/pi"
import jamesa from "../assets/jamesa.webp"
import jamesb from "../assets/jamesb.webp"
import jamesc from "../assets/jamesc.webp"
import jamesd from "../assets/jamesd.webp"
import jamese from "../assets/jamese.webp"
import jamesf from "../assets/jamesf.webp"
import jamesg from "../assets/jamesg.webp"
import jamesh from "../assets/jamesh.webp"
import jamesi from "../assets/jamesi.webp"
import jamesj from "../assets/jamesj.webp"
import jamesk from "../assets/jamesk.webp"
import jamesl from "../assets/jamesl.webp"
function Catalog() {
    const jamess = [
        { id: 1, image: jamesa, title: "Ana Grey Dining Chair", price: "$299.99" },
        { id: 2, image: jamesb, title: "Axis 2-Piece Sectional Sofa", price: "$768" },
        { id: 3, image: jamesc, title: "Axis 2-Seat Sofa", price: "$768" },
        { id: 4, image: jamesd, title: "Curved Back Dining Chair", price: "$768" },
        { id: 5, image: jamese, title: "Dot Kids Light Brown Play Stool", price: "$768" },
        { id: 6, image: jamesf, title: "Ever Slipcovered Striped Nursery", price: "$768" },
        { id: 7, image: jamesg, title: "Fawn Animal Kids Play Chair", price: "$768" },
        { id: 8, image: jamesh, title: "Gather Sofa", price: "$768" },
        { id: 9, image: jamesi, title: "Janod Alphabet Wooden Baby Puzzle", price: "$768" },
        { id: 10, image: jamesj, title: "Janod Rainbow Turtle Wooden Baby Pull Toy", price: "$768" },
        { id: 11, image: jamesk, title: "Lounge Deep Chaise Lounge", price: "$768" },
        { id: 12, image: jamesl, title: "Medoc Swivel Chair", price: "$768" },
    ]
    return (
        <div className="container3">
            <img className="attend" src={james1} alt="" />
            <div className="bings">
                <h1>product</h1>
                <div className="machine1">
                    <GoHome className="muke" />
                    <p className="muze">/  collections  /</p>
                    <p>products</p>
                </div>
            </div>
            <div className="icons-1">
                <PiSlidersHorizontalLight className="russia" />
                <button className="poland">Filters</button>
                <p className="china">3</p>
            </div>
            <div>
                
            </div>

            <div className="king">
                {jamess.map((item) => {
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
        </div>
    )
}
export default Catalog