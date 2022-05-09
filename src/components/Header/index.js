import { Switch, Text, useTheme } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import DropdownUser from '../Dropdown/User';
import { motion } from 'framer-motion';
import {
  GreetingUser,
  HeaderContainer,
  HeaderItemContainer,
  RightHeaderSide,
} from './styled';
import { useTheme as useNextTheme } from 'next-themes';
import ChangeTheme from '../Switch/theme';

export default function Header() {
  const { userName } = useAuth();
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
        <GreetingUser h2>Bienvenid@ {userName}</GreetingUser>
      </motion.div>
    </>
  );
}
