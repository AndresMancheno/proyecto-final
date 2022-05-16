import { Modal, styled } from '@nextui-org/react';

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
