import { Container, Header } from '@/src/components/shared';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Otakuri | Аниме',
	description: 'Otakuri description',
};

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='min-h-screen'>
			<Container>
				<Header />
				{children}
			</Container>
		</main>
	);
}
