import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider'
function Product({ Id, Title, Price, Rating, Image }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log("this is the basket", basket);
    const addToBasket = () => {
        dispatch({
            type: 'Add_to_basket',
            item: {
                Id: Id,
                Title: Title,
                Image: Image,
                Price: Price,
                Rating: Rating,
            },
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{Title}</p>
                <small>MRP Rs.</small>
                <strong>{Price}</strong>
                <div className="product_rating">
                    {Array(Rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon />
                        ))}
                </div>
            </div>
            <div>
                <img className="product_img" src={Image} alt="" />
            </div>
            <div>
                <button onClick={addToBasket} className="item_button">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
