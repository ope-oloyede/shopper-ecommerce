import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="description-navigator">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p> This is an online platform where businesses and individuals can sell products or services to customers. 
                    It acts as a virtual storefront that facilitates browsing, purchasing, and managing orders, often with features designed to enhance the shopping experience.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;