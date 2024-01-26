import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>app main</h1>
      <Link href="202401" className="text-blue-200 underline">2024/01</Link>
    </main>
  );
}
