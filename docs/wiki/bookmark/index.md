---
title: 书签
layout: page
---

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const groups = [{"name":"搜索引擎","items":[{"t":"必应搜索","u":"https://cn.bing.com/"},{"t":"360搜索","u":"https://www.so.com/"},{"t":"google搜索","u":"https://www.google.com/"}]},{"name":"我的项目","items":[{"t":"项目资源分布","u":"https://mg.meiflower.top/personal/project"},{"t":"我的项目","u":"https://gitee.com/mgang/my-project"},{"t":"猫大刚主页","u":"https://mg.meiflower.top/"},{"t":"我的计划","u":"https://mg.meiflower.top/plan/"},{"t":"我的博客","u":"https://mg.meiflower.top/mb/"},{"t":"marp分享","u":"http://marp.meiflower.top/"},{"t":"待办列表","u":"http://todo.meiflower.top/"},{"t":"mango-kit","u":"https://github.com/mg0324/mango-kit"},{"t":"妙娃miaowa","u":"https://mmtdd.gitee.io/miaowa/#/"},{"t":"B站工具bup","u":"https://gitee.com/mgang/my-project/tree/master/bup"},{"t":"jmedis","u":"https://gitee.com/mangoorg/jmedis"},{"t":"idea启动插件","u":"https://gitee.com/mgang/idea-plugin-start-time"},{"t":"我的分享","u":"https://gitee.com/mgang/my-share"},{"t":"leetcode刷题笔记","u":"https://gitee.com/mgang/leet-code"},{"t":"B站web直播入口","u":"https://live.bilibili.com/p/html/web-hime/index.html?visit_id=287t35tjj1us"},{"t":"苹果icloud云盘","u":"https://www.icloud.com.cn/"}]},{"name":"笔记相关","items":[{"t":"mangodoc","u":"https://mangodoc.meiflower.top"},{"t":"mangodoc-template","u":"https://mangodoc-template.meiflower.top"},{"t":"docsify-template","u":"http://docsify-template.meiflower.top/#/"},{"t":"docsify-note","u":"http://docsify-note.meiflower.top/#/"},{"t":"大刚学算法","u":"https://alg.meiflower.top/#/"},{"t":"大刚学设计模式","u":"https://dp.meiflower.top/#/"},{"t":"Java学习体系文档","u":"https://java.meiflower.top/#/"},{"t":"走上架构之路","u":"https://arch.meiflower.top/#/"},{"t":"CPU修行文档","u":"https://scpu.netlify.app/#/"},{"t":"大刚学MySQL","u":"https://mysql.meiflower.top/#/"}]},{"name":"阅读资源","items":[{"t":"zlibrary","u":"https://z-library.sk/"},{"t":"图书廊","u":"https://www.tuishulang.com/"},{"t":"谷歌学术搜索","u":"https://scholar.google.com/schhp?hl=zh-CN&as_sdt=2007"}]},{"name":"装修设计","items":[{"t":"酷家乐","u":"https://www.kujiale.com/pub/saas/workbench/pwork/mydesign?gs.nav.type=auto-global&from=zhuzhan_nav"}]},{"name":"常用工具","items":[{"t":"金山文档","u":"https://www.kdocs.cn/latest"},{"t":"chrome商店","u":"https://chrome.google.com/webstore/category/extensions"},{"t":"定稿设计","u":"https://gd74865930.qiye.gaoding.com/smartdesign"},{"t":"百度统计","u":"https://tongji.baidu.com/main/homepage/22511391/homepage/index"},{"t":"图片转base64","u":"https://kz16.top/png2base64.html"},{"t":"谷歌翻译","u":"https://translate.google.com.hk/?hl=zh-CN&sourceid=cnhp"},{"t":"processon","u":"https://www.processon.com/login"},{"t":"drawio","u":"https://app.diagrams.net/"},{"t":"华为云容器服务","u":"https://console.huaweicloud.com/swr/?agencyId=9fb50aa2b84e4d9f820bb6d32ca2b5ab&region=cn-south-1&locale=zh-cn#/swr/warehouse/detail/hw_008618613073290_01/mangoorg/flask-api/guide"},{"t":"doocs md","u":"https://doocs.gitee.io/md/"},{"t":"mvnrepository","u":"https://mvnrepository.com/"},{"t":"favicon","u":"https://favicon.io/"},{"t":"logo生成","u":"https://www.logosc.cn/make"},{"t":"boss招聘","u":"https://www.zhipin.com/shenzhen/"},{"t":"图片压缩","u":"https://tinypng.com/"},{"t":"即时设计","u":"https://js.design/workspace"},{"t":"可画设计","u":"https://www.canva.cn/"},{"t":"可画视频编辑","u":"https://www.canva.cn/design/DAFz6qoiO6Y/6Avs1vl-RckbASeqI9gn1g/edit"}]},{"name":"常用邮箱","items":[{"t":"QQ邮箱","u":"https://mail.qq.com/cgi-bin/frame_html?sid=05f9Ec9lbnidJGUG&r=f6adff210c8f5793ce3d74cfcaa93fde&lang=zh"},{"t":"163邮箱","u":"https://mail.163.com/"},{"t":"icloud邮箱","u":"https://www.icloud.com.cn/mail/"},{"t":"iconfont","u":"https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=4036078"}]},{"name":"域名相关","items":[{"t":"Free DNS","u":"https://dns.he.net/index.cgi"},{"t":"ssl证书申请","u":"https://freessl.cn/"}]},{"name":"自媒体运营","items":[{"t":"小红书","u":"https://creator.xiaohongshu.com/new/home?source=official"},{"t":"我的B站空间","u":"https://space.bilibili.com/1174515315"},{"t":"可画设计","u":"https://www.canva.cn/"},{"t":"svg转png","u":"https://www.svgviewer.dev/svg-to-png"}]},{"name":"AI相关","items":[{"t":"深度求索","u":"https://chat.deepseek.com/"},{"t":"manus","u":"https://manus.im/app"},{"t":"扣子空间","u":"https://space.coze.cn/"},{"t":"千问","u":"https://chat.qwen.ai/"},{"t":"MiMoChat","u":"https://aistudio.xiaomimimo.com/#/"},{"t":"MiMoApi","u":"https://platform.xiaomimimo.com/#/docs/welcome"},{"t":"MiniMax","u":"https://agent.minimaxi.com/"},{"t":"ChatGPT","u":"https://chatgpt.com/"},{"t":"Poe AI","u":"https://poe.com/"},{"t":"lobechat","u":"https://lobechat.com/"},{"t":"ChatOpens","u":"https://www.chatopens.com/"},{"t":"硅基流动模型工厂","u":"https://cloud.siliconflow.cn/models"},{"t":"火山方舟","u":"https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat"},{"t":"Claude","u":"https://claude.ai/chat/e9a44cfc-e12d-49cc-b9e7-85ef6dd587d2"},{"t":"问小白","u":"https://www.wenxiaobai.com/chat/200006"},{"t":"豆包","u":"https://www.doubao.com/chat/?from_login=1&login_source=chat"},{"t":"Kimi","u":"https://kimi.moonshot.cn/"},{"t":"智普清言","u":"https://chatglm.cn/main/alltoolsdetail"},{"t":"Grok","u":"https://grok.com/"},{"t":"groq","u":"https://groq.com/"},{"t":"cloudflare ai playground","u":"https://playground.ai.cloudflare.com/"},{"t":"林哥的大模型野榜","u":"https://lyihub.com/chat"},{"t":"AI合集","u":"https://github.com/LiLittleCat/awesome-free-chatgpt"},{"t":"文心一言","u":"https://yiyan.baidu.com/"},{"t":"通义千问","u":"https://tongyi.aliyun.com/"},{"t":"360GPT","u":"https://www.so.com/zt/invite.html#/"},{"t":"星火认知","u":"https://xinghuo.xfyun.cn/"},{"t":"huggingface chat","u":"https://huggingface.co/chat/"},{"t":"picsart","u":"https://picsart.com/create"},{"t":"freegpt","u":"https://freegpt.one/"},{"t":"ai排行榜","u":"https://chat.lmsys.org/"},{"t":"google aistudio","u":"https://aistudio.google.com/app/prompts/new_chat"},{"t":"huggingface","u":"https://huggingface.co/"},{"t":"模搭","u":"https://www.modelscope.cn/models"},{"t":"ollama","u":"https://ollama.com/"},{"t":"wps AI","u":"https://ai.wps.cn/"},{"t":"AI论文","u":"https://bohrium.dp.tech/"},{"t":"fastgpt","u":"https://cloud.fastgpt.cn/chat?appId=678a6fa51b052aaa9de3e95a"},{"t":"openrouter","u":"https://openrouter.ai/"},{"t":"ai工具集","u":"https://ai-bot.cn/#term-15"}]},{"name":"外面的世界","items":[{"t":"X.com","u":"https://x.com/home"}]},{"name":"短信激活","items":[{"t":"sms-activate","u":"https://sms-activate.io/cn"}]},{"name":"资源清单","items":[{"t":"云资源合集","u":"https://gist.github.com/imba-tjd/d73258f0817255dbe77d64d40d985e76"}]},{"name":"paas平台/云平台","items":[{"t":"fly.io","u":"https://fly.io/dashboard"},{"t":"Railway","u":"https://railway.app/dashboard"},{"t":"netlify","u":"https://app.netlify.com/"},{"t":"vercel","u":"https://vercel.com/dashboard"},{"t":"cloudflare","u":"https://dash.cloudflare.com/"},{"t":"render","u":"https://dashboard.render.com/web/srv-ckq83he2eoec739dofe0/settings"},{"t":"sealos云操作系统","u":"https://bja.sealos.run/"},{"t":"杭州sealos","u":"https://hzh.sealos.run/"}]},{"name":"虚拟机容器相关","items":[{"t":"Multipass","u":"https://multipass.run/install"},{"t":"Podman","u":"https://podman-desktop.io/downloads"},{"t":"Docker","u":"https://www.docker.com/products/docker-desktop/"}]},{"name":"在线代码编辑","items":[{"t":"codesandbox","u":"https://codesandbox.io/dashboard/recent"},{"t":"codepen","u":"https://codepen.io/mg0324/pen/WNaZwYX"},{"t":"jsfiddle","u":"https://jsfiddle.net/user/fiddles/all/"},{"t":"onlinegdb在线编辑器","u":"https://www.onlinegdb.com/"}]},{"name":"资源导航","items":[{"t":"千库网","u":"https://588ku.com/so/shuqianye/"},{"t":"胖虎的工具箱","u":"https://www.955code.com/"},{"t":"JDK11下载","u":"https://blog.lupf.cn/articles/2022/02/24/1645713619397.html#toc_h2_17"},{"t":"各操作系统包","u":"https://pkgs.org/"}]},{"name":"前端UI库","items":[{"t":"Layui","u":"https://layui.gitee.io/v2/"},{"t":"heyui","u":"https://www.heyui.top/"},{"t":"热门前端","u":"https://mg.meiflower.top/skill/front/all"}]},{"name":"跨境电商运营","items":[{"t":"速卖通","u":"https://gsp.aliexpress.com/"},{"t":"17Track","u":"https://www.17track.net/zh-cn"}]},{"name":"代码托管","items":[{"t":"Gitee","u":"https://gitee.com/mgang"},{"t":"Github","u":"https://github.com/mg0324"},{"t":"NPM packages","u":"https://www.npmjs.com/settings/mgang/packages"},{"t":"DockerHub","u":"https://hub.docker.com/"}]},{"name":"开源项目","items":[{"t":"深度学习飞桨","u":"https://www.paddlepaddle.org.cn/"},{"t":"网络工具frp","u":"https://github.com/fatedier/frp"},{"t":"spring-boot-demo","u":"https://github.com/xkcoding/spring-boot-demo"},{"t":"spring-brick","u":"https://gitee.com/starblues/springboot-plugin-framework-parent"},{"t":"sofa-jarslink","u":"https://github.com/sofastack/sofa-jarslink"},{"t":"JavaGuide轻量级http框架","u":"https://github.com/Snailclimb/jsoncat"},{"t":"代码导航","u":"https://github.com/liyupi/code-nav"},{"t":"微信Markdown编辑器","u":"https://github.com/doocs/md"}]},{"name":"算法学习","items":[{"t":"左神算法","u":"https://github.com/mg0324/zuoshen-algorithm"},{"t":"算法4可视化","u":"https://algs4.cs.princeton.edu/home/"},{"t":"牛客网","u":"https://www.nowcoder.com/users/204732625"},{"t":"力扣","u":"https://leetcode.cn/u/mangomei/"},{"t":"labuladong算法笔记","u":"https://labuladong.online/algo/"},{"t":"代码随想录","u":"https://programmercarl.com/"},{"t":"算法可视化visualgo","u":"https://visualgo.net/zh"},{"t":"代码可视化","u":"https://algorithm-visualizer.org/"}]},{"name":"IT大牛","items":[{"t":"JavaGuide","u":"https://github.com/Snailclimb"},{"t":"toBeBetterJavaer","u":"https://github.com/itwanger/toBeBetterJavaer"},{"t":"龙进的博客","u":"https://longjin666.cn/"},{"t":"liyupi","u":"https://github.com/liyupi"}]},{"name":"树莓派","items":[{"t":"树莓派操作系统","u":"https://www.raspberrypi.com/software/operating-systems/"}]},{"name":"文档相关","items":[{"t":"python-selenium3","u":"https://python-selenium-zh.readthedocs.io/zh_CN/latest/"},{"t":"python-argparse","u":"https://docs.python.org/zh-cn/3/library/argparse.html#"},{"t":"python-random","u":"http://study.yali.edu.cn/pythonhelp/library/random.html"},{"t":"giscus app","u":"https://giscus.app/zh-CN"}]},{"name":"我的资源","items":[{"t":"我的蓝奏云","u":"https://pc.woozooo.com/mydisk.php"},{"t":"七牛云oss","u":"https://portal.qiniu.com/kodo/bucket/resource-v2?bucketName=mango"},{"t":"百度网盘","u":"https://pan.baidu.com/"},{"t":"芒果网盘","u":"http://disk.meiflower.top/"},{"t":"npm包","u":"https://www.npmjs.com/"}]},{"name":"云推广","items":[{"t":"七牛云推广","u":"https://portal.qiniu.com/cps/overview"},{"t":"腾讯云推广","u":"https://console.cloud.tencent.com/spread/overview"},{"t":"阿里云推广","u":"https://promotion.aliyun.com/ntms/yunparter/personal-center.html#/month-task"},{"t":"亿速云推广","u":"https://uc2.yisu.com/index.php/parter/activity/index.html"},{"t":"看云推广","u":"https://www.kancloud.cn/setting/parter"}]},{"name":"社会事宜","items":[{"t":"广东交通局","u":"https://gab.122.gov.cn/m/login"},{"t":"灵活就业事项","u":"https://www.gdzwfw.gov.cn/portal/v2/search?region=440300&keyword=%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A&areaCode=440300&departmentCode=&onlyCorrespondingLevel=0&type="},{"t":"深圳市公安局业务","u":"https://msjw.ga.sz.gov.cn/?serviceType=1"}]},{"name":"娱乐资源","items":[{"t":"免费mp3","u":"https://music.y444.cn/#/"},{"t":"腾讯视频","u":"https://v.qq.com/"}]},{"name":"收藏图","items":[{"t":"中国地图","u":"https://www.gov.cn/xhtml/2016gov/images/guoqing/bigmap.jpg"}]},{"name":"有用工具","items":[{"t":"HEU_KMS_Activator激活工具","u":"https://github.com/zbezj/HEU_KMS_Activator/"},{"t":"西游VPN","u":"https://xiyoulink.net/"},{"t":"jimmmVPN","u":"https://jimmm.life/system/dashboard"},{"t":"OBS录屏软件","u":"https://obsproject.com/welcome"}]},{"name":"妙娃工具","items":[{"t":"ChromeDriver下载","u":"https://googlechromelabs.github.io/chrome-for-testing/#stable"}]}]

