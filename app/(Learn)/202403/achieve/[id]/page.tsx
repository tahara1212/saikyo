// app/(Learn)/202401/@modal/(.)achieve/[id]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ParsedUrlQuery } from 'querystring';
import { CREATE_DATE_PATH } from '../../page';

interface Params extends ParsedUrlQuery {
  id: string;
}

interface ModalPageProps {
  params: Params;
}

export default function ModalPage({ params }: ModalPageProps) {
  const { id } = params;
  const filePath = path.join(process.cwd(), `app/_docs/${CREATE_DATE_PATH}`, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  return (
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className='markdown'>
          {content}
        </ReactMarkdown>
      </div>
  );
}