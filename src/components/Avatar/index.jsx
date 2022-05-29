import { useAuth } from 'context/authContext';
import { pickTextColorBasedOnBgColor } from 'lib/theme/theme';
import { useEffect, useState } from 'react';
import { StyledAvatar } from './styled';

export default function IconUser() {
  const { userConf } = useAuth();
  const [textColor, setTextColor] = useState('#fff');

  useEffect(() => {
    setTextColor(pickTextColorBasedOnBgColor(userConf.color));
  }, [userConf.color, userConf.email]);

  return (
    <StyledAvatar
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
