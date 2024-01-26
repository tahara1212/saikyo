import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>202401</h1>
      <Link href="/" className="text-blue-200 underline">Home</Link>
    </main>
  );
}
