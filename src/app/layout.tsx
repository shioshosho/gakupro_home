import { Providers } from "./providers";
import './globals.css'

const siteName= 'MetaPlus Home';
const description = 'メタプラスのホームページ';
const url = 'http://localhost:3000';

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@サイト用アカウントのTwitterID',
    creator: '@s_nezaki',
  },
  verification: {
    google: 'サーチコンソールのやつ',
  },
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="hidden-scrollbar">
      <head />
      <body>        
        <div className="container flex flex-col w-screen h-screen">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
