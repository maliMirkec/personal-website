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
    "revision": "757b1b1ff5802be010e675a97a70b378"
  },
  {
    "url": "about-me/index.html",
    "revision": "4e21c2254bd79caf7a31a896636d9e0a"
  },
  {
    "url": "archive.html",
    "revision": "18f8441a3fd21847c344fd56a95dcd9e"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "da467902b2a375ebbab4e9f11499a0d1"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "96e4adb7f088721d55175e67855bd25c"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "2aeb24cfc599b60934f14435d4ad1d06"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "112ba0540de047e97d91755e4fa48f0f"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "48b523ea8c746663a6764851056dbf33"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "7847c3a2455b19a026e565afcc63398a"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "e31ff53b63d71c5894fee50347ecb6bd"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "71528a43bbbe4db99f55ea0b6e11da33"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "80d9169a405315a24b471f5238fe2e24"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "67c4b5bc14d38769cdbc12720c0a2030"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "b8dbfa5a803789b7fe93535070462829"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "3e4a1b711f39a7063586dcc58af4f175"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "6f5adac7a5a19ba7ed14f8c07452cae5"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "4cad5098c5af76c3403d8e7a5f728c3a"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "51645d00e6b4c86f90037f13783b895d"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "ead72dd0ff50e135e37cce62b44e8648"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "6e54c11e4d9f5c2245476a918b36e4bd"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "373f2b7689ba1da41f1a0cdfe7e1f237"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "2d697235e2beb6263ae3e88be2118b11"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "38dbc9213e3dc155c3b04e933cc21fb7"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "af928e72ca263d8bb6b36d7266bfc7d2"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "25624242f92e6e4cdbe414c1c3a4c2e1"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "4633e992326e1f54178daab8ebe24143"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "7ea165396da4cbb2ac7d3806ced670b0"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "28c43127094ad8ca533a7b12ae218a18"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "04ce7fc31669904c350393f5469ead17"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "a5b92a697478fc48366046c7d0e59e29"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "7243ed27f9a19036898536adb250d093"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "53ef2ffae7df8175375dad8f85611267"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "8346ac2882df23794d47e97e4e979643"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "7f3638150b7922e4db91bb8f626511ed"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "0183b9b371d2515211bec4443d4c17cd"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "95b12d20fa212949179bba513691c0b4"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "45591fde91586625f168eedca84e7865"
  },
  {
    "url": "archives/2020/01/index.html",
    "revision": "70578adfb35bf6cb4f61c3d69c583123"
  },
  {
    "url": "archives/2020/index.html",
    "revision": "681bb90c5c6ad9b6d463faf488101808"
  },
  {
    "url": "archives/index.html",
    "revision": "211d12f0052fc358408d6751ed82ea24"
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
    "revision": "e288f356f63875ddca9110ec4c219ca3"
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
    "revision": "9154a0a3f634a51241cf1b8ce0b6c306"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "5992adca268e27326eb1256d9fdd0da4"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "6c08551003eae9fe418dbf9fad705038"
  },
  {
    "url": "contact/index.html",
    "revision": "2b3d50099255bbc275b33724e1bef892"
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
    "revision": "29fcad38fe00f9aaa0fba589a280fddf"
  },
  {
    "url": "hire-me/index.html",
    "revision": "4c827871215d53ec8eef4ccb393ba8cf"
  },
  {
    "url": "how/index.html",
    "revision": "ac61240a3c2c2ff4f4507ec46546a7a0"
  },
  {
    "url": "index.html",
    "revision": "8cdfd20c6067c3789d3077959d54e951"
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
    "revision": "fa1e5da18833570acaf8f395f748fcbb"
  },
  {
    "url": "mentoring/index.html",
    "revision": "4852fa46c5bce53c7e88327f814ac3cd"
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
    "revision": "5407b439b4e85a06740442e5ec280f29"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "fbf761a913f32d2388c3f999c9cb8d43"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "7419d31ce19b986bd8ce6edbb54ec4ce"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "c7d5a380bd2646f40d5f3fb2cdca9c3c"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "2581ded32fe20809380d23a9ad81e6c1"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "f7f7d6b2ed7e23ec88757aea2ae723e0"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "bde991569205092bb48cd30e26073a63"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "b47a85279adba9ecaa92bc93fb744ed4"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "755a301f3466d92e8448d790bbd96384"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "bc62b9631f79eba8d065209a0cf4adfa"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "e80abbfc4acc518c8585aadbf4ad8fe7"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "50c1ece8362dc24c3358016be804f8f3"
  },
  {
    "url": "portfolio/index.html",
    "revision": "0672e0b341edc4d656b11474996e7874"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "8f8c51ed9671da8d42d3d8f37168a836"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "1909fd3b196e9c54739f6aa7211efddb"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "b7271a243e5a540c71ea1e040c553bc1"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "655a2f6f465d56e656ebbc9c4c45d2bd"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "6f2951f8c99dd914a63e544c2ec87a57"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "06ac1ad0e23dd4743aabe663e8c9a22e"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "62ea3615ef676677d873be8549d50d7e"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "b33d7f52d69c7ba6877836ba2714d751"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "3800c40cd7d67b500efc64f8601b9942"
  },
  {
    "url": "post.html",
    "revision": "5829535fcfd13d486278e36173feae5c"
  },
  {
    "url": "services/index.html",
    "revision": "0fb32d7c47d850ad302d26b3fe9c6fb1"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "05c53a0cf0b1b4bd4053fe8016ad7f33"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "f7788deec93bc796d05846dd42356386"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "51434057d76b4a2d3e8ab96a23b3a233"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "a314465e54d7d46b2eb3e6e35aeca9ce"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "4700f835f7fe9b8e9d47831a88cb93a4"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "cad4314995bb514684c6b35188ec8450"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "e9ab62f9e2c5309bdb3d2fdfb0c76a21"
  },
  {
    "url": "tags/css/index.html",
    "revision": "fcfc141e1064bf985213f058ee03ba2a"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "f0574b9a27a3d93914e1e42e98f97cc4"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "b306e2d27383b29ced3d812048823c40"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "d0d22c354b0986364457782cbc726de1"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c662773bfc262b997f8314aab2417144"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "15d688ad4ec29ab5555867a1b8b4bc35"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "b86a17ae390a7bd44047306fbbcb8e5d"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "1d846ecd6efbe92e9d84979901e9b057"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "877377da582d779a8c9d8fc0f57dad7a"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "b1f95daf23d15cc75b82db8420a47195"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "12a3f99df85c553b9ff087de267e8b3a"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "9e221416abd592c2f6dc9097c9d9f27c"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "61683c2b9aa3f36481eb0ad59f20d55e"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "98bebcdb925cb0ec9b94811b87732d78"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "99032f51aeb29517e19eb394b5a7ea6c"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "fe69dfeb5e55537ef5b697cc8a4b329d"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "bd82ba5cbf70d0132f6ced261931cd70"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "568ba490516cd74aab2a80f99754b6b3"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "fe2ddc812e83584998c865e85e4a4777"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "2d659b724b2a5fbfdd6fd532fade969a"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "31bc636309995a410831c7a2791ab7c9"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "109de3b45003c81fad2c38bed3c11808"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "fec0c7ff2a0512d248536546eee83aab"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "f5a911dd31f09ac7b5bf1c7c998e63bc"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "b7a40226b846b6eae9571a0e6d747050"
  },
  {
    "url": "tags/server/index.html",
    "revision": "4f265a4b6786ecf40fe22ba80e166b74"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "5fbbf7d9d56984b057b6cd18a5320953"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "cb5cc3da78c2cd65cebdcfe5c01cf43d"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "29099d6c9b92617270cd6718350485cb"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "65ad6c46f58aabb5fab5c3ddd2fb3d72"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "6f49befc79a0099e395fb4cf75410af9"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "76c4c4d8555c7410284fa1a1967c5913"
  },
  {
    "url": "tags/svg/index.html",
    "revision": "0f32614697306ed8d0e997448c27a835"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "63e6247821b1793d05b8e68640d38da0"
  },
  {
    "url": "tags/ui/index.html",
    "revision": "6c374c1d9a6eef5fedc6c0aff271c778"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "b1a83338269be510379e175709da3f3f"
  },
  {
    "url": "uses/index.html",
    "revision": "3ac5215a74ed84523b39d3e35477b160"
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
