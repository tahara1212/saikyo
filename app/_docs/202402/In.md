# In 演算子
以下のような構文で、オブジェクトの中にプロパティが含まれるかどうかを検知します。
```JavaScript
if ("prop" in object) {
  // ...
}
```

### prop
プロパティ名または配列のインデックスを表す文字列式またはシンボルです（シンボルではない場合は、文字列に強制変換されます）。

### object 
オブジェクトに、指定された名前（prop）のプロパティが含まれているかどうかを確認するオブジェクト。

```JavaScript
const mf_names = [
  "tanaka",
  "morita",
  "endo",
  "hatate"
]
if ("endo" in mf_names) {
  console.log("遠藤はMFです")
}
```