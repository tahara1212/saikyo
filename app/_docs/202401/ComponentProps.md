## ComponentProps

Atomic Design でいう Atoms に相当するような汎用的なコンポーネントは、メンテナンスコストを抑えるべきです。
以下のような限定的な Props を受け取る型はメンテナンスコストが高いです。

```TypeScript
type Props = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}
export const Input = ({ value, onChange, onBlur }: Props) => (
  <input
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className={styles.input}
   />
)
```
上記の実装では、新たに onFocus を付与したくなった場合に Props を追加する必要があります。
Atoms は汎用的なコンポーネント群であり、様々なユースケースに応えられる必要があります。
よって、このように都度追加する運用はメンテナンスコストが高いです。
```TypeScript
type Props = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement> // <- New
}
export const Input = ({ value, onChange, onBlur, onFocus }: Props) => (
  <input
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus} // <- New
    className={styles.input}
   />
)
```
@types/reactにComponentPropsという型定義があるので、これを利用することでこの問題を回避します。
Generics に文字列リテラルでタグ名指定をすれば、受け取りうる全ての Props 型を拾うことができます。「本来のタグとして振る舞ってほしいコンポーネント」の場合、Props の型定義は頑張ってはいけません。
```TypeScript
type Props = React.ComponentProps<'input'> // <- here

export const Input = ({ value, onChange, onBlur, onFocus }: Props) => (
  <input
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    className={styles.input}
   />
)
```
ここでの ComponentProps は、input タグが受け取りうる全ての props を型指定します。
分割代入を使用することで、それぞれをマッピングする必要もなくなります。
```TypeScript
type Props = React.ComponentProps<'input'>

export const Input = (props: Props) => (
  <input
    {...props} // <- props を全て渡す（onFocus や className も含まれる）
    className={styles.input} // <- こちらの指定が後勝ちになる
  />
)
```
props で受け取った className と、コンポーネントに施しておく className を共存させたい場合、clsxなどを利用して、スタイルを合成することができます。これで、ちょっとした style 修正の余地を残すことができます。
```TypeScript
type Props = React.ComponentProps<'input'>

export const Input = ({ className, ...props }: Props) => (
  <input
    {...props} // <- className 以外、全ての props を分割代入
    className={clsx(className, styles.input)}
  />
)
```
逆に「className を受け取りたくない・微修正を許容したくない」という設計思想もあるかと思います。そういった設計の場合、TypeScript から標準で提供されているOmit型を使いましょう。
```TypeScript
type Props = Omit<React.ComponentProps<'input'>, 'className'>

export const Input = (props: Props) => (
  <input
    {...props} // <- className は含まれない（型エラーで事前に弾かれる）
    className={styles.input}
  />
)
```
