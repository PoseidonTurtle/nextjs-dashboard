import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import GoogleAnalytics from '@/components/GoogleAnalytics';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
