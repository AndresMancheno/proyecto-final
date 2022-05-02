import { DropDown ,MenuItem, NavA, Navbar, NavbarNav, NavLi } from './styled';
import React, {useState} from 'react';



export default function Dropdown(props){
    return (
        <Navbar>
            <NavbarNav> { props.children } </NavbarNav>
        </Navbar>
    );
}

export function NavItem(props){

    const [open, setOpen] = useState(false);
    return(
        <NavLi>
            <NavA href='#' onClick={() => setOpen(!open)}>
                {props.icon}
            </NavA>

            {open && props.children}
        </NavLi>
    );
}

export function DropdownMenu(){

    function DropdownItem(props){
        return (
            <MenuItem href="#">
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-button'>{props.rightIcon}</span>
            </MenuItem>
        );
    }
    return(
        <DropDown>
            <DropdownItem>Mi perfil</DropdownItem>
            <DropdownItem>
                Yo
            </DropdownItem>
        </DropDown>
    );
}