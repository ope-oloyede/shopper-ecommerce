import React, {useContext} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt=""/>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-left">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                    </div>
                    <div className="productdisplay-right-prices-right">
                        <div className="productdisplay-right-price-new">${product.new_price}</div>
                    </div> 
                    {/* <div className="productdisplay-right-price-new">${product.new_price}</div> */}
                </div> 
                
                <div className="productdisplay-right-description">
                    6.1-inch Super Retina XDR OLED display, offering vibrant colors and sharp resolution.
                    Dual-camera setup with a 12 MP main sensor and a 12 MP ultra-wide sensor, enabling high-quality photos and videos.
                    Powered by the A15 Bionic chip, ensuring smooth performance and efficient multitasking.
                </div>
                <div className="productdisplay-right-color">
                    <h1>COLOR</h1>
                    <div className="productdisplay-right-colors">
                        <div>R</div>
                        <div>B</div>
                        <div>W</div>
                        <div>P</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Brand </span> Apple</p>
                <p className="productdisplay-right-category"><span>Operating System </span> iOS 16</p>
                <p className="productdisplay-right-category"><span>Memory Storage <br/> Capacity </span> 128 GB  </p>
                <p className="productdisplay-right-category"><span>Cellular Technology </span> 5G</p>
                <p className="productdisplay-right-category"><span>Model Name </span> iPhone 14</p> 
            </div>
        </div>
    )

}

export default ProductDisplay