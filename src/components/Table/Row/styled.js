import { styled } from '@nextui-org/react';

export const RowCell = styled('td', {
  variants: {
    taskOverdue: {
      true: {
        color: 'red',
      },
    },
  },
});
