import { Text } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import DropdownUser from '../Dropdown/User';
import { motion } from 'framer-motion';
import { GreetingUser, HeaderContainer, HeaderItemContainer } from './styled';

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
          <DropdownUser />
        </HeaderItemContainer>
      </HeaderContainer>

      <motion.div animate={{ y: 10 }} transition={{ duration: 0.5 }}>
        <GreetingUser h2>Bienvenid@ {userName}</GreetingUser>
      </motion.div>
    </>
  );
}
