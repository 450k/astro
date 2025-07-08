export default {
    siteTitle: "Tech Note Blog with Astro", // Main site title displayed in header
    siteSubTitle: "Astroを使ったサイト構築手順のまとめ", // Subtitle shown under main title
    copyright: "© 2025 450k. All Rights Reserved.", // Footer copyright text
    showAuthorsOnHomePage: false, // Display author info on homepage
    showFeaturrdPostsOnHomePage: true, // Show featured posts section on homepage
    showCategoryOnPosts: true, // Display categories on posts in homepage
    labels: {
        featuredPosts: "注目の投稿", // Title for featured posts section
        latestPosts: "最近の投稿", // Title for latest posts section
        viewAllPosts: "すべての投稿を見る", // Text for link to paginated blog
        backToHome: "トップへ戻る", // Back navigation text
        youMightAlsoLike: "こちらもおすすめ", // Similar posts section title
        postedIn: "Posted in", // Category prefix text in articles
        noArticlesFound: "記事が見つかりませんでした。", // Empty state message
        allCategories: "すべてのカテゴリ", // Categories page title
        allTags: "すべてのタグ", // Tags page title
        allAuthors: "すべての投稿者", // Authors page title
        exploreArticlesByTags: "タグで分類", // Tags page description
        exploreArticlesByCategories: "トピックスで分類", // Categories page description
        exploreArticlesByAuthors: "投稿者で分類", // Authors page description
        readMore: "Read More", // Text for "Read More" links on featured posts
        shareThisArticle: "この記事をシェアする", // Share button text
    },
    pagination: {
        showPrevNext: true, // Show Previous/Next navigation buttons
        prevText: "Previous", // Text for previous page button
        nextText: "Next", // Text for next page button
        postLabel: "posts", // Label used in pagination info (e.g., "8 posts")
    },
    defaultAuthorName: "Hasin Hayder",
    showCategoriesLinkOnFooter: true, // Show Categories link in footer
    showTagsLinkOnFooter: true, // Show Tags link in footer
    showAuthorsLinkOnFooter: true, // Show Authors link in footer
    showSimilarPosts: true, // Display similar posts on article pages
    showReadMoreLinkOnFeaturedPosts: true, // Show "Read More" on featured cards
    showThumbnailOnFeaturedPosts: true, // Display thumbnails on featured posts
    numberOfLatestPostsOnHomePage: 6, // Number of latest posts on homepage
    numberOfBlogPostsPerPage: 8, // Number of posts per paginated blog

    gTag: "G-V5QHDKBFP" // Google Analytics tracking ID
}

