export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="card">
      <p>id:{id}</p>
      <p>page</p>
    </div>
  );
}
