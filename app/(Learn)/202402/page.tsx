import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from "next/link";

export default function Home() {
  const codeString = `
    // Tuple型からObject型を生成するTupleToObjectを実装してください。

    type TupleToObject<T extends readonly any[]> = {
      [K in T[number]]: K
    }
    
    const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
    
    type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  `
  const codeString02 = `
  // 配列の長さを返すLength<T>を実装してください。
  type Length<T　extends number[] | string[]> = T['length']

  type tesla = ["tesla", "model 3", "model X", "model Y"];
  type spaceX = [
    "FALCON 9",
    "FALCON HEAVY",
    "DRAGON",
    "STARSHIP",
    "HUMAN SPACEFLIGHT"
  ];

  type teslaLength = Length<tesla>; // expected 4
  type spaceXLength = Length<spaceX>; // expected 5
`
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{`組み込みの型ユーティリティReadonly<T>を使用せず、T のすべてのプロパティを読み取り専用にする型を実装します。実装された型のプロパティは再割り当てできません。`}</h1>
      <SyntaxHighlighter language="typescript" style={tomorrow}>
        {codeString.trim()}
      </SyntaxHighlighter>
      <br/>
      <h1>{`タプルTを受け取り、そのタプルの長さを返す型Length<T>を実装します。`}</h1>
      <SyntaxHighlighter language="typescript" style={tomorrow}>
        {codeString02.trim()}
      </SyntaxHighlighter>
      <Link href="/" className="text-blue-200 underline">Home</Link>
    </main>
  );
}