const q = ref('')
const keyword = computed(() => q.value.trim().toLowerCase())

const filtered = computed(() => {
  if (!keyword.value) return groups
  return groups
    .map((g) => ({
      name: g.name,
      items: g.items.filter(
        (it) => it.t.toLowerCase().includes(keyword.value) || it.u.toLowerCase().includes(keyword.value)
      )
    }))
    .filter((g) => g.items.length)
})

const total = 178
const shown = computed(() => filtered.value.reduce((n, g) => n + g.items.length, 0))

const hue = (s) => {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360
  return h
}
const avatarStyle = (s) => ({
  background: `linear-gradient(135deg, hsl(${hue(s)} 85% 62%), hsl(${(hue(s) + 55) % 360} 85% 52%))`
})
const host = (u) => {
  try {
    return new URL(u).host.replace(/^www\./, '')
  } catch {
    return u
  }
}
const anchor = (name) => 'g-' + name.replace(/[^\w\u4e00-\u9fa5]+/g, '-')

// 滚动高亮当前分区
const activeId = ref('')
let observer = null
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (hit) activeId.value = hit.target.id
    },
    { rootMargin: '-96px 0px -65% 0px', threshold: 0 }
  )
  document.querySelectorAll('.bm-group').forEach((el) => observer.observe(el))
})
onUnmounted(() => observer && observer.disconnect())
</script>

