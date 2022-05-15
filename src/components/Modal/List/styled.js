import { Card, Modal, styled } from '@nextui-org/react';

export const StyledModal = styled(Modal, {
  variants: {
    isDark: {
      true: {
        background: '#222',
      },
    },
  },
});

export const MessageError = styled('span', {
  fontSize: '12px',
  textAlign: 'center',
  color: '$error',
});

export const StyledInput = styled('input', {
  display: 'block',
  fontSize: '16px',
  fontWeight: 400,
  border: '1px solid #333333',
  padding: '10px',
  borderRadius: '10px',
  margin: '.10rem',
});

export const InputColorContainer = styled('div', {
  display: 'flex',
  fontSize: '16px',
  fontWeight: 400,
  border: '1px solid rgb(51,51,51)',
  padding: '10px',
  borderRadius: '10px',
  margin: '.1rem',
  justifyContent: 'space-between',
  marginBottom: '1rem',
});

export const InputColor = styled('input', {
  borderRadius: '10px',
  marginRight: '.5rem',
});
