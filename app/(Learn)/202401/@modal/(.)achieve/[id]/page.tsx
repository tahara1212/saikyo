// app/(Learn)/202401/@modal/(.)achieve/[id]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Modal } from './modal';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ModalPage({ params }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'app/_docs/202401', `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  return (
    <Modal>
      {/* react-markdown を使用してマークダウンの内容をレンダリングします */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </Modal>
  );
}