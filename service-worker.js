if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let r={};const c=e=>s(e,d),o={module:{uri:d},exports:r,require:c};a[d]=Promise.all(f.map((e=>o[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2a8aac19.css",revision:"71e7f5d42507e929089d678540813dd5"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/33.bdbcfde0.js",revision:"5ee1be53226d30e6eb94795bc1d84b56"},{url:"assets/js/34.e6b8426a.js",revision:"3a470ea05169b1ed0d730c212ff7b928"},{url:"assets/js/35.7cf0e74f.js",revision:"0f04d12e76e4376528b3bbbc2fe242c5"},{url:"assets/js/36.faa18fa6.js",revision:"669d7d34bebc6ec5674da64b16215b3e"},{url:"assets/js/37.2abc9bbd.js",revision:"1f411205cbb785305cde1eb04a2c4b53"},{url:"assets/js/38.9b9948ec.js",revision:"a417e1e811860cb80065beec80ca10e4"},{url:"assets/js/app.41b3506f.js",revision:"eb156ea72f2e2d0cf7a53a6a9732e58a"},{url:"assets/js/layout-Blog.dfd1b827.js",revision:"7d24aa1c32c5e868211b5f0b734d3fd4"},{url:"assets/js/layout-Layout.60f5be12.js",revision:"e52e8629ac678533a5adf79f80fa6479"},{url:"assets/js/layout-NotFound.7a36d180.js",revision:"1ea50582b04ff56e814ba37290325d7b"},{url:"assets/js/layout-Slide.23ea73f1.js",revision:"f3ae269d34b8786a4fa67e165781b1fb"},{url:"assets/js/page-BlogHome.4586bfa4.js",revision:"4c4fbacd30de1aedd7599f1f2d1e25a0"},{url:"assets/js/page-Componentdisabled.c5a638d9.js",revision:"c8ddcc18eb7af587a099a8f70839a4fb"},{url:"assets/js/page-CustomLayout.f6a491b6.js",revision:"05ed930c2ef22f4674ee048068c11f46"},{url:"assets/js/page-Encryptionarticle.68fd320d.js",revision:"3b705cef9cc2e0c3e6bf446c1b657d33"},{url:"assets/js/page-Guides.575f8153.js",revision:"cb1d16ca3525e1a72f0609d1060ac959"},{url:"assets/js/page-IntroPage.0bb73771.js",revision:"6e365e25b6dea76abeac7de4258fca4c"},{url:"assets/js/page-MarkdownEnhance.6a468a9f.js",revision:"62df303d9aa0ec5dfe00b33d11101cac"},{url:"assets/js/page-Markdown增强.66466190.js",revision:"2338d5f5a0a74ee6f1b262fed3e2db23"},{url:"assets/js/page-pageconfig.5a497e22.js",revision:"4031bb180f7299fa9255b124aa4e7862"},{url:"assets/js/page-Projecthome.4ab54590.js",revision:"8be0d0a2e5d7d50e6836e1f6b121047b"},{url:"assets/js/page-Slidepage.0cd2e714.js",revision:"19955bd30795aed8362b874db2c5157d"},{url:"assets/js/page-主要功能与配置演示.2d8a3b98.js",revision:"88d5df68584269cff6999cfc13085f9d"},{url:"assets/js/page-博客主页.de636649.js",revision:"0277a7672f5fd8efeefe76ef9ce75020"},{url:"assets/js/page-密码加密的文章.8eb2a7f6.js",revision:"7b6d236c8d6e47be42fd90653b2989fb"},{url:"assets/js/page-幻灯片页.8fad074e.js",revision:"7f60af0f6a88689b3ee10b3eeb6ad69d"},{url:"assets/js/page-组件禁用.e1d26b60.js",revision:"14d736c16d4b7e2eaa1cff29f8dd1474"},{url:"assets/js/page-自定义布局.18dd24ff.js",revision:"2d9059458f5812ca7cbe542f15b74289"},{url:"assets/js/page-页面配置.1d9196d5.js",revision:"0b4cb21abbc12d9e1adce38dea199e07"},{url:"assets/js/page-项目主页.4652887f.js",revision:"a0d3bca469551200b7009f398f98bb17"},{url:"assets/js/vendors~flowchart.8c95bb13.js",revision:"fc734d59c2357c563147ad5d41f2042e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.1771b732.js",revision:"9f6fb0c89f7f398d7427c3ecc5b10dfe"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a613345e.js",revision:"3efaaef383aff31cc0b94d25f067a8bc"},{url:"assets/js/vendors~layout-Layout.b0dbdbdf.js",revision:"efa6f869839c69e6f26660f73497373e"},{url:"assets/js/vendors~mermaid.b396ca2c.js",revision:"5791fd931c3b6f4f7c8315b0a661b43f"},{url:"assets/js/vendors~photo-swipe.1a1e50a5.js",revision:"d8bed714fa40964a7ace8a2caaa7e2c0"},{url:"assets/js/vendors~reveal.45d972cf.js",revision:"2a0695f2080f55971f369b5e76a6c39a"},{url:"assets/js/vendors~waline.8fc1bfb0.js",revision:"20071b5a97859c6dc14448505102ccf3"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"639f99c76eab14f426731ef1bd22346f"},{url:"article/index.html",revision:"bd5827b92651c046495fe9f7ef5d8b5d"},{url:"category/Guide/index.html",revision:"381ce263a464dc345af087892fb7720c"},{url:"category/index.html",revision:"ef1a4f4c38282ddc3214521670dc01ec"},{url:"category/使用指南/index.html",revision:"fa61d7ae84faf3cba5107794627df0c6"},{url:"encrypt/index.html",revision:"31f616dfe582874f4089cf6a210fdb5d"},{url:"guide/disable/index.html",revision:"cff1827e0928a1e477cd2dbda76da594"},{url:"guide/encrypt/index.html",revision:"9c0b309c6ed940e4b7129433728431b1"},{url:"guide/index.html",revision:"d291c103e7b5f0d7e4d9045a9fb16659"},{url:"guide/markdown/index.html",revision:"d7c53906e27b2d92bb7dbe58a127b6f0"},{url:"guide/page/index.html",revision:"94c9802c00941c58e63c38f86ec4ca48"},{url:"home/index.html",revision:"974039bf3a46ddb534b364da19760493"},{url:"index.html",revision:"634d6e2c86ab03d5e58a1703def0dcb9"},{url:"intro/index.html",revision:"6abaaa0f873d66ffaec0269ec21b83fe"},{url:"layout/index.html",revision:"908d8d988f0cb7d97a2b2e75a97a4933"},{url:"slide/index.html",revision:"2a820239d5b2e281586e40b276c120af"},{url:"slides/index.html",revision:"8db58303d968df5a9d4bb0e256c0f7d6"},{url:"star/index.html",revision:"8af67927431b77a1f3dab6eb51140b8f"},{url:"tag/encryption/index.html",revision:"7ed781d6c81762077514bbfe25253ae7"},{url:"tag/Guide/index.html",revision:"35ef4d2d495851c7ae1a93c7672551ab"},{url:"tag/index.html",revision:"19a835d541e85fdc267401db2291fb40"},{url:"tag/markdown/index.html",revision:"6c9410e634dab30f4fa80e20d0528fff"},{url:"tag/Page config/index.html",revision:"ca81f4fa1139643f2cd72763df4c0fde"},{url:"tag/使用指南/index.html",revision:"b733dd03e5805f831a70384691ecd751"},{url:"tag/文章加密/index.html",revision:"2849ff152842efdbb404305be084cd74"},{url:"tag/页面配置/index.html",revision:"b0956fdac36c3759f1cc75747e103587"},{url:"timeline/index.html",revision:"f809ededc3e2c302631ab32646f5f21a"},{url:"zh/guide/disable/index.html",revision:"81cbd5adca91626bbba88fbb56fbf624"},{url:"zh/guide/encrypt/index.html",revision:"ceb889ddb6559f7ebd77deda9c4a9c80"},{url:"zh/guide/index.html",revision:"26a6943f54425a1a0798be893f5e2758"},{url:"zh/guide/markdown/index.html",revision:"9237c137891df354c2ab1a10c34f3b5a"},{url:"zh/guide/page/index.html",revision:"af8f940f54e48143dff7a91edb4b743d"},{url:"zh/home/index.html",revision:"cc34a7a2e37374d9e060a509e8542aa2"},{url:"zh/index.html",revision:"a9ff3d37d633885d75f8b2f5a7bf6c6d"},{url:"zh/layout/index.html",revision:"461f1c509eaf842902e201b70b41af67"},{url:"zh/slides/index.html",revision:"2619e5131a78bb4f58a6ba5884435d6f"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});