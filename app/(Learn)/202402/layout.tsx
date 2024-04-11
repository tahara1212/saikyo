import type { Metadata } from "next";

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
    <main className="flex min-h-screen flex-col items-center justify-center text-main-body">
      <div className="mx-auto w-full max-w-screen-md text-center">
      {children}
      {modal}
      <div id="modal-root" />
      </div>
    </main>
  );
}
