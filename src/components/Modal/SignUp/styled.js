import { styled } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export const CenterButton = styled(Link, {
  margin: '0 auto !important',
});

export const MessageError = styled('span', {
  fontSize: '12px',
  textAlign: 'center',
  color: '$error',
});
