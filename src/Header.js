import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
function Header() {
    const [{basket, user}, dispatch]= useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="Header">
            <Link to="/">
                <div className="Logo">
                    <img
                        className="Amazon_Logo"
                        src="http://www.customerservicecontacts.com/wp-content/uploads/2018/01/amazon-logo.jpg"
                        alt=""
                    />
                </div>
            </Link>
            <div className="Search">
                <input className="Search_Input" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_right">
                <Link to={!user && "/login"}> 
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_option1">Hello Guest</span>
                    <span className="header_option2">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <div className="header_option">
                    <span className="header_option1">Returns and</span>
                    <span className="header_option2">Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_option1">Yours</span>
                    <span className="header_option2">Prime</span>
                </div>
                <Link to="/checkout" >
                    <div className="Basket" >
                        <AddShoppingCartIcon className="header_AddCart" />
                        <span className="Items_Count header_option2" >
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header
