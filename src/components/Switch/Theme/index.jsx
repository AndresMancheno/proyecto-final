import { useTheme } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme as useNextTheme } from 'next-themes';
import { StyledSwitch } from './styled';

export default function ChangeTheme() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <StyledSwitch
      css={{ marginRight: '1rem', marginLeft: '1rem' }}
      checked={isDark}
      color="secondary"
      bordered
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      iconOff={<SunIcon />}
      iconOn={<MoonIcon />}
      shadow={isDark}
    />
  );
}
