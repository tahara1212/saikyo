tsconfig.json は TypeScript の設定ファイルです。
TypeScript は型定義によって安全性の高いコードを書くことが出来ますが、tsconfig の設定次第では最大の恩恵を受けることが出来ません。

ここでは主要なオプションの解説と、プロジェクト過程で strictモードを移行する手順について記載していきます。

## オプション
tsconfig は json ファイルなので、以下のような形式で記載します。
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["dom", "es2015"],
    "outDir": "./dist",
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "inlineSourceMap": false,
    "inlineSources": true,
    "strict": true,
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "*": ["types/*"]
    },
    "rootDirs": ["src/views", "src/components"],
    "typeRoots": ["./node_modules/@types"],
    "types": ["node", "jest"],
    "allowJs": true,
    "checkJs": false,
    "jsx": "react",
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

### compilerOptions
TypeScript コンパイラに関するオプションを設定します。
オプションは数多くあるので、主要なものをピックアップしています。

|オプション名  |内容  |
|-----|-----|
|target  |コンパイルされる JavaScript のバージョンを指定する。  |
|module  |使用するモジュールシステムを指定する。バックエンドは`commonjs`。フロントエンドは`es2015,esnext`など。  |
|lib  |コンパイラに含めるライブラリファイル。target に使用したい機能がない場合、追加で指定する。  |
|outDir  |コンパイルされた JavaScript ファイルを出力するディレクトリを指定する。 |
|sourceMap  |ソースマップを生成するかどうか。  |
|declaration  |`.d.ts` 型宣言ファイルを生成するかどうか。  |
|declarationMap  |`.d.ts`ファイルに対してソースマップを生成するかどうか。  |
|inlineSourceMap  |ソースマップを単一のファイルとして出力ファイルにインラインで含めるかどうか。  |
|inlineSources  |ソースマップにソースコードの内容をインラインで含めるかどうか。  |
|strict  |厳格な型チェックを行うかどうか。  |
|moduleResolution  |モジュールのインポート文で指定されたモジュールの解決方法をコンパイラに設定する（`node`0や`classic`など） |
|baseUrl  |モジュール名を解決する際のベースディレクトリを指定する。  |
|paths  |`baseUrl`を基準にしたインポートパスのエイリアスを指定する。  |
|rootDirs  |ルートディレクトリのリストを指定し、実行時にそれらをマージしたものとして扱う。  |
|typeRoots  |型定義ファイルがあるディレクトリのリスト。  |
|types  |コンパイルに含める型定義ファイル。  |
|allowJs  |JavaScriptファイルのコンパイルを許可するかどうか。  |
|checkJs  |JavaScriptファイルでのエラーチェックを有効にするかどうか。  |
|jsx  |コンパイラがJSX構文を解釈する形式を設定する（`preserve`, `react-native`, `react`など） |
|skipLibCheck  |コンパイル中に`.d.ts`などの宣言ファイルの型チェックをスキップするかどうか。  |
|forceConsistentCasingInFileNames  |ファイルインポート時の大文字小文字の区別をするかどうか。  |

