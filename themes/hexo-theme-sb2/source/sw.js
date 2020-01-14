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
  suffix: 'v1.2.7',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "80aa381e7f77ab8a5b9f55f44539d0c9"
  },
  {
    "url": "about-me/index.html",
    "revision": "781efc99199d670c585882c85f707f0f"
  },
  {
    "url": "archive.html",
    "revision": "fd2ecd0f155f28068f49bbb054c6db2c"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "7d23ed811752366cca43b2a072e1841c"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "0c1015b170779592fd187c8fbf7a20f7"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "afe893125219bbc777ffa95aa6045a9f"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "55348e2e3f6f5cdce5bf2f677363b91c"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "cf77f1e77538c483314e2c864267ac55"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "92b5922d909e61b0331f5ff40226f4a8"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "99ef684bbbb1d2982be0c70f5df7f54a"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "0180df58967acbfde4019c559ec429e5"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "d8cfba065487163d925f017b178f7c22"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "804287d1c9bbe224d1637c5c5bceb351"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "deba913e3d644f65dd29d18a97524b9b"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "a3c9663959428f6efef933096dc6b125"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "290d4ad5e6f4d56924bfec92f1394542"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "9dc695be249ebe85785d4497a980edba"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "e5263f5a9929bb8b30665ea242364f16"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "7d3e711cfa2782661a7eafd73aed009d"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "6b66fc27f90713e46149d361a3495ea7"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "c85e8ef168720d336bfa4e1bda8f07bc"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "35a9c6cb8960babf22759553a57cdad4"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "e2ddcfee3eb57b8c3bcd980014c5a53b"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "b81e1df84eb177826c40451dc8e91b55"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "eab4be0ef9f232e5dde904ac5b4411d5"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "61cada09dc7321997a6c5f24668826ce"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "98a81571b770fbf70d911581fb40ceca"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "1012bc162c572c38c941d9ed86304649"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "ee03b90f3982fe75603269bcd9afb6d8"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "74adc999e4c76a5da67a98c787d1c748"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "a9dc8d3c01392b75ce7912cd2ad3cfcb"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "d85f932f4d12ebbc042c38a925da9b46"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "ee79dafa56d0f09eabbd28b0393946d0"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "97bb1875a4b0ff574855be48c6a5d452"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "c925d2c249091d728fee5a4cc94c8267"
  },
  {
    "url": "archives/2019/12/index.html",
    "revision": "4def7831aa13c54688bd5faa1e4c08e1"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "6697d06a45425efb957124163372c280"
  },
  {
    "url": "archives/2020/01/index.html",
    "revision": "8184396f93a961b63484a7647ca84b2c"
  },
  {
    "url": "archives/2020/index.html",
    "revision": "d78463445ecfb5a380afee3064161170"
  },
  {
    "url": "archives/index.html",
    "revision": "73e96d718950389211bde6e49584e798"
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
    "revision": "eb011106894122774bdd5fb53a654ed6"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "0ea5b0349e0566f253ccedd44b5dd063"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "edf5afe04b100dea5b095346174c452f"
  },
  {
    "url": "contact/index.html",
    "revision": "fea0a8913d36f3041334dcfec7e9d061"
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
    "revision": "953d4a665eda085f6a78b6ab195d0a0d"
  },
  {
    "url": "css/style6.critical.min.css",
    "revision": "404ac7413c2fbd9f6ec05e567a3e69e6"
  },
  {
    "url": "css/style7.critical.css",
    "revision": "67970540119e63f78c36c86fe0c14ed6"
  },
  {
    "url": "css/style7.critical.min.css",
    "revision": "cf9c7054539d0cfd7bcb5df43d478d05"
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
    "revision": "c1c8dc75e3db7f0087f9b4b5e82b792f"
  },
  {
    "url": "hire-me/index.html",
    "revision": "6caccd15d73b31d6e168b364663d6b80"
  },
  {
    "url": "how/index.html",
    "revision": "81e87c59465a99300c6e1e543e6f1e68"
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
    "revision": "1484fb590cc1f95eecd28f3f7e3ec6d6"
  },
  {
    "url": "offline.html",
    "revision": "31b62a1757a643b50c249899c9e66e42"
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
    "revision": "2a8be11ca2b2229dfadce210c894a920"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "826b924568723a6d59503dd59868aef4"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "fd287972c128236072d62e6c3f30bba1"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "716c4f4e67115b7d1768954f599fe334"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "949d59e58704a0dcd08ddef0ce18d8a1"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "be4b77a51a39f6e33704f8bea0f870cb"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "546f9bf292a3680e1f34a0e975d624b3"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "e1a3c7adf4d5996e89f67de489e04c28"
  },
  {
    "url": "tags/css/index.html",
    "revision": "3ff5934fbf8c9bded30ada9e8e27913d"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "c977613f21f2123a511bae0d8c811671"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "6c32522779ab24586116d85438f7f083"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "cdc8e5a1691f057e8217658be90761da"
  },
  {
    "url": "tags/git/index.html",
    "revision": "12bc2e9734dce1b05ce8a92932ceefc7"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "6df325783ad43c61d22684bc63b8dbdb"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "18b7fc32eb185d82d20151e5c56f1abd"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "7ee3e0284557645796441428ec2f0061"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "9ddbdec4fda85ecf4c6c5632bcc8778e"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "c268f7ff516f682500657aac62bda108"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "7fda4045c98ab0cfa37a96955b57a66d"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "fb4678deffd2c02608a1ef05a874d74d"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "abb55714ae58e5e6d9e407f853b16b56"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "bb77fb0609cce564cf7351a26fa1842a"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "f07a8e94442b6c903c7da255ec430080"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "20c3876752ee8c26b59c3225c79e854e"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "dcd716808d73192a170ae38c81f1af82"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "37a30ad9fd188d17235af45f9d988d52"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "a528119d44fab226922d05111554db1f"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "68de58e0db7552eee6a5b621526d9d09"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "50cd40ee2057a1101c8f77c01adb084d"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "1ace30e32099d9b38f36eafa94dcb0c8"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "31c9846c29ede452f1bd3ca9c103d1a9"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "53ce2adfa01b4b1647ef12cf1e64cf20"
  },
  {
    "url": "tags/server/index.html",
    "revision": "8895aa4975b0a9d1e25471ea99d65bda"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "333cd12c33811182740b93fa16bc0f6d"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "f442a37e8d3d3a820970a89551f71d55"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "a341fdcad752187889b8b0021c2369f0"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "7b09cc6ab8a024c83ef2d06ef34ded8e"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "49b89aac79c0221d2e60a713cd36cd2c"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "9f6c7a8185c555283b3058c36c1ee814"
  },
  {
    "url": "tags/svg/index.html",
    "revision": "4e97c572009681cf0c46d08d44681fd4"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "17c7e0138327dc4d268b0af41889b1d1"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "c15ae8d0b7cb868dd552c4a3e8b9ff16"
  },
  {
    "url": "uses/index.html",
    "revision": "2fd83742deca2f2736c5a8d51f611bb8"
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
