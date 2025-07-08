---
title: "Astroのblogテンプレート設定方法"
description: "Astroの無料テーマ「Storyteller」を使用してblogを作成します。"
pubDate: 2025-07-07
author: "Kei Yokoo"
category: "Astro"
tags: ["astro", "theme", "storyteller"]
featured: true
thumb: "/astro/images/articles/tran-mau-tri-tam-h7v_38e3iGE-unsplash.jpg"
large: "/astro/images/articles/tran-mau-tri-tam-h7v_38e3iGE-unsplash.jpg"
---

こちらの記事では、Astroの無料テーマを使ってblogを構築する手順を説明します。


## テーマのダウンロード
[こちら](https://astro.build/themes/)のサイトから、お好きなテーマを選んでダウンロードします。

今回は、[Storyteller](https://astro.build/themes/details/storyteller/)というテーマを使用します。

画面内の`Get Started` ボタンをクリックし、[Github](https://github.com/hasinhayder/storyteller-astro)のへ移動。

ファイルをcloneするか、ダウンロードします。\
※今回はzipファイルをダウンロードして進めていきます。

クローンする場合は
```
git clone https://github.com/hasinhayder/storyteller-astro.git
```

## ファイルを所定の位置へ移動（コピー）

ダウンロードしたファイルを、
Astroのフォルダにコピーします。

```
C:\Users\**USERE_NAME**\Desktop\Astro_test\astro
```

## テーマの初期設定
手順に沿って初期設定を行います。

storytellerのフォルダへ移動し、以下のコマンドを入力

```
npm install
```

続いて、

```
npm run dev
```
をたたくと、ローカルサーバーが立ち上がり、\
blogのトップページを確認することができます。

ひとまずこちらで、動作確認は終了。

あとは、適宜、ファイルを微調整していきます。