import DatePicker from 'react-datepicker';
import { styled } from '@nextui-org/react';

export const StyledDataPicker = styled(DatePicker, {
  '& button': {
    height: '75px !important',
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
