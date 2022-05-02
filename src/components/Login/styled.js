import { styled } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export const BackgroundColor = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  background: '$gradient',
});

export const CenterButton = styled(Link, {
  margin: '0 auto !important',
});

export const MessageError = styled('span', {
  fontSize: '12px',
  textAlign: 'center',
  color: '$error',
});
