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
  suffix: 'v1.2.12',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "c1222cd1d8cf8cdcbd3aa1b67f28c092"
  },
  {
    "url": "about-me/index.html",
    "revision": "7d7591e1034046213bef7403e4b62cb4"
  },
  {
    "url": "archive.html",
    "revision": "18f8441a3fd21847c344fd56a95dcd9e"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "434f744193fd48d1cc6fa54e872c7fca"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "08b436f59d49b5bcbaa2909aaf6c9491"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "a0ba4f36ac0502adf45b2439f46c1e6a"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "5d1031235f63664a6e91c5601601f193"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "684bb7dec92d75810c1903cdda76f634"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "d3cf8934754561eb75282704ac4c98cc"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "ff93e7224c058439ad557a24ad8163e0"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "521aa622fce62346cbf07fdbe1c4b667"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "ea426f3552baa3b55ba376e866b8fdf8"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "b52b047cfdb82156a84e27d0041b987d"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "e212e58fd769cfe61c3ea60260cb2931"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "cad2bda27e19d0e73012286c98fc341d"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "364028b2b67559981cae4fdbe04c058d"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "adf7b00eb5c768bbfcf7a30da3b84584"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "f9c3e2a054fc33e5f5a74c2264652ac1"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "b1c44800ae099405fa69c26044c21f42"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "08ad23f2f5b42d8d4626ce28c2d8168b"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "cf30cb68ecc746b9e24d018722a5a357"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "331c4eef96e4c3931ca68ed27db2237d"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "2d8acd346d1c67cb6ee0b0d7557edcbd"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "08bdb82c9009b68a53be1868489ca08b"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "a11810b3d86c1ce7cde878e2a75bb0bc"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "dd4a0c30b05c6900295c6c779e873a58"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "fd0e1f81f2f0bd8c6513146ebd000a24"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "64e980801ef48979e1fa1276161f95bf"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "274abdd72e9b9535086eacd8fb6084a3"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "99077e126bdb48c76011ef11483b0662"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "309b860eb96f67089e9f9196c80d48c5"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "077e4bb9d74cf28f2427e38dc9f4b6fa"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "7eab40c25f41aa4304e3be710be253c3"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "49a8893e5e90ddeda234650c35ce50c2"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "c8c24dc5f526c66f0e5d797c995594c5"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "744f575ea549b0967ad3c4748abcd07d"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "59287851846dc73fa21027b45e724736"
  },
  {
    "url": "archives/2020/01/index.html",
    "revision": "c2a8119dda01cdd3578dc2a310e194a8"
  },
  {
    "url": "archives/2020/index.html",
    "revision": "ecf95fe360ce89eebf75430820cb3964"
  },
  {
    "url": "archives/index.html",
    "revision": "0ed983d86ac515c3645e655df4fb67a4"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "f40ca2d8f1c295c6531ca83b191d7642"
  },
  {
    "url": "articles/2019-lookback/index.html",
    "revision": "f6ae5ff7988fa23a28f1e4ace6b6aabe"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "5e7a93964a0a6c9390176f55d91124f0"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "006cbcdcfcbed8f1cb55e54a40401032"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "cd7d88ea0f5d992f6e9410a5e7d51641"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "cbf93a05eb7a10dff629182e02196db4"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "52dcd541f5979b47ebd189bfc06c14a0"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "d8f317ca977bef5d0e02c139ce538454"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "8ee4140c02f17d78471cad4881c43f78"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "415ceee5a8067eb1ced139f969d36d9b"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "178667afc28c7f61cc3c66715d549b7d"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "1a28fc23354679746cc013eb30a8d9e3"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "0bee0b29387cd6622bc38848d06b665a"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "d180a1e0cd2f9ba356839e3b5013b0cf"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "2d96cf71d04e272b9f3cf022caa3ab2d"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "9352c02f1f98ec02e277212cf6d5c32f"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "1e32c48f5df885302d8a61e013c69ba3"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "4d7591c2226a22370011caa4b4f30d4b"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "c2d920c177190ac440e1ddca6002b4b1"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "2a293d14311cde640bdea7f54d3b9fb6"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "614f348c1e63415af1de0c9b26cb9d65"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "a6b6f713c008edf4801776def7f55578"
  },
  {
    "url": "articles/how-to-animate-svg-signature/index.html",
    "revision": "c28af68a7b3e9983f1ccd739ba29e18f"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "d020e13be4df7d5aae226522a12fe6c9"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "6d8903b9b920e02f813de6f0c50a1b58"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "d528966cc728f49b3fc7fbfd2246b30c"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "6cfcdef523bdb2d8aa11d7acf8dd6041"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "bdf374add0d63b8eaf4fc650114aa0a4"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "add39a0b5ef9a8145c1529dc470f2f3f"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "d3b1d237f00dda29e5daaadf95384eb4"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "2c9afdd13413e4dc609ccc5f5fcf8516"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "b40edb11151b86a059b8c463b687b570"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "7b0bd15277014b0e40b0f9f0033fb75c"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "2ebf6ef2e8270b65c2933224bc4294ce"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "2e801e57bc733844cf8d930b181fff79"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "a70b64f70d40bc3b0abd5a10dfac9b99"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "75633483d6a78c3bfd693e95c9671fd9"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "099f52c3d7d7ab60751410c8360e9e15"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "38229a91ae845eabe2cbece7d41a67e9"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "074d847f727a43855f888241d16c382c"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "d27b699ed8f56d61c582a854af6be36f"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "a8e674d5a95d272d856ed09c0bdc4d2c"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "cd4598d655c91fefc9015edeca5bbd62"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "db1d3bcd068e18c510d6f74c7b938474"
  },
  {
    "url": "articles/the-ui-development-mentoring-program/index.html",
    "revision": "108aa4cd757636c2ea56c35200a32e85"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "b649ecfd89a6d87ebcfac2af175d64fa"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "7cfb6c36e117d7a59356f92ec413ae81"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "339fbb7a048578e1091ed957b83b5330"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "4b8f39886a0219875b607688f3cb0b6f"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "a8c2408db32690b882b4e21de7a51eaf"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "1bed6ab8b7df2af6433301b199065d75"
  },
  {
    "url": "contact/index.html",
    "revision": "44f834d16aa20e21fd402d6909d19278"
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
    "revision": "8121f26c0fa46db42cfadc14ecfc454c"
  },
  {
    "url": "css/style2.critical.min.css",
    "revision": "0ef234f2c862794cdc6b246d3109dafe"
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
    "revision": "95c18a5f08e6f60daa982126acdf125a"
  },
  {
    "url": "css/style6.critical.min.css",
    "revision": "0d9c8cf1001d3d06b1e0de18481870aa"
  },
  {
    "url": "css/style7.critical.css",
    "revision": "cc113fe7ab2c1ad8e1eb920b22a9d093"
  },
  {
    "url": "css/style7.critical.min.css",
    "revision": "59ff96245af4168931656c2bb157b33e"
  },
  {
    "url": "css/style8.critical.css",
    "revision": "aea3972f2f89d4c50b841f232c81d9ea"
  },
  {
    "url": "css/style8.critical.min.css",
    "revision": "a722485922d969d08af065aff904f792"
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
    "revision": "5dd963eaa3bf0f9613ec7a26eb793ebc"
  },
  {
    "url": "hire-me/index.html",
    "revision": "b17886b521aecfcda6d851ba2c9f7ab5"
  },
  {
    "url": "how/index.html",
    "revision": "a1a5ad1ce4b17b5bfb6da6623bc80981"
  },
  {
    "url": "index.html",
    "revision": "d29f3ff26717126ab4a6ce56f581cae5"
  },
  {
    "url": "js/index.js",
    "revision": "e327f97627c284fa2310aa802cf2639f"
  },
  {
    "url": "js/index.min.js",
    "revision": "0ad2e29756483fcad89515142d9f2ca0"
  },
  {
    "url": "links/index.html",
    "revision": "7ea1174dc428d147316ad4021835a61b"
  },
  {
    "url": "mentoring/index.html",
    "revision": "01dbc4b8c9736eb94d57f4631ecae924"
  },
  {
    "url": "offline.html",
    "revision": "f460f11ed6a4c905f76d4e1a2d8fae63"
  },
  {
    "url": "page.html",
    "revision": "5829535fcfd13d486278e36173feae5c"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "2bf4945fa205db53c075206a53d9b2eb"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "7448ea1ef355b7429f595ce3848656d7"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "908f971d1a0495e8f075a098e370764b"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "1c3b0904c8c7854b4e07afcf112dbdcf"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "9b5e54756550360b2938afa2d6df5885"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "8e14345d0605a371e6c2ba93255004c0"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "3bd23ba8c24668e54ee7bf471eede06b"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "2a1ff39e1b7c9a6c485082dc0515bc84"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "2704b6719e501e4e7cb1a1f6256c1cc1"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "ebc3cf20d874aeb2b3a7165ece3808c4"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "c507553ea8b60b03d3bbf22d9ade09ff"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "37beee7bd36bd3a890ed7127cae182cc"
  },
  {
    "url": "portfolio/index.html",
    "revision": "795afac5657f4ab82c00d2acd7ddc3f4"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "dcf6153d5fc5c1e7280b33216a618b95"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "b8093c3b984c5355edb22862b1902e1f"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "7eaa55348f7068d0d9aea843574eeb61"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "8ef9cfbb14ff12164373746003592f3c"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "402580e33df7d3d98589249f64f43371"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "02f9c8c6cba11e4d78ad45fdc1d897cc"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "9737c89739b4ae9b40e7324db5982215"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "488e199940e510dc791a716e3f0a3670"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "edfeb8bfeab727c7165fd104e93834e4"
  },
  {
    "url": "post.html",
    "revision": "5829535fcfd13d486278e36173feae5c"
  },
  {
    "url": "services/index.html",
    "revision": "f504ab941e20d291715270b6e386d38d"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "eb8e64e06becb03692e38ed6371ee45b"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "250f496e91b16b4990e31c167d0069b8"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "329dd460436385c55eaf264901862190"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "7d146d2fa7f105138c510a1afc3b8e06"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "bb0b0a46edda94b58a1c7672d6430033"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "649bb377b65abd339e733ef1d934e108"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "e2ecb39b10aefba22e04cf67ebe318c1"
  },
  {
    "url": "tags/css/index.html",
    "revision": "bce6fceb91dae6352fe973e7f6440395"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "8498d28efa5ec8d535a6eabe2c62f08a"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "f6f56bf9284ea034a4af86e3deb50904"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "c195d5bfda5014d6ae558ffca7627cc2"
  },
  {
    "url": "tags/git/index.html",
    "revision": "758f18a2c66fa654010d2db7eefa6086"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "ca568d39da62fb9c7ba11f0ae8c57bac"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "dd7d1b7bb398491dc91e30678d5bf8d4"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "f5ee1e77f96f77ea411c44018d0dcac6"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "6a1fe380ed10e50353ab315313b67d05"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "d075ed7713d99cd60e9a7ba298615abd"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "1b4b97d9e387032855d3774a779e748b"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "94ccb19e8d06291b404698ebb690b0be"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "081ec8ca35ecd978646659abebb1949d"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "a5c848dd091fcd4111363768c4ecadb3"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "3788dbd14c4de8df584d2848a2b0a517"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "fc1debd76ae89b1e9435985c10976a40"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "243830c9a29f609dee173c61e174db25"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "dd05f082b0a8770f7dfef82105d8a5f5"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "3b38adae0b127ffe1328e3b4866fb0f5"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "7c627cde394cb570121b3f972f08c169"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "8ac5c090a82dfef54b347b66f0c43531"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "abf36e44ed5df3f73b613d6963ef9051"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "f8dc296ac886cc16f9e2817931b6c48b"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "3446798e6b7cdf91c9029c9d49834a0b"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "b079f7aa71fd62982eda3e3bd12a4c0b"
  },
  {
    "url": "tags/server/index.html",
    "revision": "0e932d1ac13d510aeb18d39a8a5cec69"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "35cc74f18b0b963e41e0fd7310d77134"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "bd147700ff737db52b556571e1956e5f"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "c56908913212f8d85a72d00908626185"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "120fe88d7c9e03950a96f0d93fc859d5"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "6a28248dd6c5750a9aaf58b1a12da960"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "334e21af98994c17f79e8c56bb149bd1"
  },
  {
    "url": "tags/svg/index.html",
    "revision": "6b328663e5cfcddae43454b8ad705c39"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "8b88c60c0684ea04778c2308f62b74fc"
  },
  {
    "url": "tags/ui/index.html",
    "revision": "16a0020f7a938d73fad727ac2a0d699a"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "2239c35f0fa73fe5999a5f3a4fea21ba"
  },
  {
    "url": "uses/index.html",
    "revision": "430626da891b4f92daa76e90020b7685"
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
