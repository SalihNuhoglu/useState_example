import React from "react";

const Header = (props)=> {
    return(
         <header style={
            {height:'100px', 
            backgroundColor:'gray',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'}}>
            <div>
                <img style={{height:'100px'}} 
                src="https://s3-symbol-logo.tradingview.com/logo-yazilim--600.png">
                </img>
            </div>
            <p>{props.username}</p>
         </header>
    );
};

export default Header;