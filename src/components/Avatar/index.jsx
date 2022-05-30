import { Avatar } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { pickTextColorBasedOnBgColor } from 'lib/theme/theme';
import { useEffect, useState } from 'react';

export default function IconUser() {
  const { userConf } = useAuth();
  const [textColor, setTextColor] = useState('#fff');

  useEffect(() => {
    setTextColor(pickTextColorBasedOnBgColor(userConf.color));
  }, [userConf.color, userConf.email]);

  return (
    <Avatar
      text={userConf.name}
      pointer="true"
      zoomed="true"
      bordered
      size="lg"
      src={userConf.image}
      css={{
        '& .nextui-avatar-bg': {
          background: userConf.color,
        },

        '& .nextui-avatar-text': {
          color: `${textColor} !important`,
        },
      }}
    />
  );
}
