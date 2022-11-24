import React from "react";
import { NavLink } from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import {GrProductHunt} from 'react-icons/gr';
import {BiCategory} from "react-icons/bi";
import {SiPagekit} from "react-icons/si";
import {BsFillCartCheckFill} from 'react-icons/bs'
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';

const NavItem = ({ label, to, rest ,icon }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={to} {...rest}>
      {icon} {label} 
      </NavLink>
    </li>
  );
};

const SideBar = () => {
  return (
    <aside className="main-sidebar">
      <ul className="list-unstyled">
          <NavItem to='/' label='home' icon={<AiFillHome/>} />
          <NavItem to='products' label="products" icon={<GrProductHunt/>}/>
          <NavItem to='categories' label="categories" icon={<BiCategory/>}/>
          <NavItem to='users' label="users" icon={<PeopleAltSharpIcon/>}/>
          <NavItem to='orders' label="orders" icon={<BsFillCartCheckFill/>}/>
          <NavItem to='page' label="Page" icon={<SiPagekit/>}/>
      </ul>
    </aside>
  );
};

export default SideBar;
