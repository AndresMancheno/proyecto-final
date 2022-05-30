import { Button, styled } from '@nextui-org/react';

export const StyledTaskTable = styled('table', {
  margin: '0 auto',
  width: '500px',
  textAlign: 'center',
  marginTop: '2rem',

  border: '1px solid black',
  borderRadius: '10px',
  padding: '10px',

  '@xsMax': {
    width: 'unset',
    display: 'block',
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

// Badge component will be available as part of the core library soon
export const StyledBadge = styled('span', {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: '$2 $3',
  margin: '0 2px',
  fontSize: '10px',
  fontWeight: '$bold',
  borderRadius: '14px',
  letterSpacing: '0.6px',
  lineHeight: 1,
  boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
  alignItems: 'center',
  alignSelf: 'center',
  color: '$white',
  variants: {
    type: {
      active: {
        bg: '$successLight',
        color: '$successLightContrast',
      },
      paused: {
        bg: '$errorLight',
        color: '$errorLightContrast',
      },
      vacation: {
        bg: '$warningLight',
        color: '$warningLightContrast',
      },
    },
  },
  defaultVariants: {
    type: 'active',
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

  '@smMax': {
    marginLeft: '1rem',
  },
});
