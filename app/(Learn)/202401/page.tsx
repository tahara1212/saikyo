import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { HomeLink } from '@/app/_components/HomeLink/HomeLink';
import { ModalLinkList } from '@/app/_components/ModalButton/ModalLinkList';

export const CREATE_DATE_PATH = "202401"

export default function Page() {
  // マークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), `app/_docs/${CREATE_DATE_PATH}`);
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

  return (
    <>
      <section>
        <ModalLinkList allPostsData={allPostsData} path={`/${CREATE_DATE_PATH}/achieve`} />
      </section>
      <HomeLink />
    </>
  );
}