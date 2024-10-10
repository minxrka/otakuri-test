import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import React from 'react';
import { RippleButton } from '../ui/ripple-button';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Logo from '/public/logo.svg';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const random = Math.floor(Math.random() * 10);

  return (
    <header className={cn('flex items-center justify-between py-3', className)}>
      <nav className='flex items-center gap-8'>
        <Link href='/' passHref>
          <Image priority src={Logo} alt='otakuri logo' />
        </Link>
        <div className='flex items-center gap-4 max-lg:hidden'>
          <Link href='/anime' passHref>
            <RippleButton variant='header'>Аниме</RippleButton>
          </Link>
          <Link href={`/anime/${random}`} passHref>
            <RippleButton variant='header'>Случайное</RippleButton>
          </Link>
          <Link href='/leaderboard' passHref>
            <RippleButton variant='header'>Лидерборд</RippleButton>
          </Link>
        </div>
      </nav>

      <div className='flex items-center gap-5 max-lg:gap-0'>
        <RippleButton variant='header'>
          <Search color='white' className='size-5' />
        </RippleButton>
        <Link href='/login' passHref>
          <RippleButton variant='header'>Войти</RippleButton>
        </Link>
      </div>
    </header>
  );
};
