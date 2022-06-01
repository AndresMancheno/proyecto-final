import { Button, styled } from '@nextui-org/react';

export const StyledTaskTable = styled('table', {
  width: '60%',
  textAlign: 'center',
  margin: '0 auto',
  marginTop: '2rem',

  padding: '10px',

  '@md': {
    width: '50%',
    margin: '0 auto',
    marginTop: '2rem',
  },

  '@xsMax': {
    display: 'block',
    margin: '0 auto',
    marginTop: '2rem',
    overflowX: 'scroll',
    width: '80%',
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