<div class="bm">
  <header class="bm-hero">
    <div class="bm-hero-badge">{{ total }} 条精选</div>
    <h1 class="bm-hero-title">书签导航</h1>
    <p class="bm-hero-sub">{{ groups.length }} 个分区 · 常去的地方都在这儿</p>
    <div class="bm-search-wrap">
      <input v-model="q" class="bm-search" type="search" placeholder="搜索书签，支持名称或网址…" />
      <span class="bm-search-count" v-if="keyword">命中 {{ shown }} 条</span>
    </div>
  </header>
  <div class="bm-layout">
    <div class="bm-main">
      <nav class="bm-chips">
        <a v-for="g in groups" :key="g.name" class="bm-chip" :class="{ 'bm-chip-active': activeId === anchor(g.name) }" :href="'#' + anchor(g.name)">{{ g.name }}<i>{{ g.items.length }}</i></a>
      </nav>
      <section v-for="(g, gi) in filtered" :key="g.name" class="bm-group" :id="anchor(g.name)">
        <h2 class="bm-group-title">
          <span class="bm-index">{{ gi + 1 }}</span>
          {{ g.name }}
          <em>{{ g.items.length }}</em>
        </h2>
        <div class="bm-grid">
          <a v-for="it in g.items" :key="it.u + it.t" class="bm-card" :href="it.u" target="_blank" rel="noreferrer">
            <span class="bm-avatar" :style="avatarStyle(it.t + it.u)">{{ it.t.slice(0, 1) }}</span>
            <span class="bm-card-body">
              <span class="bm-card-name">{{ it.t }}</span>
              <span class="bm-card-host">{{ host(it.u) }}</span>
            </span>
          </a>
        </div>
      </section>
      <p v-if="!filtered.length" class="bm-empty">没有匹配的书签，换个词试试。</p>
    </div>
    <aside class="bm-side">
      <div class="bm-side-inner">
        <div class="bm-side-head">分类目录<em>{{ groups.length }}</em></div>
        <div class="bm-side-list">
          <a v-for="(g, gi) in groups" :key="g.name" class="bm-side-item" :class="{ 'bm-side-item-active': activeId === anchor(g.name) }" :href="'#' + anchor(g.name)">
            <span class="bm-side-no">{{ gi + 1 }}</span>
            <span class="bm-side-name">{{ g.name }}</span>
            <i>{{ g.items.length }}</i>
          </a>
        </div>
      </div>
    </aside>
  </div>
</div>
