import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import logo from '@/assets/drunk-icon.svg'; // Assuming the logo is stored in the assets folder

export default function AppLogo() {
  return (
    <Avatar className='w-24 h-auto'>
      <AvatarImage src={logo} alt='drunkcoding.net'></AvatarImage>
      <AvatarFallback>drunkcoding.net</AvatarFallback>
    </Avatar>
  );
}
