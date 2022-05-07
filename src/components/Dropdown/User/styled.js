import { styled } from '@nextui-org/react';
import { Content, RadioItem, Trigger } from '@radix-ui/react-dropdown-menu';

export const DropdownContent = styled(Content, {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const DropdownItem = styled(RadioItem, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '.5rem',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',

  '&:focus': {
    backgroundColor: '$yellow',
    fontSize: 14,
  },
});

export const MessageError = styled('span', {
  fontSize: '12px',
  textAlign: 'center',
  color: '$error',
});

export const UserNameContainer = styled(Trigger, {
  marginBottom: '.3rem',
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
export const StyledSelect = styled('select', {
  display: 'block',
  fontSize: '16px',
  fontWeight: 400,
  border: '1px solid #333333',
  padding: '10px',
  borderRadius: '10px',
  margin: '.10rem',
});

export const StyledOption = styled('option', {
  fontSize: '16px',
});
