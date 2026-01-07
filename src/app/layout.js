import "./globals.css";
import { Fredoka } from "next/font/google";
 
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
       {children}
      </body>
    </html>
  );
}