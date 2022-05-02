import Dropdown, { DropdownMenu, NavItem } from '../Dropdown/Dropdown';
import { HeaderContainer, LogoContainer, PDropdown, PLogo, PUsuario } from './styled';

export default function Header(){
    return (
        <>
            <HeaderContainer>
                <div><PLogo>RGL NOTES</PLogo></div>
                <Dropdown>
                    <NavItem icon="Bobo">
                        <DropdownMenu />
                    </NavItem>
                    
                    
                </Dropdown>
                <div><PUsuario>USUARIO</PUsuario></div>
            </HeaderContainer>
        </>
    );
}