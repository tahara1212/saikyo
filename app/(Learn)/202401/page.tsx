import Link from 'next/link';

export default function Page() {
  let photos = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {photos.map((id) => (
          <Link className="text-blue-200 underline" key={id} href={`/202401/achieve/${id}`} passHref>
            {id}
          </Link>
        ))}
      <Link href="/" className="text-blue-200 underline">Home</Link>
    </section>
  );
}