import { Modal, styled } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export const StyledModal = styled(Modal, {
  variants: {
    isDark: {
      true: {
        background: '#222',
      },
    },
  },
});

export const CenterButton = styled(Link, {
  margin: '0 auto !important',
});

export const MessageError = styled('span', {
  fontSize: '12px',
  textAlign: 'center',
  color: '$error',
});
