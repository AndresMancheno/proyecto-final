import { Switch, useTheme } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme as useNextTheme } from 'next-themes';

export default function ChangeTheme() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <>
      <Switch
        css={{ marginRight: '2rem' }}
        checked={isDark}
        color="warning"
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOff={<SunIcon />}
        iconOn={<MoonIcon color="yellow" />}
        shadow={isDark}
      />
    </>
  );
}
