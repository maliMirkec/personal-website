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
  suffix: 'v1.2.13',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "95a6d820b2a38a26df19c8fd0566129d"
  },
  {
    "url": "about-me/index.html",
    "revision": "a2924093e21e6ac6266ae7f5b4ba5bd1"
  },
  {
    "url": "archive.html",
    "revision": "18f8441a3fd21847c344fd56a95dcd9e"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "700aa33e4f2ea12980b5851ca734968e"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "ea046a1e6b3f1917b04090ed4eea5098"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "065494144c1dbea288b6081c12d8e9c3"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "0483701e845352efc529c6af1361340e"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "42fb32271db80ea3952ee255f794147b"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "73c6f87016e72a9930243dd911cfd5e1"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "1e6388fe0ca16c4442a2020978163ebe"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "25286401e152112333b45d3af81a2ed6"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "7861db49726affb23e61ba6411284990"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "8f3f09a7814da92263019aaece6529a8"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "9a19076a36173e9847976058a927a48c"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "3c7a1b7537561adcaa47ff3e24d1d621"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "d28a81cd5517e9a3799549d0f662f437"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "7ed6fe8a7cd47658d956445523b25035"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "c8317123ca342585037aee631a62bcca"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "8863c9b76dbbd6bbb5507b98f96b93a7"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "f6a421e02fc00483ae4e6baa739a57bc"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "3fea6584b17901b11ef462884651507e"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "6ca94f4e3fa6be7374cce6adef342f9d"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "b8f774d000ef18d23be260772f3a60cc"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "8585c3726ae0a6c757a21d42ade43a81"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "f9f8b8ce6b4815cb3e5a4a24d9b8eb5e"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "1c8aa996566ecf5ff8a11fdb29d92fdd"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "cb58711d3b774486f81b328a42f8e68a"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "bc7d8b1d45aeec7e75ac74dc9deca517"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "e93494ae043edb05439a8b4ce0efccea"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "23e69cc9730e51b1602ddfd80157604c"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "229853b8389bf26ddcbae930df9df337"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "8f9d26c042ea7929aaeb9b3821d47b59"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "9fa09328353b72177ac15ac30acd5415"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "c0e9fc8bd8c784873b907b225a088ce7"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "f37e4c5b0930cff4adb047843a024c33"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "5ad2f389d369cb0f14866d0fcbaa5b1c"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "bc62d97ec86ada7217c769b256e2812e"
  },
  {
    "url": "archives/2020/01/index.html",
    "revision": "07c0debfbb17cbc3c8f371e3cf9e9cb6"
  },
  {
    "url": "archives/2020/index.html",
    "revision": "b646607ea9fa789d8d97ed94333e1ab8"
  },
  {
    "url": "archives/index.html",
    "revision": "8ecab913632b490f5575a1170a4665d7"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "7cf05909cecdad2ad1139a5ebaf06e35"
  },
  {
    "url": "articles/2019-lookback/index.html",
    "revision": "4c7ff8461895c0df78f2716c547b5ecb"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "6ab2e261fad7f3d5b9250659172809fe"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "0cbbca1412d5642102dec12e8d0b0c78"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "310afb9fdfcb0760b36ebd85177bebde"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "3a6fc109a0132bf2bf7759576dee1639"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "1da774239937173f2e5ec19b16f5149e"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "29730d1b1a894dc6bd79755d6f3eee67"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "7436ff31f488c1160ed3acc944f69ddb"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "2b558a64186313e8b1f73f253bba3fe9"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "dcce3de4f9254229e273e16fe03d8707"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "f428128945c7b05095b46b555498608e"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "c9f51a2a585c8b8f07cf9228011a5efc"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "48fe9f25aa688d11d4c0b88a7d1e3ef9"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "832939acfe1160ea31f9c4bcb73cb1c4"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "324fe4b097647d8dc24177fce6df0a2a"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "f03d33efc2ae4ef45a946cc6db156a80"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "2148e17a22afdecee6e0b59d748b56f7"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "295f7cb315cc190dfdb6d5a081676db8"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "fe928861298e1966dbb6e6a0c9400416"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "ca9c3773de5ff9cb134dc36a387e8264"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "e00153230ee97e788de90be3efda5c27"
  },
  {
    "url": "articles/how-to-animate-svg-signature/index.html",
    "revision": "295856753f0a6540b7253bf8dc4d5ca5"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "1096a3df6376ec5d393868fef6d4b544"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "335067c746d99e007a1c7ccb7b057768"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "d2e29c116a6f9bc2adf25167102b1b68"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "3622de0e60889a8c659aef789092915a"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "a36b618a3125bc3cdf97e67caf01de66"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "71407c93979760888bc98f4c9fce8793"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "b9135fe93f6abbde3db9075e464822b1"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "951e66586870db3bfbc77be4d9dd8974"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "7a38fbd10dc3dbb7283fd79102e4a3d9"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "cf153a9ff47b06db39c6cc7ff963ea04"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "8ad686a120fc724994c54f55d6125775"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "829eb446647cbe1d24ecdfcd890b70c2"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "35e77c642ad623eea4d3607246a49201"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "2ebe846eabda79c7efeefef47b73f2ac"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "65f2b4ce40257419eaa0c920a1e86050"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "23accfde018dacd0a6dc6407d075ee9c"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "6e62827ff5ef627a56da2f2116493918"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "eec331f853dfb49b451350f41eb61050"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "58f1f483417eb25457fa4ab2c55b0945"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "2ecc875615a4acd547c6d9931b8d3f86"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "df8c5462f89a9228a35c3097076cdf3b"
  },
  {
    "url": "articles/the-ui-development-mentoring-program/index.html",
    "revision": "a62d2c5cd43f97f8bf052a6158478594"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "d0d66bca8ab3166599a5727204f93530"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "5982e0053feb8c6b10d64777c2c535fd"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "872a685a66b938600f69e66b5639c906"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "a4a5583c7f8381ad36db2830c44a90bf"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "1ea561636b93b9d256e2905f75eccba4"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "32718cfff504a71ee200cbd28c4f6a07"
  },
  {
    "url": "contact/index.html",
    "revision": "35243492ad316d096d09a6c1e55e621d"
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
    "revision": "8a334b140d6e53bef29cd696071ed184"
  },
  {
    "url": "css/style6.critical.min.css",
    "revision": "4f1e9a22206b44cfdefef9abf2d5d018"
  },
  {
    "url": "css/style7.critical.css",
    "revision": "7b376b2ae2fc4069dd45da576e2214a3"
  },
  {
    "url": "css/style7.critical.min.css",
    "revision": "7e549094b3c7467c9578f235058f5425"
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
    "revision": "8c2ec54650a40201c6ad2ee2f46c168c"
  },
  {
    "url": "hire-me/index.html",
    "revision": "4bb7d29dcb483b2600b07954a74f6bfb"
  },
  {
    "url": "how/index.html",
    "revision": "56b09cfe0bdacf2a0a5606bb6b4cc5cf"
  },
  {
    "url": "index.html",
    "revision": "7ef2008b34156ae3aba253e701366ec0"
  },
  {
    "url": "js/index.js",
    "revision": "e327f97627c284fa2310aa802cf2639f"
  },
  {
    "url": "js/index.min.js",
    "revision": "1795f708fcfd985eb8ccc9ab742f0a47"
  },
  {
    "url": "links/index.html",
    "revision": "a34d47fd6a6ac23518eb7cc6d8dcc0c7"
  },
  {
    "url": "mentoring/index.html",
    "revision": "7494cff3245adab1e2af59191490f2fb"
  },
  {
    "url": "offline.html",
    "revision": "25bdae6632c3655def297469ce65f57a"
  },
  {
    "url": "page.html",
    "revision": "5829535fcfd13d486278e36173feae5c"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "6443c9366da47c11d380f1193aebff21"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "7b06b74560d75d9e17b127e52ead0253"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "8286ff5f513f30ca36df20b340615608"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "b7b90741c155b2dfa5f0e56ed7cbba8f"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "0ba14a8291d3e9ca03c9ae945e81c4f2"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "305fba14ce8e93880999ea3d7f1bb3cd"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "c49c74dd8423e4bfd955ff11adb24c39"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "484de9735d2367be074acb3870bba2e7"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "89c246c83f3df4764f541860c2a75bdd"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "2967ee5c276fd4af3a1997256d31933d"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "67eefafb8ee3dcb0d65bab5d44e99523"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "52b34d31df0e48dfa3029d487b45b961"
  },
  {
    "url": "portfolio/index.html",
    "revision": "097672e4a5df2f94cc965fae13017a49"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "5dccf599a0ccbf8515203ba8e576e7ab"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "58adf92f8ae99ec12fc4afc30518695c"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "825607916132ab2287ce472fac9bc61d"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "963ff4190c68f41d310e3925d12af815"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "21283f915bd199ee7f8c03f587e13f2b"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "716bdbcfe5f08fc4bfb18a407949f8a9"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "b50f01799605ade69f3147173ee08dd4"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "0339cc5baa2324d35754f8ae19f3e6fc"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "24f7e738669f52d4f40eb80efff5eb4a"
  },
  {
    "url": "post.html",
    "revision": "5829535fcfd13d486278e36173feae5c"
  },
  {
    "url": "services/index.html",
    "revision": "2e22ab30ccf739c61174a57822835a46"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "c491bf0530504ba6e980f82d0667e96d"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "3a1630603b063eee5ca85b50e943b5ce"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "fb05ce2a2a9ba0a85757ec578a22b8b4"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "662201b0fcbdbcf7ffd6c78cd4a21ca9"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "5e876b4599daaf7c69a2453e670219b5"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "0f60b36932dfbc273ca32a0c48f56539"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "6817e3493eb2799dae857d618daedc2d"
  },
  {
    "url": "tags/css/index.html",
    "revision": "4de9fd72c6708453fa04492df8054ce7"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "23e549377ba131368abafdfd0fc5b4f8"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "561994ea31c175d490a63c249fc6497b"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "bfab6fd077c99de5f810bd4f7f28825c"
  },
  {
    "url": "tags/git/index.html",
    "revision": "9c4b10c03e681e940e23d002d8ad4fcf"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "4485bf0205cb5b2b0bf5b8926ec5eef0"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "8e3a8973ae7a65e9f146e904e5d2d7b8"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "84565ee974ac5fb6a97259c3b864923f"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "3d2064089dbec35d1fe3bab821e3b391"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "42770adbc32767babc6df9992f3d4c62"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "b74dc059f6ce74ded2917199c8f8b3ad"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "03acee514fc79e2689888620ebe9cda3"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "139bbdab6085d11456979b9d2b379672"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "0e691dc8bc97efa2597334cd86cf438d"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "d31471c89fb079fc91ec412841cc414d"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "7b12809eaee3d6fdb703bca08881fbbb"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "94939c25083401d444c9c4b1fa19b442"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "5662fcd27420b602beaf234a76f0e7ef"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "13b06691daee4532cb8871ce8d13bae0"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "0be56f1ec910901d4655642f6f82063f"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "4a64f65409368217958c5249016fb5bc"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "bf0ca9a6a4d7a1a1fc971c9ff78aa6e4"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "df281fc21a04d2e4ecbd19d1642204bf"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "13d59906d6d60ca6fa1c7858c7e48e48"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "b97648ac529da4e95bf20126093a07e7"
  },
  {
    "url": "tags/server/index.html",
    "revision": "02f28f380ed9b466dfefa4b507c9d079"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "ebda87074b24328a1814ac31e34c4b27"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "6e888b77c22cd99178e5382eed1b97bb"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "1b2118ed883ec177f9dcf89a68f1c825"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "c49eaaa8d5f69596e48886ae847e6457"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "8e634a7cb78686e06ef5e2e94300e29c"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "c61498e53a946a3a34f1c5c627124903"
  },
  {
    "url": "tags/svg/index.html",
    "revision": "c2d06d9e44ac49a78d9678205027bf27"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "ae27ee6bb774e61019128bb02465733a"
  },
  {
    "url": "tags/ui/index.html",
    "revision": "f07bdf61f40b9105e100f42857179d60"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "4940fb5be49fbb6bb24603913db223cf"
  },
  {
    "url": "uses/index.html",
    "revision": "12c20b90a2200950b041cb32f1667221"
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
