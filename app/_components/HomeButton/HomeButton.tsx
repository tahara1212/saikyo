import Link from "next/link";

export const HomeButton = () => {
  return (
    <div className='mt-12'>
      <Link href="/" className="text-gray-400 underline">Home</Link>
    </div>
  )
}