---
title: "Astroで作成したページをgithub pagesで公開する方法"
description: "Astroで作成したページをgithub pagesで公開する手順を説明します。"
pubDate: 2025-07-08
author: "Kei Yokoo"
category: "Astro"
tags: ["astro", "github"]
featured: true
thumb: "/astro/images/articles/roman-synkevych-wX2L8L-fGeA-unsplash.jpg"
large: "/astro/images/articles/roman-synkevych-wX2L8L-fGeA-unsplash.jpg"
---

こちらの記事では、Astroで制作したページ（blog）をGitHub pagesに公開する手順を説明します。

## GitHub pagesとは
> You can use GitHub Pages to host a website about yourself, \
> your organization, or your project directly from a repository on GitHub.


> GitHub Pagesはあなた自身やあなたの属する組織、プロジェクトのサイトを\
> GitHubのリポジトリから直接公開できるホスティングサービス。


[GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/what-is-github-pages) とは、GitHubリポジトリから直接静的サイトをホストすることができるサービスで、\
リポジトリを使ってサイトのコードやファイルを保存しておけば、GitHubが自動的に公開してくれます。

GitHub Pagesを活用すれば、サイトを即座に立ち上げることができるため、\
ポートフォリオやオープンソースプロジェクト、その他の静的コンテンツを簡単に配信することができます。

今回はこちらのサービスを利用してAstroで作ったページを公開していきます。


## リポジトリの作成

自身のGitHubアカウントにログインし、リポジトリを作成します。\
今回は`astro`という名前でリポジトリを作成しています。

このリポジトリに作成したファイルを上げていきます。

AstroサイトをGitHub Pagesに公開するには
[GitHub Actions](https://docs.astro.build/ja/guides/deploy/github/)の作成が必要になります。\
上記のリンク先を確認しながら、deploy.ymlファイルを作成します。


```
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://450k.github.io',
  base: '/astro',
})
```
となります。

ただ、このまま公開を行うと、画像のパスなどがすべて切れてしまうため、\
画像のパス、リンクのパスをすべて変更する必要があるのでご注意ください。


vs codeの一括置換などで、
```
<a href="/about">About</a>
↓↓↓ 
<a href="/450k/about">About</a>
``` 



```
<img src="/image/logo.png">
↓↓↓
<a src="/450k/image/logo.png">
```



```
<img src={/image/****}>
↓↓↓
<a src={/450k/image/****}>
```

などに変更してください。


パスの変更が終わったら、mainブランチへコミットします。\
あとは自動的にGitHubが処理してくれますので、\
GitHub PagesのURLにアクセスして確認してください。
