---
# try also 'default' to start simple
theme: penguin
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
# persist drawings in exports and build
drawings:
  persist: false
fonts:
  sans: "Alibaba PuHuiTi 2.0, Robot"
  local: "Alibaba PuHuiTi 2.0"
layout: intro
---

# ASC Mobile Toolkit

Presentation for mobile toolkit of ASC

---

# Site Metrics

What should a healthy mobile page look like?

- ⌛️ **Loading Time** - To provide a good user experience, sites should strive to have LCP less than 2.5s, TBT less than 200ms. [^1].
- 📏 **Bundle Size** - Scripts resources(compressed) should less than 300KB[^2].
- ⚡️ **Response Speed** - Make sure that the page interaction is not delayed and have responds [^4].
- 🎯 **Immersion** - Reuse native interaction as much as possible to provide the best immersive experience.
- 🛡 **Stability** - The page should never go blank because there is no refresh button in mobile.
- 📱 **Responsive** - Make sure that most resolution mobile devices can be browsed [^3]. 360x800, 360x640...

[^1]: [How the Performance score is weighted](https://web.dev/performance-scoring/#weightings)
[^2]: [Small Bundles, Fast Pages](https://calibreapp.com/blog/bundle-size-optimization)
[^3]: [Mobile Screen Resolution Stats Asia](https://gs.statcounter.com/screen-resolution-stats/mobile/asia)
[^4]: [300ms tap delay, gone away](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/)

<style>
.footnotes-sep {
  @apply mt-13 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75  text-3;
}
.footnote-item  p {
  @apply my-1;
}
.footnote-backref {
  display: none;
}
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
In the desktop application, you can have not too strong performance awareness.

Bundle size is the most factor that affects performance. So what exactly our bundle size should be?

But as far as I know, most of our mobile pages are not up to standard

Does anyone know the story of 300ms on the mobile?
The difference between Tap and Click is on the mobile.

 -->

---

# Immersion

<div class="flex flex-row gap-10">
<div>
  <img class="h-90" border="rounded" src="https://md.xiaobe.top/imgs/202210272248668.png!preview.webp">
</div>
<div>
  <img class="h-90" border="rounded" src="https://md.xiaobe.top/imgs/202210272251158.png!preview.webp" />
</div>
</div>

---

# Mobile Screen Resolution Stats Asia

<div class="flex justify-center">
  <img class="h-100" border="rounded" src="https://md.xiaobe.top/imgs/202210272150124.png!preview.webp">
</div>

---

# lzd-toolkit-asc <span class="text-base px-2 bg-#1890FF c-white rd ml-1">mobile</span>

- <logos-vitejs /> **[Vite](https://vitejs.dev/)** - Use vite to provide the excellent development experience.
- <logos-preact  /> **[Preact](https://preactjs.com/)** - Only 3KB has the same API with React. (~ React 110KB).
- <img class="slidev-icon w-1.2em scale-120" src="https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg" /> **[Ant Design Mobile](https://mobile.ant.design/)** - Modern & Powerful mobile UI framework.
- <logos-unocss class="bg-white bg-op-50" /> **[Unocss](https://uno.antfu.me/)** - The instant on-demand Atomic CSS engine.
- <mdi-responsive  /> **Px2vw** - Automatically convert the PX unit to VW unit to achieve the mobile adaptation. Write once scale to every device.
- <uiw-global /> **i18n** - Integrate `lzd-plugin-must`, seamlessly reuse ASC i18n technology solution.



<br>
<br>

 A result page bundle size is less than 50KB. 

 Compared with the previous plan, reduced by **87.5% (400KB -> 50KB)**

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

---

# Preact vs React

<div class="flex flex-col gap-10">
<div>

#### Preact

  <img class="m1" border="rounded" src="https://md.xiaobe.top/imgs/202210270153575.png!preview.webp" />

</div>
<div>


#### React

  <img  class="m1" border="rounded" src="https://md.xiaobe.top/imgs/202210270153425.png!preview.webp">
</div>
</div>

---
layout: center
---

# Talk is weak. Show me pls.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 30%, #146b8c 90%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: center
class: text-center
---

# Next Plan

 🚀 Design system for ASC mobile

 🚀 Common templates (eg. List\Form )

 ⭐️ A landing business


---
layout: center
class: text-center
---

# Thanks for [LAGO](https://lago.alibaba-inc.com/) ✨

Provide the flexible template editing ability and mobile sign-in path.



---
layout: center
class: text-center
---

# lzd-toolkit-asc <span class="relative bottom-1 text-base px-2 bg-#1890FF c-white rd ml-1">mobile</span>

[Demo](https://sellercenter-staging.lazada.sg/portal/demo/mobile_test) · [Code](https://work.def.alibaba-inc.com/app/111594/index) · [Try It]()
