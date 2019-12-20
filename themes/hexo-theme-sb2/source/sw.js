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
  suffix: 'v1.2',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "9970db7bcd676a05201a50ad32e2c582"
  },
  {
    "url": "about-me/index.html",
    "revision": "fa1f8676dc8a0fb204e27dcc089613d0"
  },
  {
    "url": "archive.html",
    "revision": "cbdfcb5102a5fae60764cc7b31d200b8"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "3c070f4038baddf8d630e721bd7ff7cc"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "08b4a22e6dbe0a611e53cc429e55ec97"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "33ce5fac90eaa93899c498ccd960deae"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "e6a878f5f91342243d4c4bb2c7920259"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "5964871c899522aaec3fd4f9b59a6fb5"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "5b9708ed687b3bf0184b2742903cf55d"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "ae4089f9bbeef0154358f0c8ce04c8e9"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "7f74e2be720bb7935f7743f1584c186b"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "37cb85c08c7098153c673f2ec5e8bc23"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "4c05133425e4fa2b486f81e681b5d954"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "3e59458d20f41a0b517e7593ad046acc"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "f810c112e37a300085bdfc86152e991d"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "7b4a68344887ad62d9148f83fad924db"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "36580bd1d3b8d4ce211c087c269aeacc"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "ea81c5f728b89f0ec562efc8646a570b"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "6044cac2238f0d9e12e3af1c0f7b9f38"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "70ef1ae7561b64d40c41ace7df23fef9"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "7d8f102496c6df56201bd613a728bdc5"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "11727422fb175cc8b9914663faf71b38"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "3ca7a8cf61262b20b7f4c38c656713af"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "effd456447566d54e18d014aa0972a66"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "ff8ec96bda500aad663606ca5e2502b3"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "aa2e41fa0a1275cbddb28241fec3ca1f"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "5c3a5a04f6b9a91ff76e4019633e8983"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "f54491fae0098cc2850b6c95c6f8f0d1"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "813bbabec54c3e08e22555518732bf07"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "5aa8d413e0ff3baea91d6cc7054e37db"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "6b4819590a7b267a14f7134ac28c7dfa"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "daa558cef94f4278b4f7b18cd5cee6b8"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "1532cc2e75249d52780daed449d81327"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "a8db0a289a7e0318a00b3ccd231f1e2b"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "47dc4aae560e2cf7079c412c10d10c16"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "24256fd0db1e7bc03ae5406962d01992"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "b442256c5775d83b854b79b664de0171"
  },
  {
    "url": "archives/index.html",
    "revision": "fd035db8dbfff37e0c9879b2b9ae78a4"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "228bce3402bf91e4405d23dd405c8270"
  },
  {
    "url": "articles/2019-lookback/index.html",
    "revision": "80cc1d5dddccf4eeb9fcf7f8a3f88d73"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "1ea052cbb0174d365779784f145e50f8"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "80818f72c501bccb01d3ebb7073b948d"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "c7a2191d25911fd65c234b3319a28c2a"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "01333ccda5ac516324835023d0f4e1b2"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "6fde4ad15afe21369c25a8466e0dc276"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "bd6f5e6228733edd9eca548e14d2c037"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "c93ca839cca55c89bae7c8e7637b2e69"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "e8e7781abe4e5e85a6a833825b6f6cc4"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "95ee9e4c075dac4c28784c04c4dc91d0"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "4f5891129823a6d756fb8cc4b5f96dbc"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "78c1a0f7dfd6c89f222dcf742dd9da57"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "ed4affd3d5ce422d08f23f042457eedb"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "edefeb62d3efd416000ecae12481dafd"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "ec2dfef02c1fa533cb1b01ad1d5eaa42"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "ee15b5153d700dbf88f0e5fcd252a6de"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "c43f1f124a0cc86d5dfdf87dd72a15a5"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "a203756444fa0de9b4e42ad3a1f97477"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "ca0a7c042f5a40c394ed9025686baac1"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "75958ff98b70d838246670b3e5bd48aa"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "4b8276aca5a15d258c2a46fe53cdb922"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "d5b48a32862991b6240f3f9ea0162833"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "6dbcaecba10fa861ffb2284b10987d13"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "c7aaf6c809bfbaaf3bd2439f1b9e1feb"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "76be83e493de9c3b944b904d5fb23d30"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "11699e3a6364ac579cc2a51adf47c9eb"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "259451eed98ee305496e744564ac716b"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "b4bcf4fed19a32064337b73cf6fca5dc"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "a8c0b6ee7fc5927336723fa5144ba5dc"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "cb5b8563a85b880fd96bc7cbbaf0d896"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "9039c0dbe5570f9ee163f83bfb5483d0"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "265ad3c3cf987856ee597a4a3ed8fddb"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "c1ebb1c8b464dec5b7850010d972c177"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "3ca4c6e09a1119831387d09309da1efe"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "73a5e99684bb037be3bb7163d1b0bcd9"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "4246d26397cbb54934ff2916d0ef0994"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "780f420a47ccaabc082a1e8329717e37"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "35b5aeaff76da9b92ff3bb166e129186"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "330294276fc2a91bacb8fa6792ea9df4"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "6ecb718e789fa9c803f5e34cadab3466"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "4ae6cbfa7229cbbaad524773411d2bba"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "b142154d3d23d8accb48b5d311b97f4c"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "8acb1d6b4f8464f584ab83be766b7259"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "c7140c02d1c4ebdb3df389d8f5f54a8c"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "0c9cd83232c7dd44f7d555806d09f6c4"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "d741ee00750a200bd51734804c0ecae3"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "3a1a024d1af192f0fba2f41a7957c66c"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "53cbbdc9d1af56c6af29e84e665aac89"
  },
  {
    "url": "contact/index.html",
    "revision": "05abd505da18a6bf3d2a36f24d1833c2"
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
    "revision": "78ed469ba4ffff04bfa34c1cff0a4f6a"
  },
  {
    "url": "hire-me/index.html",
    "revision": "f9d349b4c69ccbb2e7219e8b6a7708df"
  },
  {
    "url": "how/index.html",
    "revision": "413116df3b451c592adf7b3c41ae484d"
  },
  {
    "url": "index.html",
    "revision": "aac6c2906a704334a716a9226a2cb065"
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
    "revision": "c9d9f4ef8699ed751f9fcf0dd7970f4b"
  },
  {
    "url": "offline.html",
    "revision": "0b1c5383672e7593a2b9bace819c6bf0"
  },
  {
    "url": "page.html",
    "revision": "998201bbc380bf140bacd5a7797a9675"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "fdc9b6053773ce1efaa4b741024395ae"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "607635d6582f9985dc68da2450e14e1b"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "2733f504b991e97c1e67bff42240001e"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "6769bf57d059bf596a38e52263b15068"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "fcec7ce067d9a00dadf3e9896b817064"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "55cc7f2e6d9bdf1c68644ee3beb93d00"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "e704ca7a3d873bc2d79bb18ac60b08c8"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "410362fe2decf1a4d0a953d63c27523e"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "70fd7fbeb1e23816694d37a9c6924ee1"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "1a44e01489005cc25a74997a86928362"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "1ebcd741316469e418f44d886628f5b1"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "6e4d7c6cd9cc43ab048e3c2400d3f683"
  },
  {
    "url": "portfolio/index.html",
    "revision": "7a4d8227fc845d00f20dcc943f7a92ec"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "3ec11418c5e8f928119c0451e265a9ba"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "1591524f4e05543de6f013370f7e1c95"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "beddc6ba3c333cb9c34a53f6f3f0730c"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "318f26fc0d3ff02eb5767f96aabd2ae6"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "4f3ec9d17e88207dc4293834860694f6"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "27dd3f702d525b6f0ac16668d9ed979f"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "a61447496d7dc6560e3a61fb06b40876"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "74823c487b65681da6094365a976d4f8"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "91a3448dc78ab353dfa2c7aad50a0268"
  },
  {
    "url": "post.html",
    "revision": "998201bbc380bf140bacd5a7797a9675"
  },
  {
    "url": "services/index.html",
    "revision": "a8e522b20759ab1418587d8affd72b53"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "24b599dff5ec7321d6496e97d26e9c34"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "266394481f7e482983edfbe0612d0130"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "415448938eaf865447ef3bbbc4200cb3"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "9fc5157b98bd6d0defe1d38eae1558d4"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "c275e9b961fdc50480dcd620b6324b14"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "e201e2917b976c3eafc7a062e90b3dc5"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "322e16914b0e1c0fdf52de60aee03208"
  },
  {
    "url": "tags/css/index.html",
    "revision": "82e6a367bd2cb6b39c64b0eba27e6401"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "9d4132da7e9bba488105cca2f99ce396"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "aa15f4ca2c17bb479a64a6a61696e2f6"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "caa2746eab369f6b74fb61753f69a9e5"
  },
  {
    "url": "tags/git/index.html",
    "revision": "cc23bdbb3ccfeb7047b13c06e5f7316a"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "9fab977f2033c526d3a6fafcb94b7bbc"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "8c32dd1d7dd20d293c8856da5c658448"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "9b7a04906efd9b7d0efe257d7050d361"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "a6e5726de401f90b91c4d07f965a46a9"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "24dfcef2372c03b56b9381fc6530d290"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "6188ae16e26bacc0e113f9c0026e32d2"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "62f6ee576bd3f93c28e96578bcbc909e"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "e274f4d3105b9b527b452539d7435668"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "781aff43c468c87a9e976b34099ac435"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "3fc1fca10c822c134ead9f1fe28830f7"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "e4ba639d572609dd6a4da57ea8940303"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "082b56ee48847c1dd549b1d4a55498d4"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "ccb8b078e723f27baf87f7ba0b74c1b4"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "bbd0b565d94bd6d061906390f282534a"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "2ac51a4edd5abed4043b97ad767a2d49"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "7e06b92d567f6cfb4ab7076f7432a170"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "141079be729e2169b70bbba63ba872c8"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "8469d59b329376e6c08277daa43ed513"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "27f746226d001b18aca75fcac3516df7"
  },
  {
    "url": "tags/server/index.html",
    "revision": "f9f8d1702d5d001991a7190d01d16806"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "045ec8dfda3acc45c2e3c335175c5b27"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "760b6ea441539893d43162bc4de6dc3e"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "02cc6796ffac599f11ba9823c6752344"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "58efc9bc36bda104fb97e569ccc03fed"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "d296206072b7ea32530fc078fd965188"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "170d948a046f59b90e6d98a67ecf3408"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "c8bf144bd4c1569444e240254720c9b8"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "af792a082f504594edc71fac9cd7a695"
  },
  {
    "url": "uses/index.html",
    "revision": "44567d634248a559c254b5d8a8a5d212"
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
