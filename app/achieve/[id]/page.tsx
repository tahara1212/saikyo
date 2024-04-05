// URLを直接叩くと表示されるページ
export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div className="card">id:{id}</div>;
}
