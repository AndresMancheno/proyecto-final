import { styled } from '@nextui-org/react';

export const Navbar = styled('nav' , {
    height : '60px',
    backgroundColor : '#242526',
    padding : '0 1rem',
    borderBottom : '1px solid #474a4d',
});

export const NavbarNav = styled('nav', {
    maxWidth : '100%',
    height : '100%',
    display : 'flex',
    justifyContent : 'flex-end',
});

export const NavLi = styled('li', {
    width : 'calc((60px) * 0.8)',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
});

export const NavA = styled('a', {
    width : 'calc((60px) * 0.5)',
    height : 'calc((60px) * 0.5)',
    backgroundColor : '#484a4d',
    borderRadius : '50%',
    padding : '5px',
    margin : '2px',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    transition : 'filter 300ms',
    '&:hover' : {
        filter : 'brightness(1.2)',
    }
});

export const DropDown = styled('div', {
    position : 'absolute',
    top : '58px',
    width : '300px',
    transform : 'translateX(45%)',
    backgroundColor : '#242526',
    border : '1px solid #474a4d',
    borderRadius : '8px',
    padding : '1rem',
    overflow : 'hidden',
});

export const MenuItem = styled('a', {
    height : '50px',
    display : 'flex',
    alignItems : 'center',
    borderRadius : '8px',
    transition : 'background 500ms',
    padding: '0.5rem',
    '&:hover' : {
        backgroundColor : '#525357',
    }
});

export const iconoDerecha = styled('span', {
    marginLeft: 'auto',
});
