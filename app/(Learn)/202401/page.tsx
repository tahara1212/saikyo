import Link from 'next/link';

export default function Page() {
  let photos = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link className="card" key={id} href={`/202401/achieve/${id}`} passHref>
          {id}
        </Link>
      ))}
    </section>
  );
}