import { Input, styled } from '@nextui-org/react';

export const FormContainer = styled('form', {
  display: 'flex',
  justifyContent: 'center',
});

export const StyledInput = styled(Input, {
  marginRight: '2rem',
});

export const SendButton = styled('button', {
  background: 'transparent',
  border: 'none',
  marginTop: '5px',
  marginRight: '10px',
  marginLeft: '10px',
  width: '30px',
  height: '30px',
  dflex: 'center',
  borderRadius: '$rounded',
  cursor: 'pointer',

  '&:hover': {
    '& svg': {
      transform: 'scale(1.1)',
      transition: '.4s ease-in-out',
    },
  },
});
