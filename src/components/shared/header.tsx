import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/src/lib/utils';
import { RippleButton } from '../ui/ripple-button';
import { Search } from 'lucide-react';
import animeData from '/src/data/animeData.json';
import Logo from '/app/logo.svg';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        'flex items-center justify-between py-3 z-20 relative',
        className
      )}>
      <nav className='flex items-center gap-8'>
        <Link href='/' passHref>
          <Image priority src={Logo} alt='otakuri logo' />
        </Link>
        <div className='flex items-center gap-4 max-lg:hidden'>
          <Link href='/anime' passHref>
            <RippleButton variant='header'>Аниме</RippleButton>
          </Link>
          <Link
            href={`/anime/${
              animeData.list.map((anime) => anime.id)[
                Math.floor(
                  Math.random() * animeData.list.map((anime) => anime.id).length
                )
              ]
            }`}
            passHref>
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
