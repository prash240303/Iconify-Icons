import React from "react";

export default function Nav()
{
 return (
    <div className="Nav-main-container">
        
        <div className="Logo-container"> 

            <img src="/Assets/Iconify.svg" alt="" className="Logo"/>
           {/* <div className="logo-name">Iconify</div>    */}
        </div>

        <ul className="nav-menu">
            <li className="nav-menu-items"> <a href=""> Icons</a> </li>
            <li className="nav-menu-items"> <a href="">Documentation</a> </li>
            <li className="nav-menu-items"> <a href="https://twitter.com/prash2403">connect with me</a> </li>
        </ul>

        <div className="nav-right">share with love on <a href="https://twitter.com/home">Twitter</a></div>

</div>
 ) 
}