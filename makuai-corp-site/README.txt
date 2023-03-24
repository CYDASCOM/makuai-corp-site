build tailwindcss
$ npx tailwindcss -i makuai-corp-site/assets/css/style.css -o makuai-corp-site/static/dist/css/output.css

Hugoのshortcodeを中心にmd形式でページを作成しました。
ショートコードにはデフォルトでスタイルを設定してあるため、書き換える際には
classプロパティを設定してshortcodeを呼び出してください。
例:{{< text class="mb-4">}}テキスト{{< /text >}}

ショートコード一覧
見出し: heading.html
見出し 小サイズ: heading-sub.html
本文: text.html
本文ハイライト: text-highlight.html
テーブル: table.html
テーブル行: table-row.html
リスト: list.html
リスト行: list-row.html
画像: image.html
ボタンリンク: button-link.html
セクション: section.html

その他　特定のページに必要なshortcode
生徒の紹介: introduction/introduction.html
お問い合わせフォーム: contact/contact-form.html
トップページ装飾: top/cards.html
-              top/reason.html
カリキュラムコース紹介: curriculum/course.html
装飾された番号: studentrecruit/decorated-number

ショートコード呼び出し方法
閉じタグあり
{{< ショートコード名 プロパティ1="aa" プロパティ2="bb" >}}テキスト{{< /ショートコード名 >}}
閉じタグ無し
{{< ショートコード名 プロパティ1="aa" プロパティ2="bb" >}}

各ショートコードの詳細、プロパティの種類については各ファイルに書いてあるdocコメントを参照してください。