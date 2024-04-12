# Jest
Jestは、Meta（旧Facebook）社によって開発されたオープンソースのJavaScriptテスティングフレームワーク。シンプルさを重視し、JavaScriptのテストを快適に行うことを目的とする。

## describe
テストをグループ化する。関連するテストケースをまとめ、テストの構造を整理する。  
第一引数にはテストグループの説明を文字列で渡す。第二引数は、グループ内のテストケースを定義するための関数が渡される。

## beforeAll
複数のテストケースを実行する前に一度だけ実行される処理を定義する。
テストの実行に先立ち、共通のセットアップ作業が必要な場合に便利。テストデータの取得などを各テストケースで繰り返す必要がなくなる。
```JavaScript
describe('ユーザー管理システムのテスト', () => {
  let db;
  let users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

  // テストの実行前に一度だけデータベースへの接続を開く
  beforeAll(() => {
    db = new Database();
    db.connect();
    // 仮のユーザーデータをデータベースに追加する
    users.forEach(user => db.addUser(user));
  });

  // テストケース1: ユーザーの取得
  test('すべてのユーザーを取得できる', async () => {
    const usersFromDb = await db.getUsers();
    expect(usersFromDb.length).toEqual(users.length);
  });

  // テストケース2: ユーザーの検索
  test('IDでユーザーを検索できる', async () => {
    const user = await db.findUserById(1);
    expect(user.name).toEqual('Alice');
  });

  // テストの終了後にデータベースの接続を閉じる（afterAllを使用）
  afterAll(() => {
    db.disconnect();
  });
});
```
## test
個別のテストケースを定義する。  
第一引数にはテストケースの説明を文字列で渡し、第二引数にはテストを実行するための関数を渡す。

## expect
テスト対象の値が期待される条件を満たしているかを検証するための関数。
特定の値に対して様々な「マッチャー」（期待値と実際の値を比較するためのメソッド）を使用してテストを行う。

### toBe(value)
厳密な等価性（===）を使用して、値が期待される値と同じであることを検証します。
### toEqual(value)
オブジェクトや配列の内容を含む、値が期待される値と等しいことを検証します。
### toBeNull()
値が null であることを検証します。
### toBeTruthy()
値が真偽値の true に変換可能であることを検証します。
### toBeFalsy()
値が真偽値の false に変換可能であることを検証します。
### toContain(item)
配列や文字列が特定のアイテムや文字列を含んでいることを検証します。
### toBeGreaterThan(number)
数値が特定の数値より大きいことを検証します。
