import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "blink",
  description: "blink",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        
      </body>
   
    </html>
  );
}
