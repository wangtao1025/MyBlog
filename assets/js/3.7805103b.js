(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{354:function(s,a,t){s.exports=t.p+"assets/img/1.85aa14ea.png"},355:function(s,a,t){s.exports=t.p+"assets/img/nrm.a69cd088.jpg"},356:function(s,a,t){s.exports=t.p+"assets/img/nrmcurrent.6a7d7953.jpg"},357:function(s,a,t){s.exports=t.p+"assets/img/nrmuse.b58add10.jpg"},380:function(s,a,t){"use strict";t.r(a);var r=t(42),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"nrm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nrm"}},[s._v("#")]),s._v(" nrm")]),s._v(" "),r("h2",{attrs:{id:"nrm的出现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nrm的出现"}},[s._v("#")]),s._v(" nrm的出现")]),s._v(" "),r("p",[s._v("nrm是一个npm源管理器，允许你快速在npm源之间进行切换，为什么会这样说那？npm默认情况下是使用了npm官方源（cmd输入npm config ls命令来查看：https://registry.npmjs.org/）。在国内使用这个源是不靠谱不稳定的。毕竟下载很慢动不动就会卡死，所以我们一般使用的是淘宝的镜像源：https://registry.npm.taobao.org/,接下来首先让我们来修改源，在cmd输入：")]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://registry.npm.taobao.org/'")]),s._v("\n")])])]),r("p",[s._v("然后在cmd输入："),r("code",[s._v("npm config ls")]),s._v("查看是否修改源成功")]),s._v(" "),r("p",[r("img",{attrs:{src:t(354),alt:"img"}})]),s._v(" "),r("p",[s._v("这样，万一你在国外办公的时候或者想要切换成官方源，或者在公司有自己的私有npm源，就需要切换成公司的源，nrm就是这样出现的。")]),s._v(" "),r("h2",{attrs:{id:"nrm的操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nrm的操作"}},[s._v("#")]),s._v(" nrm的操作")]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g nrm // 安装nrm\nnrm "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" // 查看可用源（带有*号的表示是当前源）\n")])])]),r("p",[r("img",{attrs:{src:t(355),alt:"img"}})]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("nrm current // 表示查看当前使用的源\n")])])]),r("p",[r("img",{attrs:{src:t(356),alt:"img"}})]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("nrm use "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("registry"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" // registry 为源的名字 比如切换taobao源\nnrm use tabao // 切换为taobao源\n")])])]),r("p",[r("img",{attrs:{src:t(357),alt:"img"}})]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("nrm "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("registry"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("url"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" // registry 为源名 url为源的地址\n// 比如添加自己公司的私有npm源，原地址例如：http://192.168.18.11:3000/repository/npm-public,源名为：company（任意取名称，作为自己公司的私有npm源的名称）\n\n\n"),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" company http://192.168.18.11:3000/repository/npm-public\n// 出现add registry company success 表示添加成功\n// 或者在cmd输入nrm ls看看company是否添加成功\n\nnrm del "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("registry"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" // registry 为源名，删除某个源，比如刚刚添加的company\nnrm del company // 出现delete registry company success表示删除成功\n\nnrm "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("registry"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" // 表示测试源的响应时间\nnrm "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" taobao // 表示测试taobao源的响应时间\nnrm "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" // 表示npm官方源的响应时间\n")])])]),r("h3",{attrs:{id:"补充"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i cnpm -g --registry"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org  //安装cnpm\n// 最后的参数就是淘宝的镜像仓储url,并且cnpm是应用taobao源\ncnpm -v  //查看版本号，并且证明安装成功\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);