import { Text } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { motion } from 'framer-motion';
import ChangeTheme from 'components/Switch/Theme';
import DropdownUser from 'components/Dropdown/User';
import {
  GreetingUser,
  HeaderContainer,
  HeaderItemContainer,
  RightHeaderSide,
} from './styled';

export default function Header() {
  const { userConf } = useAuth();

  return (
    <>
      <HeaderContainer>
        <HeaderItemContainer marginLeft>
          <Text h2 color="#fff">
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

      <motion.div animate={{ y: 10 }} transition={{ duration: 0.5 }}>
        <GreetingUser h2>Bienvenid@ {userConf.name}</GreetingUser>
      </motion.div>
    </>
  );
}