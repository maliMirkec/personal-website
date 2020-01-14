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
  suffix: 'v1.2.6',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "0b21e0c308f7836a501e7d64843223f0"
  },
  {
    "url": "about-me/index.html",
    "revision": "488986c1e39fa93b8ddaa35a1bb2658d"
  },
  {
    "url": "archive.html",
    "revision": "cbdfcb5102a5fae60764cc7b31d200b8"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "033b125e6dd5310b168c4d71426f66e8"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "4c894cf991aa741d6feefa7ba995c2d6"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "8c7c219e2b57a6a510ab543fedf4c0f1"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "9f4b18e8d1197c2971f55c46b4cb0144"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "17aaa2f258d033b57aba8769e04c6018"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "28f1e50d0d07810ff3b1a55254fc20bc"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "683500cfeec5fca4e3d21484dd629d74"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "0a7720fce9dcd7eb8fa059072fa934a2"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "015673eaa75215011a409ae07be4e71c"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "2f8171663d7790a696d8f30652d95cbe"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "3253d9a6e0d55a68b4e96edb11588dfb"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "3f3a9877fb0853e3472d2342e5dd485c"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "d665b3a1a01ade83ac889deb04ad1b27"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "e2b81140d43bbc9399a66f08326d3d11"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "0a254320c36f8cc865295b7e7e63a99d"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "860f249ccc04a6626bf10c3cd54ffcc2"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "8e38a26c08f4097839ef48e7b898d063"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "b28b9b9b68fdf14dc1da4aec929fe271"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "05d1a04db4bf87e787ec0b0d9705578f"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "4b65eccd144a0e5044b9b5b5f2e15e48"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "5c5813939c69b8313c0ce8d2d723ac5e"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "975a408b1f657d4de825e3f594f90fee"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "f9451372fa0e552fe2bca9e34f851a72"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "6ae0cf955a73a2ab1e985deba3bf2d67"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "d9424d0a3cf3efdfb33705a9c54ca7b6"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "99d6cd1dd28cb09af9fe2aed5265545f"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "dae9930c23b08e30837427745f86e0f4"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "1b114b6267453d0bcfa695b0fda8bbd9"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "858c4086dc676bba4b759830f50bcb8a"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "5c44f6a1210a04e54f0d7b866931b08e"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "c96b8bf8b219ef152d02e45d77fdfc8b"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "82843acb4c21ecb96e26a58f9737b3ab"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "b9d2c10d0dc06e52899271878fd1675f"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "26a9f3f87b570ac092286fab042ba71b"
  },
  {
    "url": "archives/2020/01/index.html",
    "revision": "d880558228478782fbbd719c13ba500d"
  },
  {
    "url": "archives/2020/index.html",
    "revision": "8dc1bad7eb039fc65a95cfbd1feca5bd"
  },
  {
    "url": "archives/index.html",
    "revision": "a50f05c01db0bf689e48a7cc0a7dea06"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "5a1ce91db5c0a1512037db7f84542c48"
  },
  {
    "url": "articles/2019-lookback/index.html",
    "revision": "87a119871cccde03146cd58b72ba4083"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "841fd06f13f77ecec6ca62111fcff2de"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "dfdc0bdf226723a8035f682f90eeaf8f"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "44ac85f4f035bb517ce96566b88b9732"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "481cf7de7d8f50eca9db2b5a4b90bf9f"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "1bfcf2edea40c75f47be14d00c54b124"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "bd3174e1ba76a8788c491295bc622b51"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "60f33d7b00dfc719a679e0a905905e9e"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "701369988065febbb82a463889472418"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "6bac4d348ae595dc2e8270c61874f722"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "49fff28a6975320f68f66a9e51598886"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "6b50d4704d35e5232caf0563b1b9ebc8"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "8826c7dbeb72b9f36d23ad7fd224990f"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "c5ef74e1aa06a6099f9b24e91782002e"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "ed9753941f53ad0e84be475395b9f88c"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "d5ffeb6d88adcf783d144bfdaab28449"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "c3412efc9d9a877455c0eb3ea31815ab"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "01d61bb75406e04f3ab6739bebbc553c"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "4eeb2e65b2b688f16f12d4735a1eb867"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "80cf7e447a27c1dbff854c5dd2ee9695"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "19409a2c89b09b9ac3c99cfe45c79719"
  },
  {
    "url": "articles/how-to-animate-svg-signature/index.html",
    "revision": "856e09860d56bc56813c5c53991872e1"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "99804113d90808ca4c8a0f46fb4d1020"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "da24d45bbf854587e78a7a24d882cd6d"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "f2ddf193be26ee11f83c6d10b6dab6c4"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "12112cf09ed9f78348d674b411085856"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "6d0025a5ada6820439853d654d7a0eda"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "8cb48a50c2260b8905f3c921292254cb"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "5f2b589d3e46529a172d3030c45257fc"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "24dcad272a3e15dba29f37ff1777aba3"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "9e4a687da39a00878f1d8aa52cd27207"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "0c6069ac7462d6f1fea883f9597b65b6"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "b0a3ea0e86f0ef5cede1246a88d122ef"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "cde9f11404620b52e941f4209fdf7654"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "8941e886580d7652e4f895a44771c5a2"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "810302ac8c44b0880f89f64e1c359b2c"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "ddb5022fc505f025597ad17e6b42cd9d"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "4ac86a3381c2902e552744105999c64b"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "fb81b9f1a89b15bb4f751a29b4512134"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "aa172048c7ce52baa96662e4c18b22d5"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "e44f0cee8a4b8199194b96e2384fb9d7"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "1a13d736ad4226637cf11c4177e231fa"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "2f64a26992231710d168d5cc1be1d6b5"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "c364973bedee00c710571ff9b4843035"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "12bb171d0b2f87c4b7b8ccec4ab6e7dd"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "4488ff427de66e025c2b08f868e458d5"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "1c64824c24e57fd4401e882ada47d4a5"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "42fbc7a586483b5d3a8e5d95dfbc52e7"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "cb4680e6ec69764ba7f6d2790820d022"
  },
  {
    "url": "contact/index.html",
    "revision": "269fcf2c68f5fd39d8d72619be5ac264"
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
    "revision": "0e9db6da8dbdbfc2a1df3daaac353e4d"
  },
  {
    "url": "css/style.min.css",
    "revision": "bee437b2177cc01d36e527d3a654282d"
  },
  {
    "url": "css/style2.critical.css",
    "revision": "893eddab34fb0ad86b52f26eeb78f6e2"
  },
  {
    "url": "css/style2.critical.min.css",
    "revision": "17b054189b38307e94b72c715ef8afe2"
  },
  {
    "url": "css/style3.critical.css",
    "revision": "fdbbec677e9fb9d2a560683dd2adee9f"
  },
  {
    "url": "css/style3.critical.min.css",
    "revision": "334e456aa04ae21e4d2f252111612418"
  },
  {
    "url": "css/style4.critical.css",
    "revision": "eeaabae580358b6024169d6cbdd38305"
  },
  {
    "url": "css/style4.critical.min.css",
    "revision": "644df97e7acec01a8c38572c8eaf778b"
  },
  {
    "url": "css/style5.critical.css",
    "revision": "c4225eba056e60ffa5778dc4001199b2"
  },
  {
    "url": "css/style5.critical.min.css",
    "revision": "a68e3dbef7cb1731ad265344aca84d10"
  },
  {
    "url": "css/style6.critical.css",
    "revision": "818f58a6caf2c76491bc09f336e91c58"
  },
  {
    "url": "css/style6.critical.min.css",
    "revision": "bac5111f46d71eb464bb5c0fe45c33eb"
  },
  {
    "url": "css/style7.critical.css",
    "revision": "249cbbe6095703e3450f51490214d039"
  },
  {
    "url": "css/style7.critical.min.css",
    "revision": "26d1cdab749a3f2ec596e1b6a0fd393c"
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
    "revision": "8406ae6a425bff8785acf7203a96bd24"
  },
  {
    "url": "hire-me/index.html",
    "revision": "934d6400393884fa628108740fb80bed"
  },
  {
    "url": "how/index.html",
    "revision": "6a6b6ec0ce73f513547d6b7abd37ba98"
  },
  {
    "url": "index.html",
    "revision": "0e3f6b44fa75d3cba4742712f2df99ce"
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
    "revision": "9dda0f13c523695e1b68d6037252ebaf"
  },
  {
    "url": "offline.html",
    "revision": "9f7883a884e5d8f9bd4b5047f6fa3624"
  },
  {
    "url": "page.html",
    "revision": "998201bbc380bf140bacd5a7797a9675"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "be898dfbc422e89d2b5963b131d6776a"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "b5dacdc6a4e264284a744c1c48bb44c9"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "9febc78289e8fd88a332cf6148dad027"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "2e8c9b9b1de580c60b1aa69fda6b7b74"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "062f9f58485bee679440b3242f6b6aef"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "584645e8668933990ca4792ce19fed5c"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "27f7e00acfe6905a9453d58755fc4f19"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "e341733f4768def17d549c5523afe2c0"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "f2f47c9356084b5afbd70d206c88dd41"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "deb8d83233493557f286acc9dd44e693"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "d261a61f3684b087a1ad5f323c9a00d8"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "7b4985c9278c26298744b9102cfce9a2"
  },
  {
    "url": "portfolio/index.html",
    "revision": "9e9a707cd9cbece832424016b5216106"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "4b9c7f562b18e34005ff675ffc7a3946"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "04c72b077e0e5a77edcf88a9381b36fb"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "d3a7c3cfe8b1cc3ec22d03dbbf0abb0f"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "2ba50edf3cf19f5cc32bb7765d14521c"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "cb84a5f2247268006bad66ca2a65c6da"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "7d45389fae1c3b05ecab62ce1d6d51d3"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "9b7b68d9d8e0032d34eeb9a22c370912"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "469c4f256790ff69138fb0e39d9f05f4"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "dcfcd2b8c36310e5f43a2c1ae053b56f"
  },
  {
    "url": "post.html",
    "revision": "998201bbc380bf140bacd5a7797a9675"
  },
  {
    "url": "services/index.html",
    "revision": "fbc2c4a71cf65d69bfaf09fe8a564b83"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "8e262f7e5dd59b6c33c036098157ea4a"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "fae8348ef7bd8573c82ff3e03d1cb47d"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "1933d49284c1fa63cfc765ebea9d0410"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "baf8ba54fc1f2228bb1b0d30bbea323b"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "5bbd65e8ac7d62f0bb3332e4f769d19b"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "dded6ee284d805021bf4e0392013b578"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "38e3bc5926dd07fcc1c073ea2cd0ff4c"
  },
  {
    "url": "tags/css/index.html",
    "revision": "ef1c61dc8b7491c608b9a8b67c3fcdac"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "0724dad3d5fb6c7773e85b5c301bf910"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "633978a7c21b2bb131f3cd9b80a9c136"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "51838d28e4f07f93c389f9bcfdfc7a29"
  },
  {
    "url": "tags/git/index.html",
    "revision": "fa5dd6e70c83704bf40cd8c4b2851fad"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "ca6785f057be6baae6e9792d1d5c83b5"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "7bd9d6736752506148d4471f306b74ea"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "3e2d6b482dd3ac96ed4a7ebce54fcdab"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "fd883bb69607c83766dc245aad024079"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "3263b5f38742700c0f33a6055a9a0473"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "1f2905c4573269afa9accac723eebddd"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "28f890c5ac4fcd58eeb60596c1b48184"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "b8ee27179837275be35c975bc79780fb"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "118d1ecd2b3f1cff73bc3be8cdcdb37a"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "c02075698cb774beb3a7a71e9a636907"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "76354b44d26e67b63011231c288f5208"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "aadf771ab5c88eddc58b1c1dbae40d70"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "124deb7f3bb591085a07722bfea7e077"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "c128b63a392ac6f269b36879223c9f16"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "0797bec86393ec0465f61af23ddddd39"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "5a7054ad5919113649480695cbd0626c"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "f969d1c522cff97f968a00c512ebe44c"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "e8fd0599766c7fe50975d514349377f2"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "dd0add45d8abd1e29a50a4549d4e39f0"
  },
  {
    "url": "tags/server/index.html",
    "revision": "7d66de788a1b5d165e11cb954e1e9bf6"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "8861aea4bf668a8fdb5bfea48e59eb74"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "d59a461473ce438d6e3a9f7bb14b7feb"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "cfcf4e4d4be157f9cb1024c6a0ef51fe"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "058a455224988934f1db97b03bcc2735"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "1bc76b1ab55d90be052a20883993d6db"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "bc1513bdf5861f58035c1ee7ba137a72"
  },
  {
    "url": "tags/svg/index.html",
    "revision": "bdf37b221ea68d647ce93f6ddd9f7896"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "6ffb5dd485d698ef1c7e4931dcf2c5d1"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "64d8ced8c4d788bbc4d87ce3a02ea910"
  },
  {
    "url": "uses/index.html",
    "revision": "b5f52b6acc80998566f56a3ca06cf21e"
  }
])

// Serve all html files with NetworkFirst strategy
workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.NetworkFirst()
)

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.StaleWhileRevalidate()
)

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.StaleWhileRevalidate()
)

// Serve all other assets with CacheFirst strategy
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp|ico|webmanifest|eot,ttf,woff,woff2)$/,
  new workbox.strategies.CacheFirst({
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
)
