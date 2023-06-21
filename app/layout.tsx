import "./globals.css";
import localFont from "next/font/local";

const font = localFont({
  src: "../fonts/Geologica-Regular.ttf",
});

export const metadata = {
  title: "DF Ares round 1",
  description: "Who see this is an idiot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
      <body className={`${font.className} no-scrollbar`}>{children}</body>
    </html>
  );
}
