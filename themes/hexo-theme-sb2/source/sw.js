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
  suffix: 'v1.2.5',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "8a13376de5bd78b5216707f18827a755"
  },
  {
    "url": "about-me/index.html",
    "revision": "0e9829144c8ad6eabeb6630d8b060db2"
  },
  {
    "url": "archive.html",
    "revision": "cbdfcb5102a5fae60764cc7b31d200b8"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "b81d3b6af2def22a1a8513b9f6ca4306"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "2498b1a2798ab2bdb37bef14c406beec"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "4eeb908f0d89301cbd80965a53ac6e5f"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "3675e7ee2213e0a41e96d1476323d7e7"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "15adba9388119a067f794c4ea98b2a53"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "03a3c3484667dbd02f3f08d1d175f3b0"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "7d75b9fcecf4fc499a0d9650bf8e9322"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "e5225746d54c48c3938f1c36ea22ea91"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "32ef9d147d5c36d05fdbc504008c992a"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "85629860abe2b49b423d841092b56d97"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "c7f133a831f03cb89862162efe950ab8"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "c9e2beba784e4ae6864ea708d6cfaf57"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "edc8ea7156ef46eaba163196622dab47"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "042c4e95162d71235492dd8420ea8c04"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "d02dcd5c2f36b6d6404f171cad04b62d"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "d27173f8946eb2f852ff95743f914c8b"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "cb49917d2de8a96a671e84a52a9c326b"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "b53254550dd94501779f395831aa3196"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "6a20c7422c6d09e709fef5a38201c65f"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "b289fcfb1a49ff6e748ee042f61b49ee"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "bd984d198adc09a15057cbc405974964"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "5907320958a393c954bb7264b2afe8f6"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "465650924bcd91e5a862f4a4eca6fd74"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "9497681e39e1a1fcb2c48f203bf41c4e"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "fe4e15fad40aa1d950f62b610443d323"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "2047c74edf79cacdcb76a24e0f1e9ba7"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "19bd2a20f4ff439b4e9defc9fd5ceed0"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "76ac92bf19a2be9cd499ab69659c5c81"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "c5d2341f0a40dfedb4134777a2b06c24"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "fa3107268595c97e2e3fd9ad21fb5d1f"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "ec59ed26a021eada8ddfa36e9eda4147"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "86d5febc281c109441007053cb672556"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "c5f250cb4d0529230d369ad4f43b95ef"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "e372480e136130e8d81a617164c434e0"
  },
  {
    "url": "archives/2020/01/index.html",
    "revision": "f03fcfbc02bf5198e4ad667488d8b1c9"
  },
  {
    "url": "archives/2020/index.html",
    "revision": "1ed3a1bdc939d2a59f5356d91af475cd"
  },
  {
    "url": "archives/index.html",
    "revision": "aa14541bdcf2ffd20209fb61892aac96"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "d039fcd73730529213e979b9a87ccec8"
  },
  {
    "url": "articles/2019-lookback/index.html",
    "revision": "22fca7c6096c048df323bb7c0306e37c"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "864cef492f072656ba40d0c5718c2c16"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "5f71cf7e9f9ec1b908e5b3f20e82dc57"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "d1f7fbfe94b23f938f6ffb636b6288d5"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "92a16a0677d4533cbd4334a508356cd2"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "f85b4aaae80dbbb48f302b3db57972a6"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "465fb2cbe79978af4e5cb307fbf81c45"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "5cf67356f16b2ec610dc6bfeb3bc6439"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "89dd4d63b547810cfbed882d419bcf1d"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "b543cbc8e05267b82ca7a5a90180486c"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "e9748f73abeed1b7034a51f8b437d661"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "d8903694fa6af44dc7d9c0619f970f6a"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "0bdef8cf9168a6ee9bc316ffd71a78e6"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "80db2a7bafce59b3723707435688b288"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "f96b8f7a9e40a82ff89fa5ac53f07009"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "261efde7ddddfe7f68e03568a2c69fc5"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "1ef3ece0302c3b0f8285e2d0caf5646c"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "8028c51ad67c20f3c39694dc585e7557"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "ab3901a9b63cfed7c1d2e6ffa7a77c1e"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "9ec0a7ad54a084e1070042bbee96ee49"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "4477ba4d33e7b409f8c8221703a71bde"
  },
  {
    "url": "articles/how-to-animate-svg-signature/index.html",
    "revision": "cb3f39307e41c2d6443e94d4b915de3b"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "ce1e367bf7239df84ddc57a8b3885ffb"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "855ba3c465d0388c97fa09fcfe56eb7d"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "49d874ef1fe3c55eb90c4c21aa57906b"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "e463df7e0cc70bd8ae43a6a2ed55775f"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "94be0edc189c4bd3502b9148d4935e66"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "c240357b870bf3945907e525b5c36297"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "6cfe784fe1d95f85ec7645f9788a849d"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "1a5527764b53cece35e3b35c8389300e"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "ad2c9a77056eacc86a864709a48ec0c7"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "548d4e402d671614e0fc01a70d12cd93"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "feea9bd1b1112a6b0697525622d0da31"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "17f700b9ce655a5ac349b049e98820be"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "33b164aafb2f0d08577d920c679f48f7"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "bd74fd307b4d09ecb6092813bb8e5f2f"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "e127228ca6fd69446c69150ba8bd4c1b"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "8421e79c51b4660ceb90481278c8d02d"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "7d041d06cbeef67379914dec0464af97"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "97a10978183f498eb99fdc2b31992eef"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "b3e5635a2c23b687cc59f1bdb910f4d8"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "3ea7b0db2454566e7ed3d215a89409c6"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "486376c167e2871527ff1a95988d3117"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "d0ea41defb968caf228274b27e21e77f"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "452153638896fcd8b3dd74e214c587c6"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "5bdad0d94038931ae9c1eee789dfda64"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "453519faff194be1b4262b87ea44f99a"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "e694ab82d302c4aa1ae0255ed9e98d74"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "93827447c3841dc307616a55c5912734"
  },
  {
    "url": "contact/index.html",
    "revision": "e8c4da2db7467b0f66ca9d57caf6ee71"
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
    "revision": "c5e5b8df20e774cf19a1d9016b667a56"
  },
  {
    "url": "hire-me/index.html",
    "revision": "5640007bf502d2bd638723c5b7462930"
  },
  {
    "url": "how/index.html",
    "revision": "8a73f43c7ebb560bdfb5af0e9f86d492"
  },
  {
    "url": "index.html",
    "revision": "671f054235650f6649e0132be1d1a02f"
  },
  {
    "url": "js/index.js",
    "revision": "955989b8ae23813d5d8a01adabf0d1af"
  },
  {
    "url": "js/index.min.js",
    "revision": "d8f8dde3a392415e7bde06c7c45d6275"
  },
  {
    "url": "links/index.html",
    "revision": "0a7c8dd536067e66aad9fe5503f27341"
  },
  {
    "url": "offline.html",
    "revision": "c88d083f3f3f9a749c3377d16b346d34"
  },
  {
    "url": "page.html",
    "revision": "998201bbc380bf140bacd5a7797a9675"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "d1a13debd377d81fde95dfb67056b662"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "5e4231b6673d019ff2ffd45c466dd739"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "942df6fa923d2e15ba72c6a5922ceb5c"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "a6eeca2e90b3a77548ee3230bc3f0663"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "1ec0acedb936a66cc6af12dac11f0e00"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "da1206e544584173ebe66b3ad89a30cf"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "f039cc529f4f33ffb6f6280555574ee6"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "30156b904aaccf2eefd2cdb8c3e4c2fc"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "34e1d86d348469627a5d5b7816b4493a"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "7aee60151616e053d4772e5408d023b3"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "c50b0fd263e8dd866e861cb08107e53a"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "d5474a4d5f950aa6043904341884a58c"
  },
  {
    "url": "portfolio/index.html",
    "revision": "068a92c94e7974df6a504d552f60c33c"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "3e9d02dc017d951adb49f997948c5413"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "a1d9bd57d8123f5bfd4eee376a175f7c"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "9cdbc48dd8158a3a69d71503145a5ed4"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "16d0db9f9b117c220e238664b173b4c3"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "96e8011649bae1709523a7f4dd7e3826"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "6b027599d8517dc366cc794edc011957"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "3ec7f52aacfde326ae06afc52d1f62d4"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "601aea7eead90bd8cdf620237894477d"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "acb4caaaa67bd26e64ab32f0a4313bd0"
  },
  {
    "url": "post.html",
    "revision": "998201bbc380bf140bacd5a7797a9675"
  },
  {
    "url": "services/index.html",
    "revision": "068544c4585ef8c26ffbc67998ea1a4b"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "6daa0eac69194ba295bba0c8acf9e3eb"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "143b9114e389679538908525ceff00ad"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "916c25d1aaa9b93f88cb6483afa9771b"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "713e5b43b05a45fbfacb3c2d049fd622"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "2ee68d626aaaa9beb5ddea5990ccc836"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "1f366d705c8db7148d34e901644a0a16"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "ad94ca4b0ecfcf26bb4aee2400390011"
  },
  {
    "url": "tags/css/index.html",
    "revision": "8dbdd9bdf2c2312f747b7b71bac7cd66"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "7edab420853c13f58fe42edaef813976"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "abae0dae5a6fbb475286d7a3a66c6d5f"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "2b5a44785f223ddf973bc807696c9074"
  },
  {
    "url": "tags/git/index.html",
    "revision": "70a05bf472255760574c25d79e0b31d2"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "dfd18349f87e40b8c46f05883e5e4376"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "176101fc42bb3dbe9a871b0aace082c5"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "f2d8861a884c2a203c9ab047415ddb3c"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "a348060de2f6159229b2eaac5ad43b9d"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "7ee5c33e1eb46cb84423c395f3454655"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "be89cb8421c11bd5cd915fbf004ec6a9"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "3ab85c97a9817febf1acc7d2c4c451fc"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "530210c6d351100e28d0e8e02201a4e9"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "e9725088186886dd1ccd7ed76fe0fdad"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "080b06709bb1afa2a09e097697d1b08e"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "fbc404cd3fb2eed40c7c261f881cbdfc"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "ca2d3d672caee76485a5f4bce4e49368"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "646afb44caa7fa5ae0b59729f8f8c7f9"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "672aa3c1fbfaa446cd7ac3ef9df9c70c"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "cf503994f25e49705369491241e1ad62"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "239168b946788b50c62a3369ccfb56ea"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "877d359e7b110a8affcc6a44e162c113"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "fd6cdae20350e8540d7d1453465a84ad"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "86b8d8d1a860341d60187bc6579fd228"
  },
  {
    "url": "tags/server/index.html",
    "revision": "4c15b7ad898585d7ce462ce3a6f66728"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "5621d94cdff3a2a8d240eb3138f039e3"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "195e73e857cb74c7590421795bdb102e"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "6ac111d650e7bde490c1dd0951627aec"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "dc28432375e2e69dbc9d862f9e69ec9c"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "c355628bc1f1cf6393067fb7c15587c2"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "b9da84e3c69ead00c9c6ca005f41e600"
  },
  {
    "url": "tags/svg/index.html",
    "revision": "5a20ed350e6fa8b0193a10770f08f0cf"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "aef487190220b81d48ed8d62eaaadebc"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "f5bfb307d529c3796ac476a186eac6d4"
  },
  {
    "url": "uses/index.html",
    "revision": "875fe9fa7dd02a61075706cc359f292d"
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
