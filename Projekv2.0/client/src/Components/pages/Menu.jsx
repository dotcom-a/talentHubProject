import React from "react";
import './Menu.css'

function importAll(r)
{
    let images = {};
    r.keys().forEach((item,index) => {images[item.replace('../../assets','')] = r(item);});
    return images
}
const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));

const Menu = () =>
{
    return(
        <>
        <div className="allMenu">
            <div className="food">
                <img src={img.breakfast.jpg} alt="breakfast"/>
            </div>
            <div className="food">
                <img src={img.cheescake.jpg} alt="cheesecake"/>
            </div>
            <div className="food">
                <img src={img.dango.jpg} alt="dango"/>
            </div>
            <div className="food">
                <img src={img.fries.jpg} alt="fries"/>
            </div>
            <div className="food">
                <img src={img.fruit-pie.jpg} alt="fruit pie"/>
            </div>
            <div className="food">
                <img src={img.lemon-cake.jpg} alt="lemon cake"/>
            </div>
            <div className="food">
                <img src={img.neko-ramen.jpg} alt="neko ramen"/>
            </div>
            <div className="food">
                <img src={img.org-cake.jpg} alt="orange cake"/>
            </div>
            <div className="food">
                <img src={img.pancake.jpg} alt="pancake"/>
            </div>
            <div className="food">
                <img src={img.tiramisu-cake.jpg} alt="tiramisu-cake"/>
            </div>
        </div>
        </>
    )
}

export default Menu