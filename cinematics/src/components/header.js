import React from "react";
import { Nav,NavLink, Bars,NavMenu,NavBtn,NavBtnLink} from './navBarElements'

const Navbar = () => {
  return (   
    <>
       <Nav>
           <Bars />
           <NavMenu>
               <NavLink to ='/home' activeStyle>
                  Home
               </NavLink>
           </NavMenu>
           <NavMenu>
               <NavLink to ='/recentwork' activeStyle>
                  Recent Work
               </NavLink>
           </NavMenu>
           <NavMenu>
               <NavLink to ='/showreel' activeStyle>
                  Show Reel
               </NavLink>
           </NavMenu>
           <NavMenu>
               <NavLink to ='/documentaries' activeStyle>
                  Documentaries
               </NavLink>
           </NavMenu>
       </Nav>
    </>
  );
};
export default Navbar;
