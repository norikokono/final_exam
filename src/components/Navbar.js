import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props)=>{
    function handleSignOut(){
        props.destroySession()
    }
    return(
        
        <nav style={{textDecoration: 'none'}}>
            <img src="images/coinImage.jpg" alt="" style={{width: '60px', height:'60px'}}/>
            <NavLink style={{color: 'white', marginLeft: 200, marginRight: 40}} to='/home'>Home</NavLink>
            <NavLink style={{color: 'white', marginRight: 40}} to='/auctions'>Auctions Index</NavLink>
            <NavLink style={{color: 'white', marginRight: 40}} to='/auctions/new'>New Auction</NavLink>
            
            {
                props.currentUser ? 
                (
                <div>
                    <span>{props.currentUser.first_name}</span> 
                    |
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                )
                :
                <NavLink style={{color: 'white', marginRight: 40}} to='/sign_in'>Sign In</NavLink>
            }
            
            <NavLink style={{color: 'white', marginRight: 40}} to='/sign_up'>Sign Up</NavLink>
        </nav>
    
    )
}
export default Navbar;