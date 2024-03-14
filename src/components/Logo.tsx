import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Logo = () => {
  const { theme } = useTheme();
  return (
    <Link href='/'>
      {theme === 'dark' ? (
        <Image src='/Logo-light.svg' width={58} height={58} priority alt='' />
      ) : (
        <Image src='/Logo.svg' width={58} height={58} priority alt='' />
      )}
    </Link>
  );
};

export default Logo;
