import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
