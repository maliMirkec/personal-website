// load workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// output successful message
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

// workbox.setConfig({ debug: true })

workbox.core.setCacheNameDetails({
  prefix: 'sb',
  suffix: 'v1.2.14',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.core.skipWaiting()

workbox.core.clientsClaim()

workbox.precaching.cleanupOutdatedCaches()

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "f85fd7ad08f762448d98ef8dcd80cdd3"
  },
  {
    "url": "about-me/index.html",
    "revision": "99dacbb12c77f76e6f6f920243c9aeb1"
  },
  {
    "url": "archive.html",
    "revision": "8a0fd3d6be3771c87a6fa25f0b6e4a80"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "b927fd0d38986c12bab97b9e2461ac53"
  },
  {
    "url": "articles/2019-lookback/index.html",
    "revision": "b4eb500d6fccc6862782e10b1ebd1bd2"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "b8fa103198d8421ce76e0b5d0f24d56e"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "46b3a2e9443b7a4ccd897fefca348b0d"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "864ec23cfa4b26c07a042d44bd963127"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "c117312ed9ea13447e1a28492d4cdc72"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "a34d2b38842c978fcbd05b989ba364c1"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "52ed4758fdaf738f08daa8d36149cffe"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "45cfa6ef678adc2be06ed263280eee8c"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "f58f273d7f4fe38208eb3e90048da3df"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "ac9f5b2bfc6f21a267147efdd06a0881"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "72851127d4b440c1174415d1553776e0"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "9070657d0ef7359bb0f29b4c9788b310"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "d3b0239e17d431a27ce0bf219d04a57d"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "60fe4a400836e394376814b1685ac251"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "1bad11acc6247a2ee167b4b2c93689a9"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "3a99b64c34169ed0f343b4867052a4b6"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "a4d7d78095261b56d81c7a20a5d277e5"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "093b96d3d1973ab5b8e34ee03ca967f5"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "340e658225227e808a94c5543103bfba"
  },
  {
    "url": "articles/how-i-built-my-second-progressive-web-app-pwa/index.html",
    "revision": "5b57df45cadd1131140a807072cf5d42"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "aebf61f67345ab30ade8f83a88205788"
  },
  {
    "url": "articles/how-to-animate-svg-signature/index.html",
    "revision": "265c7df45af9594337db26d9ce805355"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "c9bdca017a7414d9a6e08c13e6ec3247"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "77ff6cc9ca7e2c83ad760582ae772398"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "1ba94112bd2104ec4eef352507989268"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "bf3c634c7188903153f1c51f69f2d5d5"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "4c261cfc43d5e985e3c9f7926bc0ae68"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "8468f38d0385424a84817d7db88e2dc0"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "add2523753df6bccb10832279851aa2b"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "ab891590cc0d6637b9a4c2047349c256"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "16b0b276eb58792055c4e0d2c35d1cfb"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "20e0172c2a0c3a86ff3b4a9e3516f8d6"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "001db175881eec69589c4e15e1ac4db4"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "bea340889773a6f7f9162a434d76e8cb"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "e8c593f27921637386783e06c92dd38a"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "7ce3f31823a9a83146628babce786762"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "7fe2d0493e35600e7468a5b38d7233bf"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "0e30a082ec53e497c0f55f0e22349f3d"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "9e43736084d21db8fd5503c40656a0cf"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "cf8cb136ff49093e77538b958d075e40"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "a6e5166b26c17ce17acf9586d3bdcd9b"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "abf4230ebbc983dc08ad3e93d9c953a8"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "c6291ed593d190e30ac690341868f7c6"
  },
  {
    "url": "articles/the-ui-development-mentoring-program/index.html",
    "revision": "02a1f5d7dae3b258b32ad409a128a3ca"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "81e07d08fb681dd56d3898d630b2d3b9"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "5fc5870fec0ba9a1d0c2918226d54990"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "0f7c9ed7ef5833160d9928a06e4d4b48"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "76b5e278ffdd4104130599b285fe2a1a"
  },
  {
    "url": "contact/index.html",
    "revision": "a79ea834765bca6c328a7eaa66aa4a6a"
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
    "url": "favicon/favicon.ico",
    "revision": "fb9727c105797a1e436d4a3efaacbff2"
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
    "revision": "95f45f9ad953d6b9ee8ab7b63ddc2b18"
  },
  {
    "url": "hire-me/index.html",
    "revision": "7fccedd22ba78c6a9432c0098b3ec157"
  },
  {
    "url": "how/index.html",
    "revision": "9f8f632eb7c5233d8cce7b1e3b277050"
  },
  {
    "url": "index.html",
    "revision": "6cc2994082bd349c149905f72345b148"
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
    "revision": "d065b6f421042422f2810cea32d2972d"
  },
  {
    "url": "mentoring/index.html",
    "revision": "1736f16eb311d0a2a7ae26e957d08a6a"
  },
  {
    "url": "offline.html",
    "revision": "805ad04eeffd8faa96c6c2b85d3267ce"
  },
  {
    "url": "page.html",
    "revision": "f3c8a2d21a8cd929c8218069cd4a64cd"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "aa964af6df7fa4b95e678c29fe6fb1b6"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "1c0d7e87672a9766dadbdc94cf8dfccf"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "c6d14c239eec134806ff7083cbb1f5f1"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "85baa260f2f8be1e2d6486a65a94ff54"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "2710b1f872772c0acda28922dddfb1ee"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "bb77c156d924900f4753ec1926dde729"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "adc255ec97f294ddece7d31b8f444d39"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "e8b243506263bf4cb8fb71137d0bcd7f"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "c3aa7829b0eee35da3f75368a9d10abc"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "8865ec089a8629c2e6b8823bd38d318e"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "650569326a47bda07ce4f73e6be9c6bd"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "a492ce111940950e77f0ca13800b8352"
  },
  {
    "url": "portfolio/index.html",
    "revision": "86d7037205c41ba442547b0a63af9714"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "2bd75d2af347395dabcbc7a1a4a7160a"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "a749a3aaef7d31b465929ccf55d01c33"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "2d2cfdd12eed48bdfeddb4f21297e685"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "52d3fdb48912b06cc9a82ace3eba0313"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "df185109fe8110725b1e07cd71d427ad"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "142ec059024f08a974bd27dd132a9de1"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "68236ec5abad82fc913ecd1589b4c5bc"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "72781b050ba87994e971987640f4ff81"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "a8d4ae61ecde82234ba3503a6e693d54"
  },
  {
    "url": "post.html",
    "revision": "f3c8a2d21a8cd929c8218069cd4a64cd"
  },
  {
    "url": "services/index.html",
    "revision": "f21894f5c03a67cb829a6b18247a21c8"
  },
  {
    "url": "uses/index.html",
    "revision": "31dbc72e0187393eb6561cc0f2a85b7e"
  }
])

// Serve all html files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'html-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 60 * 60
      }),
      new workbox.broadcastUpdate.Plugin({
        channelName: 'html-updates'
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
        maxAgeSeconds: 24 * 60 * 60
      }),
      new workbox.broadcastUpdate.Plugin({
        channelName: 'js-updates'
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
        maxAgeSeconds: 24 * 60 * 60
      }),
      new workbox.broadcastUpdate.Plugin({
        channelName: 'css-updates'
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
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
)
