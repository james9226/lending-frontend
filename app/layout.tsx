import { Metadata } from "next";
import "@styles/global.css";
import { Providers } from "@app/providers";
import BackgroundStyle from "@app/background";
export const metadata: Metadata = {
  title: 'Lendotopia',
  description: 'A new way of doing banking!',
  icons: {
    icon: '/assets/images/loan-svgrepo-com.svg',
  },
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Providers>
            <BackgroundStyle>
          {children}
            </BackgroundStyle>
          </Providers>
        </main>
        {/* <Footer /> */}
    </body>
  </html>
);
}