import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from "next/link";

export default function Home() {
  const codeString = `
    // MyReadonly<T>を実装してください
    // MyReadonlyは、Tのプロパティをすべて読み取り専用にする型です
    type MyReadonly<T> = {
      readonly [K in keyof T]: T[K]
    }
    
    interface Todo {
      title: string;
      description: string;
    }
    
    const todo: MyReadonly<Todo> = {
      title: "Hey",
      description: "foobar",
    };
  `
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>組み込みの型ユーティリティReadonly<T>を使用せず、T のすべてのプロパティを読み取り専用にする型を実装します。実装された型のプロパティは再割り当てできません。</h1>
      <SyntaxHighlighter language="typescript" style={dark}>
        {codeString.trim()}
      </SyntaxHighlighter>
      <Link href="/" className="text-blue-200 underline">Home</Link>
    </main>
  );
}
