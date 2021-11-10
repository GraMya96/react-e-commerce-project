import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.config';
import CartIcon from '../cart/cart-icon/cart-icon.jsx';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.jsx';


const Header = () => {

    const hidden = useSelector( state => state.cart.hidden );
    const currentUser = useSelector( state => state.user.currentUser );

    const handleLogout = () => {
        auth.signOut();
    }

    return (
        <div className="header">
            <NavLink
                to="/"
                className='logo-container'>
                <Logo className='logo' />
            </NavLink>

            <div className="other-links">

                <NavLink className='option' to='/shop'>
                    Shop
                </NavLink>

                <NavLink className='option' to='/contacts'>
                    Contacts
                </NavLink>

                { currentUser
                    ? (
                        <div className="option" onClick={ handleLogout}>Sign Out</div>
                    )
                    : (
                        <NavLink className='option' to='/sign-in'>
                            Sign In
                        </NavLink>
                    )
                }

                <CartIcon className="option" />

            </div>

            { hidden ? null : <CartDropdown /> }
        </div>
    )

}


export default Header;