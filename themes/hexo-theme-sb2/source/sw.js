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
  suffix: 'v1.2.8',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "8c14a1e74edcdb1770ce84528ae97026"
  },
  {
    "url": "about-me/index.html",
    "revision": "9c20dbbec55276d0767701a27ccca9d2"
  },
  {
    "url": "archive.html",
    "revision": "fd2ecd0f155f28068f49bbb054c6db2c"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "9c9f9e846b76b5d37f6883f1d9d46ce5"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "4c2d6d3c730e6f82b07fa0d3c67e003c"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "79db6a7dfa09409cb3736540bfefd8c6"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "368cafb9acd0fe776ffbe407357ab121"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "a97adb45cfe48ce81ca589108a6655ca"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "2b4cc69ae5001f577a4217dc01e91635"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "c4d0a38b5b46ca1d723d0e580432adc6"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "b6bd1ff6385059c4741e62b5fb0717f0"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "2c9e8223aae8f0cb37ee1ab0200bc78c"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "7ab2a0b800e1d4aafb7aa9dc089e710d"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "0ec455b70345468a863ff106b91de7d8"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "7033a8e027bbc1bd18f0e9c6d5047d77"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "d0295724949a9066d449c22ae5975e2e"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "ad58dce7ae97481d3bf72955d90dfafe"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "25ef80f68f2a0e7243efaa79111b5d86"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "d075e407d0763c8a88d454472960e00b"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "985b17842829ab617a8c6f4e238dc2ef"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "13c6096b6b30ce6bc67726a8132489eb"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "524b2a7e7c21d9022d28dd829fa68c38"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "72e3c8b06555110cca5a186a007555cf"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "cefb923f320c0dc579151d0a723df511"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "2b0c1da27311cefd78a53762ef800ca6"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "7c59e082782cf43d02a64af075d3c0c2"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "57e2c08ce6c591b0c61f0be3d15e0447"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "35c50c144381642efc0760c0e2cc351b"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "18d173fdc967db76319a181bdfff21b3"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "bccf2676c286c9d3de37937d682f6e2e"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "f2f94c60a21f41e9a32d7dd378106bca"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "20f516264b8a06d1616c16ec40d3586f"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "707208990310206efc760ecab1d81fab"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "8c48ac28bdfa29f1cc3b1f390aebe3e8"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "53444804ee6650b54700dcefba3d4980"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "80ea4bd167e40afaaf5bf54017ca12c9"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "f8470324a30789f3c823b4d9c2117bf2"
  },
  {
    "url": "archives/2020/01/index.html",
    "revision": "184385d58797b903d2ad23331a7571b6"
  },
  {
    "url": "archives/2020/index.html",
    "revision": "4d88d94eeacffde17e6dbfc15e69e75c"
  },
  {
    "url": "archives/index.html",
    "revision": "957abd741dc0a750608d8bae239d240a"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "7a63e23277434bed669b546dc5f2ccfa"
  },
  {
    "url": "articles/2019-lookback/index.html",
    "revision": "f1d24e97302f127ca75efd2ef8465a54"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "f4d7d30018e26848513b59673bacd6c5"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "37e09b93fc41075346914174a83e4b66"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "7c13d04ca7f4a32e1130b67215bbd099"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "9535f4d8ca6072906bfb4bbc7a75f5de"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "47675419eba80a229bf073a30ff3131e"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "851d6d33df1f52569b05083e5dbf6c84"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "60d94226a57bf10d90272aa5e4d9c659"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "e7493b05957312799924bdc281aa04d7"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "b66df4b4ac4e04df6689ad44dd46757e"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "ff11dcf60f0e53f96bf7d230163d88c3"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "b4fad3d94123d9461c1dd7425c89da70"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "96fce18c91d812afe840120d594a93cc"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "8c688bd37d42544550490f6c1e1a33c0"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "200a4134ad3d146062d81f9949d12e41"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "40fc7865192a02fe61fcb56d5ba9648c"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "c46048c25ea29be2c19e561470589f5f"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "2dfeec7e2758fcbfb19a67679a3d737c"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "1239216f4abaacbae410f1a717a18816"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "35a8dd650e56f6e83332a8301f3d6193"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "21c4907ad7e44afa9648fb13731f2ef0"
  },
  {
    "url": "articles/how-to-animate-svg-signature/index.html",
    "revision": "bb0f95e35a1107be7de8276a1418efd6"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "09d592d222e9d013d1acab74927af61b"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "1815b0fe29f875d243ad1d22002a60e4"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "842feabae083c6ab6709e25b846a7b4e"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "ba7c5b7d518f0a2e4a53c72eb40ea074"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "855582740a491d993a0d9f6e81329376"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "5a6291626d85e78bd0e3ae5f4e9f7d52"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "af9e40691c69f3eeb35926bb7ca9d20f"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "ddc210bf67feb7da31e371afac050432"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "381242873b85d9c1c7f21adbbfe9d072"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "ffc981e2e0fae7e50a9d282e341f429e"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "c6a4d7a184ace8e703c706ed957bc662"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "1fd3dc4b74775d58a66a25b8da00f559"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "9a9f6193b6db4db3bc33120d58d0f515"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "bfa2ea0805f166e05d1b532ffc301b2a"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "8c382370fa0c0a59da15d496b651b2e3"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "387dbc2a74b0d4641ab3b08438841b3b"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "3b6f7d1a9d060974742b32a060670077"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "68d66f109f32c6a4edbd9972cb009f4a"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "accb67f8cbae28fc715bb7647fc66cb8"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "652077bc2583d3fb1d4e356904b55dea"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "0bf9c3120d5c24087e368fa6ad162617"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "d82759f7396ccb633dd5c533206dccb3"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "1e8f5ee93fa775846cfd748754ef8eac"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "6c85042bd75399996900edd210c3a5c2"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "aecd864983d8ee2a9252414641e2c29c"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "0af75ee75f8e790e91326fb6126ddf3b"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "edf5afe04b100dea5b095346174c452f"
  },
  {
    "url": "contact/index.html",
    "revision": "39c3bff28ca71df621efa50705adc3cb"
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
    "revision": "91a928c0d10b5f834bbfcaca0b50bc0f"
  },
  {
    "url": "css/style6.critical.min.css",
    "revision": "6f87638f6752da12eeda0b1c2451464c"
  },
  {
    "url": "css/style7.critical.css",
    "revision": "dfb3ab062a169fac6e9f03d46aa5a89d"
  },
  {
    "url": "css/style7.critical.min.css",
    "revision": "762fef2e695c4e75676556fef961b778"
  },
  {
    "url": "css/style8.critical.css",
    "revision": "6ac5eb46df84f60342adda8f79cd23cc"
  },
  {
    "url": "css/style8.critical.min.css",
    "revision": "f254355982b68486f4ee81ab47d2b279"
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
    "revision": "8a27452e54b04c60503b25b533463fbd"
  },
  {
    "url": "hire-me/index.html",
    "revision": "243fc387ac65bfa0a893846225aa2488"
  },
  {
    "url": "how/index.html",
    "revision": "421a187b56e6e7e0bdf51655d7f74eab"
  },
  {
    "url": "index.html",
    "revision": "11bab5a0363a1730e6a1daea60df1e0a"
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
    "revision": "ac735f219c3e6c177455bf8540f6e5c7"
  },
  {
    "url": "mentoring/index.html",
    "revision": "84d0e0afeb907b70ed5e428aaeb135ba"
  },
  {
    "url": "offline.html",
    "revision": "0f93a10469ce752c502b4b7b75d77417"
  },
  {
    "url": "page.html",
    "revision": "39ccd042f9d46159e1ff1249b526a787"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "7c12e7ce8d8f752f43c36f8fa649ab1b"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "750a0467a583fa378fbc64609c1cd8c2"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "d2decc38f467796220c4d0b0149bfb74"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "f9d50bd8057826f06de80d26bd532a1e"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "6c5ef5e93a2190f936f92f137e0a6d92"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "6de8a7eddd42c4a5c9c7ad3368d2aa50"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "1c5a2c7eec56c56b97e35ef88f0cdb0d"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "1b377866a3db35ee0dde41e8f4a5d55c"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "8ffd6da755ac319b08161e8af7399d0c"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "6e0524a5aee7d85ed95bd628de312d0d"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "f85f79585fb54e82e9b46b9369831abb"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "2cfc9be2ccc15c892c0a1836e38ab10b"
  },
  {
    "url": "portfolio/index.html",
    "revision": "fdad8656aa1970a318e30ae298abfee2"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "bd201764d0520c8bd9a762ba912eff60"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "0f24654619b8823da8a1f9be47d8648b"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "91a3743a0a9099152d22cf3c450ad570"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "2c9bc0f1bc0394ac88cc01617de406a3"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "5932f1610bcb8061620aad9c0813069a"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "db001370c2189c192439286d119a726c"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "ea110f283ba440a780200b28ddf4b453"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "1b4e6ac7f6dc6cdeb4fc05748ac05190"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "a43e148378608ae1db26195484fdd3b4"
  },
  {
    "url": "post.html",
    "revision": "39ccd042f9d46159e1ff1249b526a787"
  },
  {
    "url": "services/index.html",
    "revision": "3456165d77b061487c7c1452645be5d3"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "5b48461c7e7ee11e399fe94b08263f15"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "422d3c9b286f3e9ff88f7901a67490ce"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "0d0c9ccac0313a4d8ab729e128a84e2b"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "4cebff03a1f47f08d59411aa5790fedf"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "5efa07cbc04fe78123a19c49705053b5"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "913d419c90808f79c378dfd696fd7ed7"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "279ee446f197c37ba1194295c37e47ec"
  },
  {
    "url": "tags/css/index.html",
    "revision": "590aea1d014f0f9fe10e744648dc578f"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "3bd3607b8253f4f3913fa5763dde7616"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "f947b3eb624fc5b4767dbb02b65d6830"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "59633b614c22e87ab9808d3cfe9d87b2"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d0e5bdb6f8e3d6806defc69e3c344bb8"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "ea14d9f9f38b83dae6f24baaba54bf95"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "4590f9b118e521f743d9272d974d1414"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "1d204fb6227cf05ad589e2f967c40149"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "02995c8a91dd2fbcb134e3fb5fdbc461"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "08bcf1b1704b6b91e8584aede73e0d90"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "03146652e61e0bd4c63b873eb86ef29c"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "8b5f14d1414911d18ff5ec45248356fb"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "b103a303776a24d0c5b84a73b35813ff"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "8c7658f923a3b9d9ee72e1d8d80e5946"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "9474fe588c281740820e256d00307f77"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "7802dd32dbf97703659799238ef464d5"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "047d62bdc094714a385f04c09e6b4293"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "c7323c8b8d06d6bb3c70016f47587c42"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "5d32eddbfc1227f439cd127824ac0316"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "a6432f4763cb91fdc6e872846b5a5b5e"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "93c9f231a8dd4a4fb140683db76021fa"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "d07bbd52a04870c706456964c420cce4"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "2a5a533cd8797f6de3ef50c04297b124"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "8ac7cb89e4899f0646f80667b784e5fd"
  },
  {
    "url": "tags/server/index.html",
    "revision": "d63141042cb30d2161a60155e931440a"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "f3cc684d1d176dd7024a8f1694415b81"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "d6217fb4c616a243d927489990798e2b"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "e2bc690164499a89c6f46cebf878fa1a"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "8627686de341e7c3550c513c89bcf8c3"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "97c0c49090cf2a2ac98a03e029dac25a"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "57ac4af8d240416a4c415e81db8748de"
  },
  {
    "url": "tags/svg/index.html",
    "revision": "cad377c7db93617ab1741df8f8080701"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "808b82613c9dc4c71a7629266b90faa0"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "e28b2242b711755860236fefa6f09e34"
  },
  {
    "url": "uses/index.html",
    "revision": "07d9e7bad8f7428a41c2998fa6e2931d"
  }
])

// Serve all html files with NetworkFirst strategy
workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.NetworkFirst()
)

// Serve all css files with NetworkFirst strategy
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.NetworkFirst()
)

// Serve all css files with NetworkFirst strategy
workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.NetworkFirst()
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
