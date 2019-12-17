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
  suffix: 'v1.1',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "74773c6cad26701ccb08cdf936d1dbfb"
  },
  {
    "url": "about-me/index.html",
    "revision": "e49e81322bae209f7d90ac1c791a589b"
  },
  {
    "url": "archive.html",
    "revision": "cbdfcb5102a5fae60764cc7b31d200b8"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "168ebd816f9cfc9222d26e7eaf8da8da"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "e7ce839743bbf8e0728f51b9bee3401e"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "012190f7a51807354df9add8a5fa15cf"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "c7a30a6c1881d952ede5e6b07597d233"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "3cb2e947fe2b5ee076045431f7001526"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "3c6f863ca3b947a1548e291d44595f4e"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "3fe99b336a43af18768f5a6e643a163d"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "a1bcd86e29c416330dc1e41f53d03806"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "b9020d0f493f697dadfe1e27c3a3a2e3"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "28cb49a2d4dd77db926fa637ec349eaa"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "15a9ec84be4493dd56c0f1da04fa692a"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "f666b02f8f1c552301f86fdabaf49c9e"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "831c588c5469aab1b0a1218bd1e4c108"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "7552f4a95ace891fff8af26bc7efac81"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "9ef7d8c0d102ce3f3589d52e812229f5"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "4d03ab4d2b6e5646d9ea8f82b18f9903"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "dc16ce1e110556f30b5d7a7f5089e98c"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "3457111c341da58e3d69779426241940"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "c3e0c348a26540aa46f664bcd4b1d1ec"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "d658e9874cff86a0049927e6e2b4fc9c"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "13dce1e71074f58c8df43f6d4b3019d3"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "536193183c3ecf6aa69e5f109ef3ba11"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "08c264f13c86f6ab5f6fbd90bb12e554"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "39fff2b0856e7fdb64e2e485c4f1b058"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "5c7d3aa3f880b0c3561f702e058356e0"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "b3616c4bb59e31bb33488bea71643f21"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "750e7350a2ba7a186d08e9c6b17379a9"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "1d66ba9f1541adc9a2b8a217431e269d"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "633f97a873fb526e7b1dde077b4f2874"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "b479da52d0b32096a9a9d2a03517d70d"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "3570d76e2c8b2763e81c860f90cfb2ef"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "fa6e5790cff61038d98746284b6cb3db"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "12e1278e785a32aa9cc82a2f25024b7a"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "bf29eee56412217095b5ad4735ffbd17"
  },
  {
    "url": "archives/index.html",
    "revision": "cffd8d49b0e5b87ec6c874de5072c73a"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "3401ccd34ac1658bd317f4b19dc88c07"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "c57441f118914ded05a90adcc448ed50"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "5d56f09aeac6575b4ea1b9491effab86"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "61661e2fc3e5515cebae3a2c8320931c"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "fea47c8f577d39601d3d02b401c79912"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "f3f8ce797f7da931dcb7821e6140c675"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "9c638e3a5a007ade4430455f13d0dcd3"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "21d61f3c4454940f1d555d49433e7b20"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "8d38ed6aa386e400490e15cc9863eebf"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "34cd97e723119503ae23fac103f30907"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "4254c9e617d9073dd7acb6caa87eacd1"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "bc12af915d16afff405cea2c992fe57c"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "d02841dc960618b9225144ab6fcdab4a"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "8cb36bab0efcdc4d962e91f425034685"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "6c808be57707d9680fc7fed59a0457dc"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "2aa35ad7d129f752090f4fdf4316cb6f"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "08b99dcee08a21036dbfd6180c5e7dfc"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "138e6543e104340106e12ea59e3497b4"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "f3bbf90d688c9dbb1885c0b19ec83498"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "b520652415f6d51a67d72444dd9beab2"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "d0c544629ca7f294a7d5b78af7778c4d"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "60bde6c966c432c19c5c4d43083a6fde"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "d48720a87c0304f44c9441232af5b22b"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "7e6ab622114215fae6be9a2260e34f8d"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "2cdbe1ef286050bb6190f02b89dfaf2e"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "85a1b6924a9c2452e3a2d7c282c4685c"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "bb59a441297077663ab9b399f1d22a3f"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "2136d0f94a5117a650376ea3fa7f51b5"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "99824c262e95aadd974d3111579d9c3c"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "a86d8ba98501fbcfe924dced1dd8b006"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "6757c9db3c3d2ad75957cee0def1f07a"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "e203cc4c2e1738982c82f24e7e713adb"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "488803450d5eeb86d7ec556e9962915d"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "5e2df061aa0a208d21e83fb7cc298276"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "0b104746cb26e2a684ad6f7d64cabb76"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "18b375f71106416cd847e46ebba73375"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "6702ed6b248f5330b61d1e3c2f2f48ae"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "075f636aa0684d8ce3968e9bb6502b42"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "f40ba2007834ed3dc6a5f09b07ad8a5b"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "7865961b5a2a18ecbbebe34e6a5aa749"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "281a9cddf253c22a75301cf27a9fe52e"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "358d02c9bf768e313d0d3eace98579c0"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "83056cedc04f31862e4b4a43dd8d689b"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "4b297522269c99f7b902555248019340"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "54af44210a9d53b6931e753ef544475d"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "2b32282489f2afa715f99a39e79523ef"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "9d357d3029530929e76a2f405b338cdd"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "c2cfb0bd11e832f64fe49e06fdb74007"
  },
  {
    "url": "contact/index.html",
    "revision": "8bfcf8525e9389a92615d0f053638e31"
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
    "revision": "b4895fb00776ad208caf583b84a03fe5"
  },
  {
    "url": "hire-me/index.html",
    "revision": "8223f9fad180704427d101bb0fdb0410"
  },
  {
    "url": "how/index.html",
    "revision": "4acb486c4ba3a16c7684453c4decc26d"
  },
  {
    "url": "index.html",
    "revision": "56206049708a47f3cb387bd54fe02775"
  },
  {
    "url": "js/index.js",
    "revision": "9eb452c142e140c7fb53f354d746fc7e"
  },
  {
    "url": "js/index.min.js",
    "revision": "685f6c48335d5fbf9414cb270ed853ca"
  },
  {
    "url": "links/index.html",
    "revision": "59038656bce9139aa87f5819f2a9109d"
  },
  {
    "url": "offline.html",
    "revision": "0b1c5383672e7593a2b9bace819c6bf0"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "6b41d4d7086caa07357266c9b0aef135"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "4a6e9f6d6622d4905ae55c3d92f91f32"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "81130c3eaf45930a8b00b55b935bbe1d"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "5cfe645c90b991099df7d2b09c645ffc"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "029d3f2a12a6565219e4e06fce1be5cd"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "95c7e2039699aad2a1e0c93329d8114e"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "85fde899ae99a62b3aa252e58e171606"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "723b7b5d291c0b85c370c7b27f03443b"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "09b2e0cf9a00e7c51c6d477763a8800f"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "ded9201aeb0130dd022284a4f3561d66"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "8648287229d6b345fa6311c8fe97a26f"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "33d5d102e0e57b44b7dd7dd27cd77c29"
  },
  {
    "url": "portfolio/index.html",
    "revision": "118c4164ff1fa6b725ab534e9a45bdfe"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "3808347fad8982927f6ee8036bf46dea"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "359ab79b31d464aba921f51c95cf9586"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "da57e5cdae2852e85f35563a6592513b"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "b1eccb12298116a771c51ad72d6a48ca"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "5ed8595c1cad7af989f292b0d474108e"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "7543906bd17fc852e934d18caf5f5728"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "56e03199640f6b824f851a8493bf9bbc"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "05bfa678e67e71a893b344365faf18a1"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "bfdbd81773406f1b6b7dad6b53c11f1b"
  },
  {
    "url": "services/index.html",
    "revision": "a71e3b812f660a42a6d3df517c83efb9"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "3e7a70cfce722ee6f7e858dceaede4a3"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "18f88303710ab22134a38a22d0d7c6a5"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "94eba9c1382d903f95cf8dfd2d155ec5"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "692e9844859ce794ffd1432aebc0c3b3"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "9dab7131556463497026654286638d9a"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "1f540c47294268d7cd39327a497688db"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "e03d10e269bd7398ae285a4151abd7a5"
  },
  {
    "url": "tags/css/index.html",
    "revision": "333f3ee9c1589fcb40a5bd9257cf179f"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "0216522fd9fb75a2cbbb25ff16de8be4"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "910a92fbd9333681ec5e56f13f5263b9"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "80fe1073e65765f9244b75f38e7790bc"
  },
  {
    "url": "tags/git/index.html",
    "revision": "0afc6107c34eb5fbd15bf245a92b6f0e"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "bc5ba0d2bb2f3214e685c9cf070c4237"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "8c5048cce857602a341f118f49e13443"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "6b7c63c7a4a0fe0613629d9030762c64"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "75a9f5822850eae5354901fcc5649bd4"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "bd02d1b90e125a09b16eab186d481846"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "34164c629c3315c8364ea4a3a12dab66"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "21b759a4c7c1ce1a8f0eab44dd649dc5"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "6e183081babf530777f1d22158c95a1d"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "e691fda9471533f0118fa9c5b5d15167"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "49109e6c84e42edaecd665ab9eafae66"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "797fca022d39e2e25048071af183f6f4"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "21ad122683b0d4acb4b8a4422512a583"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "7b957871f7c55e1b87b053075fd23ba3"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "e7bf207f30ff6817533e641dd2c02326"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "1f6025deaa0473257aface44db47a3ec"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "17735e72f756551dff9ab3942985a6e5"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "7b5573bc0e9a0e0bf5997d730ee7b033"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "76a79769812589c874d96d37310d0027"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "ef1fa83460fbaa71eb750e44ea652f31"
  },
  {
    "url": "tags/server/index.html",
    "revision": "cb61c762d8d6287b35e4d913389d8ecf"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "b730d7ef8302d9053e615d8cb6a6c4f5"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "926b388278951b3b8dafb10d6af618f6"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "91bb190c24d3bc214a81103106fae764"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "9a47eeb76ab5e21175feefd92df7b218"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "555995c6437967ed81bff60da176968e"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "0206feccd306056356928e4e10ac3d10"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "d804c9c95ba16780bcb27ff84df9faa8"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "2f8c83941a74c0914c10d27eccdeaaec"
  },
  {
    "url": "uses/index.html",
    "revision": "a2ee58bdf1eb6ae66a1e5d86950861fe"
  }
])

// Serve all html files with StaleWhileRevalidate strategy
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
