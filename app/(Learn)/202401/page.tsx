import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Page() {
  // マークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), 'app/_docs/202401');
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // .md拡張子を除去してidを取得
    const id = fileName.replace(/\.md$/, '');

    // マークダウンファイルを文字列として読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // マークダウンファイルのメタデータ部分を解析する
    const matterResult = matter(fileContents);

    // idとメタデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  console.log(allPostsData)

  let photos = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {allPostsData.map(({ id }) => (
        <li key={id} className="list-none">
          <Link href={`/202401/achieve/${id}`} className="text-blue-200 underline">
            {id}
          </Link>
        </li>
      ))}
      <Link href="/" className="text-blue-200 underline">Homes</Link>
    </section>
  );
}