import localFont from 'next/font/local';
import './globals.css';

const akira = localFont({
  src: './fonts/AKIRA/Akira_Expanded_Demo.ttf',
  variable: '--font-akira',
  weight: '400',
});
const blueCurve = localFont({
  src: './fonts/BLUECURVE/blue-curve-3.woff',
  variable: '--font-blueCurve',
  weight: '400',
});
const wiGuru = localFont({
  src: './fonts/WiGuru/wiguru.woff2',
  variable: '--font-wiGuru',
  weight: '400',
});
const gothamPro = localFont({
  src: [
    {
      path: './fonts/GOTHAMPRO/GothamPro-Light.woff2',
      weight: '300',
    },
    {
      path: './fonts/GOTHAMPRO/GothamPro.woff',
      weight: '400',
    },
    {
      path: './fonts/GOTHAMPRO/GothamPro-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/GOTHAMPRO/GothamPro-Bold.woff2',
      weight: '700',
    },
    {
      path: './fonts/GOTHAMPRO/GothamPro-Black.woff2',
      weight: '800',
    },
  ],
  variable: '--font-gothamPro',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link data-rh='true' rel='icon' href='../favicon.ico' />
      </head>
      <body
        className={`${akira.variable} ${blueCurve.variable} ${wiGuru.variable} ${gothamPro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
