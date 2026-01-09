import "./globals.css";
import { Fredoka } from "next/font/google";
import { Providers } from './providers';
 
const fredoka = Fredoka({
  subsets: ["latin"],
});


export default function RootLayout({children}) {  
  return (
    <html className={fredoka.className}>
      <head >
        <title>Yarelly Berger Portfolio</title>
      </head>
      <body>
       <Providers>{children}</Providers>
      </body>
    </html>
  );
}