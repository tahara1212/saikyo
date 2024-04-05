import type { Metadata } from "next";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saikyo",
  description: "Peita's Saikyo",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-main-body">
      <div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md text-center">
      {children}
      {modal}
      <div id="modal-root" />
      </div>
    </main>
  );
}
