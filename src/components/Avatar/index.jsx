import { useAuth } from 'context/authContext';
import { StyledAvatar } from './styled';

export default function IconUser() {
  const { userConf } = useAuth();

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
      }}
    />
  );
}
