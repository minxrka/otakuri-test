import { Button } from '@/components/ui/button';
import React from 'react';
import { Beer } from 'lucide-react';

export default function Home() {
	return (
		<>
			<div className='flex flex-col gap-2 justify-center items-center h-screen'>
				<Button className=' font-Akira' variant='default'>
					okay let&#39;s go
				</Button>
				<Button className='' variant='destructive'>
					Сноввиasdasdasd
				</Button>
				<Button className='' variant='outline'>
					Сновви
				</Button>
				<Button className='' variant='secondary'>
					Сновви
				</Button>
				<Button className='text-white' variant='ghost'>
					Сновви
				</Button>
				<Button className='text-white' variant='link'>
					Сновви
				</Button>
				<Beer className='my-beer-icon size-16 m-2 text-white hover:text-amber-200 hover:drop-shadow-[0_2px_30px_rgba(252,211,77,0.65)] hover:translate-y-0.5 will-change-transform transition-colors-transform duration-500' />
				<h1 className='p-3 text-2xl font-bold text-primary-300 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 transition-colors-transform duration-300 active:duration-100 select-none'>
					минорка
				</h1>
				<p className='text-primary-200 text-2xl font-wiGuru'>
					1231ПРИВЕТ привет23123123ASDASDASD
				</p>
			</div>
		</>
	);
}
