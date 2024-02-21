import Image from "next/image";
import Link from "next/link";

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div>
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
        {photos.map((id) => (
          <Link className="text-blue-200 underline" key={id} href={`/achieve/${id}`} passHref>
            {id}
          </Link>
        ))}
      </div>

    </div>
  );
}
