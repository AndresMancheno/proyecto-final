import { Avatar } from '@nextui-org/react';
import { useAuth } from 'context/authContext';

export default function IconUser() {
  const { userName, userImage, userColor } = useAuth();
  return (
    <>
      <Avatar
        text={userName}
        pointer="true"
        zoomed="true"
        color={userColor}
        bordered
        size="lg"
        src={userImage}
      />
    </>
  );
}
