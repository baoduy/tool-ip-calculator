import { Card, CardContent } from '@/components/ui/card';
import Logo from '@/components/AppLogo';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from './ui/menubar';

export default function AppMenu() {
  return (
    <Menubar>
      <Logo />
    </Menubar>
  );
}
