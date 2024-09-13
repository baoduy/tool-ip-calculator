import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import logo from '@/assets/drunk-logo.png'; // Assuming the logo is stored in the assets folder

export default function AppLogo() {
  return (
    <Avatar className='w-full h-auto'>
      <AvatarImage src={logo} alt='drunkcoding.net'></AvatarImage>
      <AvatarFallback>drunkcoding.net</AvatarFallback>
    </Avatar>
  );
}
