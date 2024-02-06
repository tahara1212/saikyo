import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-main-body">
      <div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md text-center">
        <h1 className="text-xl">考えをまとめる場所</h1>
        
        <div className="text-center mt-5 leading-relaxed">
          <p>アウトプットのためにインプットをする</p>
          <p>価値を生み出すためにアウトプットをする</p>
          <p>価値は世の中のためになること全て</p>
          <p>家族や社会のためになること全て</p>
          <p>自分の為の人生なら生きることに意味はない</p>
          <br/>
          <p>一時的なインプットはすぐに忘れる</p>
          <p>断続的なアウトプットはすぐに錆びれる</p>
          <p>僕らの最大の弱点は諦めること</p>
          <p>継続の本質は想像力</p>
          <p>目的を達成した時のイメージが薄いほど手放すのも早い</p>
          <p>その先に何があるのかを鮮明に描き続けよう</p>
          <p>それは必ず手にしたいと思えるものだ</p>
        </div>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <div className="mt-5 grid grid-cols-4 gap-5">
          <Link href="202401" className="text-blue-200 underline">2024/01</Link>
          <Link href="202402" className="text-blue-200 underline">2024/02</Link>
          <Link href="202403" className="text-blue-200 underline">2024/03</Link>
          <Link href="202404" className="text-blue-200 underline">2024/04</Link>
          <Link href="202405" className="text-blue-200 underline">2024/05</Link>
          <Link href="202406" className="text-blue-200 underline">2024/06</Link>
        </div>
      </div>
    </main>
  );
}
