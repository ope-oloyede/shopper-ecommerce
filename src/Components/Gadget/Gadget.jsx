import React from 'react'
import './Gadget.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Gadget = () => {
    return (
        <div className='gadget'>
            <h1>HOT DEALS</h1>
            <hr/>
            <div className="deals">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Gadget