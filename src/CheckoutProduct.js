import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider';

function CheckoutProduct({Id,Image,Title,Price,Rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'Remove_From_Basket',
            Id:Id
        })
    }
    return (
        <div className="checkout_product">
            <img className="checkout_product_image" src={Image} alt="" />
            <div className="checkout_product_info">
                <p className="checkout_product_title">
                    {Title}
                </p>
                <p classname="checkout_product_price" >
                    <small>MRP Rs.</small>
                    <stromg>{Price}</stromg>
                </p>
                <div className="checkout_product_rating">
                    {Array(Rating)
                    .fill()
                    .map(() => (
                        <p><StarIcon /></p>
                    ))}
                </div>
                <button onClick={removeFromCart} >Delete this item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
