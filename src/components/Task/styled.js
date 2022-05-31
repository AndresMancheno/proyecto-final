import { Button, styled } from '@nextui-org/react';

export const StyledTaskTable = styled('table', {
  width: '80%',
  textAlign: 'center',
  marginTop: '2rem',
  marginBottom: '4rem',

  padding: '10px',

  '@xsMax': {
    display: 'block',
    margin: '0 auto',
    overflowX: 'scroll',
  },
  variants: {
    isDark: {
      true: {
        borderColor: '#fff',
      },
    },
  },
});

export const IconButton = styled('button', {
  dflex: 'center',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0',
  margin: '0',
  bg: 'transparent',
  transition: '$default',
  '&:hover': {
    opacity: '0.8',
  },
  '&:active': {
    opacity: '0.6',
  },
});

export const ReturnButton = styled(Button, {
  marginTop: '2rem !important',
  marginLeft: '3rem',

  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'all 0.4s linear',
  },
  '@smMax': {
    marginLeft: '1rem',
  },
});
