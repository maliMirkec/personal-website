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
  suffix: 'v1.2.11',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "5a5d3cebdcad67819df5aba506f51886"
  },
  {
    "url": "about-me/index.html",
    "revision": "85bde0c153361dd270f490e2427153f2"
  },
  {
    "url": "archive.html",
    "revision": "18f8441a3fd21847c344fd56a95dcd9e"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "da19a080bbe1a0ea39f3607e79cfd375"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "420a55c6e8730cabe3d882a515e2f63e"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "ad1b228521f3f137e1c472426fa4eaa5"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "b9f3e447f188fe204eddd0259ab27d99"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "3222c4a6616f2325e1503fe945bd62e6"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "a8ddf2d05c7be88eaa9faaaf9155fe74"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "eca7fe6c6a3bee55a1618c05fe720d91"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "947cc7ea90dd4dca27c615052d22fbd0"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "8089afb55dc698ab51be06fae5e31ad6"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "8f3c915a1a56c443b03ae489eb98d541"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "eb0e270b5749d00645834d316cbaa887"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "bb4f1fb45d8c7287a47d7fc6aca0246f"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "6f728410ba470c11a6714fa9660dc4d9"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "48c9897a2632dcd07b702d4bd0525422"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "192b6399a87ba0860b0d0bfe4788e326"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "94d82a8abb3fd36ff4b900df4e225413"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "75c0c76330f21f1b36d7ba62390659ee"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "335cfa88376c6cee1cafe9bcdcea5fb9"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "75d20a33c1be6938876f0c0fe5924739"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "c42fe0c635b7ad6b4e6d2693600b6f21"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "f8b689dde687a8f82ed1bea3151e3a2c"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "b7b042e404c93948c001ad3d1d771ecf"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "4ee7d80791ace94ea1a4114475d2c264"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "4538a125005f240e9a99e5dae9fe648b"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "6d7212612bd59d03f2ff422d72ca1cda"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "d16f40c4f90e7f9b7a2182d76d105355"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "117c26030d05f415876170206f12ec3b"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "8704b07d5045e259548c916f38a2742a"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "3fe22c92f2f07ada56beae5d966d7d24"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "8ce63c42c6933047b3b1af2ca3254a1c"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "7f42883b11cff6fd4a03904bcab174dc"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "783032cba24d32ee513666f1fd5184c4"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "3cfed99ef037be4c07a654162e0e9789"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "1e34c56ed9c60145a37b11dd33ff6d02"
  },
  {
    "url": "archives/2020/01/index.html",
    "revision": "0c5994d864cacc90b58557657a8df0ae"
  },
  {
    "url": "archives/2020/index.html",
    "revision": "13502ca89a9153a7edb83c21a6405061"
  },
  {
    "url": "archives/index.html",
    "revision": "182dc817c1196f9471f484c53c4b8a5d"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "9070fd43e0785ae3ed01bcc4e2bb3648"
  },
  {
    "url": "articles/2019-lookback/index.html",
    "revision": "9aea5d6f722779882c01c28985915fb6"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "c84c8da647d31061ae24f4089cf71a38"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "0a0a7652a2f83e244e8804a89b4b4fbe"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "4663626f2fc954b0af59183702d2cfc9"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "3791129d2737230e9e1c7eef29523df6"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "4dd35cf8e8838164129cfd1a769ab793"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "70a26ceb6c5c3599a93ba1e3cf501434"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "c515ac040e953a90c629411e0f817b1b"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "cfe051261ed58348a84a9246e08ef000"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "4947f21c9c8524948e21ed0681f257dd"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "07d45995c8e5f21ee0e268c22f469f33"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "176298d2861eea04f9308d839894516b"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "926c6b4c085c51c3beafc3904340ce7c"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "372b97ceea67533e8c2ba78f5042359f"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "d025778ddb3f84dbea331417f9fd252d"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "8bdd1c9bf3d75b10d2f4cf36ac06b349"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "4f771a94e435b4b4d808a07a6c642587"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "39a3c84f4672dce49b283ddf98bf6396"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "de258a652ec1ac04f129c8535fcfd3dc"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "626b16181fb7885e18a35ecc46aa7ed1"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "9bcb10f8adf6f7abd7aa844f3123bc59"
  },
  {
    "url": "articles/how-to-animate-svg-signature/index.html",
    "revision": "3d6c7b2753a94bd6d5954cea868307dc"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "ef99e300e887ff84721ff3fcee21189d"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "27d10005448de6818d6b6e81df2518f2"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "33badbce62638ed61bc277bc20d40d2e"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "3152148e7559c672cf28bcb132be3c3c"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "f31950c69fe2f871d3529fa8f3f06795"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "aa0eb063f3faeca4e1c069108c7187fe"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "e4cc25ef8f42069a365ccbb354832660"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "a73fbc8109114e11379deeafebce625b"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "d0e69680e94277acda7f10a46d0a7bcc"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "f83a55f447b92015768a9d025fdaad84"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "23a72008b76c6e88a6a2ebd048238dbf"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "fd681ca9e54593abbb164373abb684da"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "8002c1df72d087f6eb38144bcdc00e20"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "448365b06326d93733634a0e5ab46dab"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "e32cf4c831ef160f5c77887913f6d5c3"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "4cd4da804e302296d99d4fe066cffbde"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "7f1ca15ba3eb333532871c0ffaae0975"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "fb7f99d170056e448f2945a1ffc8ed54"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "a202eb7246b5e8fa15097e46374d90ef"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "8d79ed8578f6af2343832f1e50d95196"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "34ea9c0ee85dc46800578f8443f0f6be"
  },
  {
    "url": "articles/the-ui-development-mentoring-program/index.html",
    "revision": "3521c0d3e7c522bee8d968573f159d10"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "4d2aaff8c8bb1e60e59285530afe8787"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "d82f363452592b30e71a51560dbd38af"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "df91d68a2fde5a112312c88d416c71bb"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "0c6a84fd56f1d7cd174d0fb3308751bf"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "d7fe347b52662e411451916c96697cc0"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "6c08551003eae9fe418dbf9fad705038"
  },
  {
    "url": "contact/index.html",
    "revision": "6ebe4b7c8c810524bf71f87e91afc2a0"
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
    "revision": "3cee44278c1ebfa4e871ef216ba2ad1b"
  },
  {
    "url": "hire-me/index.html",
    "revision": "7d403020f8f69243b0bc5d4bd56d77ae"
  },
  {
    "url": "how/index.html",
    "revision": "9eebacf0f6650b04c12c4bc4c27d018f"
  },
  {
    "url": "index.html",
    "revision": "2ce962506ad8868b4b02d70f88882364"
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
    "revision": "81a08d40fe71776b454f3f14f879d173"
  },
  {
    "url": "mentoring/index.html",
    "revision": "c3461bf40a156a71bfd1acb9f65bd3e7"
  },
  {
    "url": "offline.html",
    "revision": "16796201275048d352b3d7e3fea982b1"
  },
  {
    "url": "page.html",
    "revision": "5829535fcfd13d486278e36173feae5c"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "5ed7e4f250caf47c4264a402b6ee4d2d"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "84fd00017a7c98646bf0257a4a01524e"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "c4eb05cd562d273c7516f3ee07055310"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "17d64ac5ee17df3601779d8fef40e6cb"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "ce3bf743f988ea41142e5aebc9dc9ad0"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "4a18a5eb3074d403701d26978493790f"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "60286035391a9d21943a0729cfca23a9"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "24f869b4d930792862880be592e287b5"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "36860363b76e3af09f5adf96d36f6d17"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "979c09acc35d7f76022c5a32df650c57"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "3501a4661e2333e2bc658817a9c92b9c"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "e8f8481520eb62b19b658c072c0091ce"
  },
  {
    "url": "portfolio/index.html",
    "revision": "0672e0b341edc4d656b11474996e7874"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "1ee76c62aa23c677a0fbec69d34566af"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "a42b8aaac89b5cb510f53275f2d7c55d"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "0e352ce4bcebd98ca797f68faca69234"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "519fc475e0750d8e5017fd20944f1bce"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "6ec022b829d5ec7d91bfe619049fdd4e"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "06ac1ad0e23dd4743aabe663e8c9a22e"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "1047a239714394fa12880100be8bc742"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "2699351519c4c2b703a8e9e28c4be38e"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "91395b4855fb0c915e5f8956142f6ac9"
  },
  {
    "url": "post.html",
    "revision": "5829535fcfd13d486278e36173feae5c"
  },
  {
    "url": "services/index.html",
    "revision": "ec14e844a5f7072b4771aaac3a392f4b"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "2ddedd8fd04412197c69822456febb20"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "22b7b3975b95a8e52266d073191282ab"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "a50434f8212d61e04406f560d944d953"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "27dec3e09f451e5673a5f69e178061ec"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "65b32b9ec933808f090563151e4f319d"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "9f816f2d160962ee898c323ce9690a2d"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "b74ae9302b1a1d819df9903031a7fe15"
  },
  {
    "url": "tags/css/index.html",
    "revision": "2ddc30f365788653fe09bdfbf696e733"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "e95f22e3aa08c3d2cd79b723d89a2644"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "2bbe0ab08f4b13a6b89799bf52507d04"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "5d7c02e276ad6766d64d6340f43b6397"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2caf0437fa2cbc21250488f4c360b972"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "785faa2274787939903e72fd21dee90d"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "3b45a6c8089490135ee6932f49bdead2"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "907bd5bc62fc5e5cbf8de8c9b6793391"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "e5c6712c0034dc5f65eea61cc8b6318d"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "ef26eedcbecbd8786f8407b0b65c0e10"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "ced4efc15cf04406e5733184d17679b4"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "362f73bf15aa48801204df72d308c3e9"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "cdf991bd77714d5419b5bd718cd64d91"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "3541eecbbcdacf3dc554b38f0361033f"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "5ec5f24f35ef85cc8a4007fce8d50835"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "0f11583b31012f0db0e6f04c30f35263"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "ffa1c1f164e954b860123c03d9235773"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "ebe92f199bd111c35534d021982c1dcd"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "5d39583ca1a6d7beabe64a1cc36f3649"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "037e7b35a489d926bedaff6e6d65cd16"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "53551e2f7ac86c2d7bcf34f20e70e05f"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "45b54626511c12f3cdc0b848adc9af87"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "88670561dcdee34efe3fdc9312b9e3ab"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "87f13d9632df6603c3373556445ab4a9"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "cb28e2eeb803ff0e69674ad039d5285f"
  },
  {
    "url": "tags/server/index.html",
    "revision": "c890b1f65149fff22f3c1d40d791ea0a"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "84e3597e8e58b5b1cd473ef30457c383"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "6e3e35264340d8f5b967801ec0db45b7"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "371284db1a9b616f0bdbb1ca1da559d7"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "8167df24081fca69f1fe5b2a9b8188ad"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "1157393db65304de6acdd9cd24959fe9"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "96eb9bf393537bd493f04e73c4c9b924"
  },
  {
    "url": "tags/svg/index.html",
    "revision": "cd6ed0e99ddb8534e2c93606353f2c17"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "2369806f0346430016e88f3efe3441dc"
  },
  {
    "url": "tags/ui/index.html",
    "revision": "466e22621fcd94a9a9a0872ff801ceb3"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "53a4d6fe19f8b9730afdcdd7878330ab"
  },
  {
    "url": "uses/index.html",
    "revision": "d39312067430d9327709a5832a2ac36e"
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
