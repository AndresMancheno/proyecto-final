import { Button, styled } from '@nextui-org/react';

export const Navbar = styled('nav', {
  height: '60px',
  padding: '0 1rem',
  marginTop: '0.2rem',
});

export const NavbarNav = styled('nav', {
  maxWidth: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const NavLi = styled('li', {
  width: 'calc((60px) * 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const NavA = styled('a', {
  width: 'calc((60px) * 0.5)',
  height: 'calc((60px) * 0.5)',
  borderRadius: '50%',
  padding: '5px',
  margin: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'filter 300ms',
  '&:hover': {
    filter: 'brightness(1.2)',
  },
});

export const DropDown = styled('div', {
  position: 'absolute',
  top: '75px',
  width: 'min-content',
  backgroundColor: '$snow',
  border: '1px solid #000',
  borderRadius: '8px',
  padding: '1rem',
  overflow: 'hidden',
  marginRight: '1rem',

  '@xs': {
    width: '200px',
  },

  transform: 'translateX(45%)',
});

export const MenuItem = styled('button', {
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  transition: 'background 500ms',
  padding: '0.5rem',
  color: '#000',
  marginBottom: '0.5rem',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$yellow',
  },
});
