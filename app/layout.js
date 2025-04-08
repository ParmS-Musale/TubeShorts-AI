import "./globals.css";
import Provider from "./Provider";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={outfit.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
