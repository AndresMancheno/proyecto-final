import { Avatar } from '@nextui-org/react';
import { useAuth } from '../../context/authContext';

export default function IconUser() {
  const { userName } = useAuth();
  return (
    <>
      <Avatar
        text={userName}
        pointer="true"
        zoomed="true"
        color="warning"
        size="lg"
      />
    </>
  );
}
