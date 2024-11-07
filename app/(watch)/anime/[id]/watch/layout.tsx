import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Otakuri | Просмотр аниме',
  description: 'Otakuri description',
};

export default function WatchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
