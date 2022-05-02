import { User } from '@nextui-org/react';
import { useAuth } from '../../context/authContext';

export default function IconUser() {
  const { userName } = useAuth();
  return (
    <>
      <User
        src="https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
        pointer
        zoomed
        css={{ marginRight: '3rem' }}
      />
    </>
  );
}
