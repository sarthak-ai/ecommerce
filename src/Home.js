import React from 'react'
import './Home.css'
import Product from './Product.js'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img alt="" className="banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Black_friday/GW/Updated/talhero_1500x600._CB414379446_.jpg" />
                <div className="row"> 
                    <Product 
                        Id={123}
                        Title="Badminton Racquet"
                        Price={2299}
                        Rating={4}
                        Image="https://images-na.ssl-images-amazon.com/images/I/71sJg163nAL._SL1500_.jpg"
                    />
                    <Product 
                        Id={132}
                        Title="Earphones"
                        Price={1399}
                        Rating={4}
                        Image="https://m.media-amazon.com/images/I/71a1T5ytIoL._AC_UY218_.jpg"
                    />
                    <Product 
                        Id={213}
                        Title="T-Shirt"
                        Price={419}
                        Rating={3}
                        Image="https://m.media-amazon.com/images/I/51T+O9-gpKL._AC_UL320_.jpg"
                    />
                </div>
                <div className="row">
                    <Product 
                        Id={231}
                        Title="Microwave"
                        Price={4760}
                        Rating={4}
                        Image="https://m.media-amazon.com/images/I/610H0eAFStL._AC_UY218_.jpg"
                    />
                    <Product 
                        Id={312}
                        Title="Maggi"
                        Price={129}
                        Rating={4}
                        Image="https://m.media-amazon.com/images/I/81WyWDbuqsL._AC_UL320_.jpg"
                    />
                </div>
                <div className="row">
                    <Product 
                        Id={321}
                        Title="Home Theatre"
                        Price={11990}
                        Rating={5}
                        Image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/MSO/Samsung_Gw_1242x450._CB414369639_SY500_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
