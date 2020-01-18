// load workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// output successful message
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

workbox.core.setCacheNameDetails({
  prefix: 'sb',
  suffix: 'v1.2.10',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "8d4791261f7ce2dce5966e8457612af6"
  },
  {
    "url": "about-me/index.html",
    "revision": "c68901dbc1d0fadc6f2ae125f3520343"
  },
  {
    "url": "archive.html",
    "revision": "fd2ecd0f155f28068f49bbb054c6db2c"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "ce200c94dd0fe5468a05160b6295b6d6"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "c39abfcd1fd71c39dc3845009ded97af"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "40acd3c8517961fffa068b19c41ea678"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "863643b3bdc48f1ce824d3fc7af9043f"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "7a5c2acf562f28bae54fe20fe130f7a4"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "9fb25f1314c85f25cf830126beded3a3"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "39e1297eca2cc50af2b800ba7d7e9695"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "6e41c5a24896542aa37249cfb77ad71a"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "8fd337141218f66b4231ebbe1928c0cf"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "37c580873e3c99e3abf560f021901d44"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "c0bc68a18db1d1d0ee928bce987fcb0e"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "faca441b1e6218a2f0968e4fc4e9bebd"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "62df8404242a54ccdff483b053b9c577"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "f61f5ec622c89c20410594e6f96f744f"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "391bcdda24903f5e846079122e165a46"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "377c21c01f690873b0677287e5b55420"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "af8defd75115a4586b7a60abf7b73012"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "d9242fe7831a9b35914f82d38b7ed92d"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "02827e46029822ff67f8b636caba4fdb"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "1eb03f0499d4b6e0d695eafa838da463"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "cb673307ff27c0c851993edc1d90d40d"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "f5c73a479837d5c4d1441662d2cab16c"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "01d41ffaa04f53d0fa6a143ed63fadde"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "27123da612595413995a6dd03542a0d2"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "0ccd25525cdef19ec93897b8f52b8da0"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "61e026860097e0afeba13fffbeca372b"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "943c76ef80d118562ecdd876d727ffe1"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "5a0265a4e0e31400824afd60395f54ee"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "baf24d53b4e8051d0e6acab02fb96541"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "ad94e84ca82e0f7f6539e7a163803a48"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "bb80dd2dffa6f68585a5b6a2f050ee7d"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "ea330e84180884e37a31d1de18052d25"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "8b6c65ef8a4949a7e856ffd5f6587941"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "754103daabd24258033f841e5f8601ba"
  },
  {
    "url": "archives/2020/01/index.html",
    "revision": "11526c97d6a71c6a933c6d6066ebc8a8"
  },
  {
    "url": "archives/2020/index.html",
    "revision": "09229c1c0231014523dfbe03fa9c88ff"
  },
  {
    "url": "archives/index.html",
    "revision": "b4b09d7ce4d3d383f6ad54fcd6e48b02"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "45290de0db2af815de58746fb2fed063"
  },
  {
    "url": "articles/2019-lookback/index.html",
    "revision": "86aaed8082596a52dde12f347f5c459c"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "a44fa76ec18071f279b06f0c8a20bf33"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "b8fdeafb6a467a2cd928413ec734510d"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "cfd945e7c445b1113ac9e52fe7413ebf"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "fec2a31e143c5903f2efd32d8c8783f3"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "08c9047b23c5ac9c9406f9bc31ab05e6"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "37ee12da5ac930566c64dd3a490fdb95"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "6a944d119769e0ead1663788d0f78f71"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "bbd498edc657c2aad48ba42385839b21"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "d31d0740606ee4eb3cdad7e4c53af3b5"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "694efd78301f59e9b003b698ecd7a5b1"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "4acb4ae64331861de06152df8ffc448b"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "4f8298975469d674b96840c9f9fa13d6"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "3cb37279d44c79b5617710f121961dca"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "fd7a403daee984c1d85fa4b3ef2c7b84"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "1d7124932312cc435b491285d6dde888"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "ab8f80de91f2653e3f72746e93bc7584"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "b2c202e26b2a72aa45a1adeaa6832946"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "1071748d5f1da9bbd8c7d8871360925f"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "aeecb13a5eb586b541e603af102d1d37"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "3fcd415dd13677b1cb9fc35a4780c4a9"
  },
  {
    "url": "articles/how-to-animate-svg-signature/index.html",
    "revision": "537c951b3c4f4c9c2ec4ea054a85ed45"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "211746b2d471206231bb6e3b7588731a"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "e9b630d3cad3ed17245d52d8065b7dd5"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "3dde9e83cfd635faeed17a1b3261f423"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "78a2c78e79084bff4118e42acaf69503"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "2fd091b9582f9a706055e9e8f6b16a89"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "6f7fc16ac6e3e4c1d46425d2d00b73cc"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "3805ca5cd57a1c497399d35548107609"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "ccfb9cdee5f8ef92a8d4934cdaa39cd7"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "abce68d5fa188cb72d08c412e5f1bd8e"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "8a95cc71444174f50dde4f7a949a9d4b"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "d5bfc9dd2a4b13df934f899413265abc"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "e006c6ba93299e20b16dd9a3dc554096"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "3c630db84c7905bbdc310606e94e8025"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "19868e33ab7ec041878d1cf4eacf270f"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "39725138f92c0be7ab1af7e522fe0425"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "dc04be360b1e8a9950312eb3b3429eb7"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "43c208654193c90a5c7195d960414933"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "ac9b843ccec4c65c4549eea9b9cf8de7"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "e3f5ff9f070d9a1a0bf9cdf480689d84"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "30947badc85db4df802448404caf8daf"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "900b274e8e9a99eb80aff32b88563a9f"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "c46d0946ab095ca2baa30d414d26059e"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "cf9dbf7f2e2b3f0b0e193ba0af22e66e"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "e073916be26d3fb73790bd12f60dafef"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "1818ac4c5e0069a785f50bae53caf3b7"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "b1dfac6775eb4b4dc6223edb7505acee"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "30b3b3dd0dbd89c634fd662bc65b0613"
  },
  {
    "url": "contact/index.html",
    "revision": "ed02b71054b778e5e6798b4edae7c325"
  },
  {
    "url": "css/foft.css",
    "revision": "4aa42f8e4398b76df858b21f32dbf4f2"
  },
  {
    "url": "css/foft.min.css",
    "revision": "a37811359e46e97337e6183085fd6f7f"
  },
  {
    "url": "css/offline.css",
    "revision": "5dd3cf48cdf471e8052f916f85c46275"
  },
  {
    "url": "css/offline.min.css",
    "revision": "bd8c8df8210f4de88b318bc11a111fe9"
  },
  {
    "url": "css/style.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style.critical.min.css",
    "revision": "e4a21ec373e686b8eedd94ba27d7eb63"
  },
  {
    "url": "css/style.css",
    "revision": "071af9d846426ec05424d35d8c89b88e"
  },
  {
    "url": "css/style.min.css",
    "revision": "2412114b98a1e0c001b4ba2a88ce38e9"
  },
  {
    "url": "css/style2.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style2.critical.min.css",
    "revision": "c82922f4b3b0ce94d2e4bbd6357aa7c9"
  },
  {
    "url": "css/style3.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style3.critical.min.css",
    "revision": "c950271c3a344268d3456d16a3af3c1d"
  },
  {
    "url": "css/style4.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style4.critical.min.css",
    "revision": "50307291921540a65c859420375c72c5"
  },
  {
    "url": "css/style5.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style5.critical.min.css",
    "revision": "8cde7e581597e99a4d1bbc5cf0971c5f"
  },
  {
    "url": "css/style6.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style6.critical.min.css",
    "revision": "1498d6dfe18ac2f1a589079eb15796da"
  },
  {
    "url": "css/style7.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style7.critical.min.css",
    "revision": "99513dad07f452267ccf64d0a96a3c4c"
  },
  {
    "url": "css/style8.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style8.critical.min.css",
    "revision": "1b5474adff46325fa81f48de821e05bb"
  },
  {
    "url": "favicon/android-chrome-144x144.png",
    "revision": "af5af163b9b82135328fc16d4543c83c"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "363184d66256d2e991c09dc60a0494c9"
  },
  {
    "url": "favicon/android-chrome-256x256.png",
    "revision": "19c47793024a13bca773719bbffd9184"
  },
  {
    "url": "favicon/android-chrome-36x36.png",
    "revision": "6baca5c8bd944ccb21dfc70ed3a624cc"
  },
  {
    "url": "favicon/android-chrome-384x384.png",
    "revision": "33789775cef1c695768ef10da5cf32b5"
  },
  {
    "url": "favicon/android-chrome-48x48.png",
    "revision": "8ca32da31bd4b4c2f167d25059f200f4"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "7daf981aa3ab5b62fda2198dbd924bbe"
  },
  {
    "url": "favicon/android-chrome-72x72.png",
    "revision": "a0f5f976afd10f9132a701d42b131518"
  },
  {
    "url": "favicon/android-chrome-96x96.png",
    "revision": "13f1618ba2acee6437ce39101dbb2d19"
  },
  {
    "url": "favicon/apple-touch-icon-114x114-precomposed.png",
    "revision": "5f46462d7cc8f232ba59ca9390f101b3"
  },
  {
    "url": "favicon/apple-touch-icon-114x114.png",
    "revision": "5f46462d7cc8f232ba59ca9390f101b3"
  },
  {
    "url": "favicon/apple-touch-icon-120x120-precomposed.png",
    "revision": "53614d04769e25e3401363db6f904b4e"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "53614d04769e25e3401363db6f904b4e"
  },
  {
    "url": "favicon/apple-touch-icon-144x144-precomposed.png",
    "revision": "af5af163b9b82135328fc16d4543c83c"
  },
  {
    "url": "favicon/apple-touch-icon-144x144.png",
    "revision": "af5af163b9b82135328fc16d4543c83c"
  },
  {
    "url": "favicon/apple-touch-icon-152x152-precomposed.png",
    "revision": "01fc2f3d153b07f2d6e84c3de75e35f9"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "01fc2f3d153b07f2d6e84c3de75e35f9"
  },
  {
    "url": "favicon/apple-touch-icon-180x180-precomposed.png",
    "revision": "6f9b42178c002d87434dcf4d528bb1c3"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "6f9b42178c002d87434dcf4d528bb1c3"
  },
  {
    "url": "favicon/apple-touch-icon-57x57-precomposed.png",
    "revision": "fe33f8e03929cad67fd3afa0e448e702"
  },
  {
    "url": "favicon/apple-touch-icon-57x57.png",
    "revision": "fe33f8e03929cad67fd3afa0e448e702"
  },
  {
    "url": "favicon/apple-touch-icon-60x60-precomposed.png",
    "revision": "d6dab9c669ca4dab5902cabbd74eaaf9"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "d6dab9c669ca4dab5902cabbd74eaaf9"
  },
  {
    "url": "favicon/apple-touch-icon-72x72-precomposed.png",
    "revision": "a0f5f976afd10f9132a701d42b131518"
  },
  {
    "url": "favicon/apple-touch-icon-72x72.png",
    "revision": "a0f5f976afd10f9132a701d42b131518"
  },
  {
    "url": "favicon/apple-touch-icon-76x76-precomposed.png",
    "revision": "fefa92cb3d9f00188150ac13600405fa"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "fefa92cb3d9f00188150ac13600405fa"
  },
  {
    "url": "favicon/apple-touch-icon-precomposed.png",
    "revision": "6f9b42178c002d87434dcf4d528bb1c3"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "6f9b42178c002d87434dcf4d528bb1c3"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "7c0d46f5e8df1b134ddcf4ce696257d9"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "2ab0ffdeba122d4ab6f94fa4569a43db"
  },
  {
    "url": "favicon/favicon.ico",
    "revision": "fb9727c105797a1e436d4a3efaacbff2"
  },
  {
    "url": "favicon/mstile-144x144.png",
    "revision": "14e024611a3cb2f79a25c2beb23a3fc5"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "7fef7ae3165ae8795b35395c838483c5"
  },
  {
    "url": "favicon/mstile-310x150.png",
    "revision": "f81377684bd8e6476bbf1fdfb9177363"
  },
  {
    "url": "favicon/mstile-310x310.png",
    "revision": "fd81b7bd51bc1aacd79dbf57358e3c4b"
  },
  {
    "url": "favicon/mstile-70x70.png",
    "revision": "47833b245955b6c0b80923791ea90551"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "5bcb129bd33cd65851617d1bf2de5ac2"
  },
  {
    "url": "favicon/site.webmanifest",
    "revision": "962ba9307c79b896f02d3ba433783ab8"
  },
  {
    "url": "fonts/Barlow/Barlow-Bold.woff",
    "revision": "9d96ad1f52bf5254cd7e02442ce8d145"
  },
  {
    "url": "fonts/Barlow/Barlow-Bold.woff2",
    "revision": "6769edd8ac286df063fa1044a5c13325"
  },
  {
    "url": "fonts/Barlow/Barlow-BoldItalic.woff",
    "revision": "3e6a8c8edfbde5dfc479ed0feefd169c"
  },
  {
    "url": "fonts/Barlow/Barlow-BoldItalic.woff2",
    "revision": "6333b268decc729a6c20324732dc3983"
  },
  {
    "url": "fonts/Barlow/Barlow-Italic.woff",
    "revision": "8110db90b0da9c8b4c3153fa261ed128"
  },
  {
    "url": "fonts/Barlow/Barlow-Italic.woff2",
    "revision": "a8f686eefd186c67b90224d2301fb98d"
  },
  {
    "url": "fonts/Barlow/Barlow-Light.woff",
    "revision": "7ec36638390630d197ff8e3d5a489a47"
  },
  {
    "url": "fonts/Barlow/Barlow-Light.woff2",
    "revision": "2d47a0d0c594bc6b41784d36376af3a6"
  },
  {
    "url": "fonts/Barlow/Barlow-LightItalic.woff",
    "revision": "ed116915869d7225e249933c7b8e9504"
  },
  {
    "url": "fonts/Barlow/Barlow-LightItalic.woff2",
    "revision": "74391a2504b51fa29e4ec81d9e21b2d6"
  },
  {
    "url": "fonts/Barlow/Barlow-Regular.woff",
    "revision": "97dc703e0368de91cc18f3f603c0189b"
  },
  {
    "url": "fonts/Barlow/Barlow-Regular.woff2",
    "revision": "e614dcb9efaddbe686e237f0281de010"
  },
  {
    "url": "fonts/PlayfairDisplay/PlayfairDisplay-Bold.woff",
    "revision": "b5b066b5208b59419a409686fef330db"
  },
  {
    "url": "fonts/PlayfairDisplay/PlayfairDisplay-Bold.woff2",
    "revision": "8a7bbb7396a7e4262bea0cd82c1d9bc0"
  },
  {
    "url": "gfx/jpg/cover.jpg",
    "revision": "2510332f98d86da228631b62691f6012"
  },
  {
    "url": "gfx/jpg/logo.jpg",
    "revision": "2927fe832d9abb55b45474ca982b022c"
  },
  {
    "url": "gfx/jpg/starter-project.jpg",
    "revision": "0e10002acd2b03c15c002acec8929dac"
  },
  {
    "url": "gfx/logo.png",
    "revision": "7ceea3fa98fc4fa1aeea75aff7a3e2a3"
  },
  {
    "url": "gfx/png/avatar.png",
    "revision": "bd2a2367a8c5a00d72051ef5ed0ecbd0"
  },
  {
    "url": "gfx/png/logo.png",
    "revision": "02ff5621ef9d17936bdf71632fba5c30"
  },
  {
    "url": "gfx/png/starter-project.png",
    "revision": "ed58850db4f670d96ceb9d9d8a0cd218"
  },
  {
    "url": "gfx/svg/autograph.svg",
    "revision": "4ac72dc05c92fd12ea2df974bba51424"
  },
  {
    "url": "gfx/svg/logo-favicon.svg",
    "revision": "c5f1e6b1489382292d52693c24e68855"
  },
  {
    "url": "gfx/svg/logo-footer.svg",
    "revision": "80e6c211966cca8bba5ac5bc17be477d"
  },
  {
    "url": "gfx/svg/logo-header.svg",
    "revision": "80e6c211966cca8bba5ac5bc17be477d"
  },
  {
    "url": "gfx/svg/logo.svg",
    "revision": "80e6c211966cca8bba5ac5bc17be477d"
  },
  {
    "url": "gfx/svg/starter-project.svg",
    "revision": "dc8c8d2f815b7e2f1c3846f6a81184fb"
  },
  {
    "url": "hire-me-2018/index.html",
    "revision": "d44682c4cd358afe5ac0d9d3e33e0350"
  },
  {
    "url": "hire-me/index.html",
    "revision": "eab3546d7acd6e00f9d30750cfbbee3b"
  },
  {
    "url": "how/index.html",
    "revision": "d7f4a15b2b9f406ae1b9da9740245ccd"
  },
  {
    "url": "index.html",
    "revision": "2b0a53b54687ba55b0d3ff33132c8b3d"
  },
  {
    "url": "js/index.js",
    "revision": "e327f97627c284fa2310aa802cf2639f"
  },
  {
    "url": "js/index.min.js",
    "revision": "d8f8dde3a392415e7bde06c7c45d6275"
  },
  {
    "url": "links/index.html",
    "revision": "9d88b3c9fe09c85520b27bc5cd9c6a5b"
  },
  {
    "url": "mentoring/index.html",
    "revision": "c592ea265bab0eb7357bc255d0ae5e42"
  },
  {
    "url": "offline.html",
    "revision": "39aba9658e5e39f9ddc2e690329d918a"
  },
  {
    "url": "page.html",
    "revision": "39ccd042f9d46159e1ff1249b526a787"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "c67bb1ac73030d271c35d29985ffa09b"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "3471a2d8b7d299fd242ce20276126c2a"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "9f41b819b3ea6e128f12a9fa72b8e2ab"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "bd69fdc145536c690131b127ebd7cd22"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "aa4450916151b7b5da75009365a04d22"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "dc542b1e5a45aefc2538c2ccc879cd91"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "6a957c704477316ccea55b9516abb0a4"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "e9dde86f6b3d159ac8618f6f209ad4b4"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "03896e0f8ca43bae6b6fa59b44155edc"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "4c6b9220a728d921275429dfe1459f2f"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "ab0b5aee6af4d41f6266d32546e61a2b"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "f0dd6ad9b18d0bfb71fc1353ed9c755e"
  },
  {
    "url": "portfolio/index.html",
    "revision": "791d3627f790e407cd60d1b7ac06dad4"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "47b2e1345b1183e50072d034d867541e"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "fa154cdfe049d8710a186dc8e7a5a987"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "8b41be30a2c91027d0e324d78d96ca83"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "c3cb5f7cd71624f2fa28f320a185ff0f"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "7a2381bf9d2b60ca00c3dcb2a1498b6d"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "5afcdef9a6553c6c28adea98dee49c30"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "09297d1079c0919b4855bcd2307738cc"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "e9bf2be9e09a560f92d487aed32b0382"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "e825e2b9c9a9b0f7ce2d15fbca12fcae"
  },
  {
    "url": "post.html",
    "revision": "39ccd042f9d46159e1ff1249b526a787"
  },
  {
    "url": "services/index.html",
    "revision": "76066281647e7ac891e76bce9bd291a3"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "ef8aebf40fbe18ba6cb068aaa1722c6f"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "27de49584543bd2ed65d5eee4fbfa369"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "32e1d9e489890110d0c3e51db44309f9"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "c9b7b637e9201d6dacd1d0887d73851c"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "dd7f9d93d919e7b61ea2a85e64eb60db"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "e8071c0eece502e2001b4eeac7deea27"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "7cbc2ee739de829a59fa57eccd1230c6"
  },
  {
    "url": "tags/css/index.html",
    "revision": "06eecf54458507ae9b04f1d5f3598ecc"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "208028e1bd4c0d80e3f72d71ab379955"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "dba3f11b1803cff0dc4d9a4b948d2f48"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "63a9b413569a91436e7e30c87f13c0b1"
  },
  {
    "url": "tags/git/index.html",
    "revision": "52d7a0aaa1812dc28d4b94e27f0b364b"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "28530ac32eaf2ebbf6ba36e39713cc12"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "7aa4b2fdc7608440824c9bc7c8e72060"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "7bf9f0b23cda4819d051954b2ccbcdb7"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "8270b2be0f821fc403c9282fab5adf20"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "9c9dcc3c9ee8750fdace477d1231c6bc"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "035c6d1c4e139442c93b69093eb924fa"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "7eb9284617f79392dd237e162f922265"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "0aec482893df6761d53c3f373e8b4a2f"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "d68e46a2d50ec120487b4fcef4bfcbfc"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "7911509bdc8565fb0144e404e18c19da"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "48a39d90b989c7bd5b68d701b236ab21"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "dcb81b16ff0b5eb8ed07d9f405d95927"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "62624a39cbdd1d50abe72986be48831b"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "e061e5be58be612997004e4238b319ca"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "e3a517c1677d5f3087aa7ec9e8aeafbd"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "5ed224f490b836850d17b272dd7dab64"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "8be678c81e68c4fd003a15046f26a586"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "cc0d4c3ab03de6c6bf7ea625b89558ad"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "715893ed5308e6e61de3168fe64ac620"
  },
  {
    "url": "tags/server/index.html",
    "revision": "f890578041a31c2a3f5b6f41e945f0b1"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "5eb49a9f6dce8a0f3879afe4fa890006"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "a8f2b0d83027cfb2ec21f998a9591e76"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "75effecdbd60679e837819b8c5562e37"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "4d2dbd7a11888b61a10bf04491a8c8f2"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "9ad2a45f3bc1d8a897df76e04f7ed227"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "2d2d2f88c3bcac3590b6fd6ba1e971bd"
  },
  {
    "url": "tags/svg/index.html",
    "revision": "1b6c52353ac3c1e53885a5c227b9aa72"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "3fe6efd41353580fc7f8825ea7b5fc97"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "2c66510254bc119ce7dfc16cdfde7300"
  },
  {
    "url": "uses/index.html",
    "revision": "4476838753f4e00f4a5aa223eed1cff0"
  }
])

workbox.precaching.cleanupOutdatedCaches()

// Serve all html files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'html-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 1// 24 * 60 * 60
      })
    ]
  })
)

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'js-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 1// 24 * 60 * 60
      })
    ]
  })
)

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'css-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 1// 24 * 60 * 60
      })
    ]
  })
)

// Serve all other assets with CacheFirst strategy
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp|ico|webmanifest|eot,ttf,woff,woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'asset-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: 1// 30 * 24 * 60 * 60
      })
    ]
  })
)
