import { Text } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { motion } from 'framer-motion';
import ChangeTheme from 'components/Switch/Theme';
import { useNavigate } from 'react-router-dom';
import DropdownUser from 'components/Dropdown/User';
import {
  HeaderContainer,
  HeaderItemContainer,
  RightHeaderSide,
} from './styled';

export default function Header() {
  const { userConf } = useAuth();
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate('/');
  };
  return (
    <>
      <HeaderContainer>
        <HeaderItemContainer marginLeft>
          <Text
            h2
            color="#fff"
            css={{ cursor: 'pointer' }}
            onClick={() => returnToHome()}
          >
            RGL Notes
          </Text>
        </HeaderItemContainer>
        <HeaderItemContainer marginRight>
          <RightHeaderSide>
            <ChangeTheme />
            <DropdownUser />
          </RightHeaderSide>
        </HeaderItemContainer>
      </HeaderContainer>
    </>
  );
}
