import{_ as s,c as n,o as a,a as l}from"./app.ce508080.js";const p="/uni-helper/assets/rpx.5f3351a4.png",C=JSON.parse('{"title":"vite-plugin-uni-app-tailwind","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u539F\u7406","slug":"\u539F\u7406"},{"level":2,"title":"FAQ","slug":"faq"},{"level":3,"title":"rpx \u8F6C\u6362","slug":"rpx-\u8F6C\u6362"},{"level":3,"title":"windicss / unocss","slug":"windicss-unocss"},{"level":2,"title":"\u8D44\u6E90","slug":"\u8D44\u6E90"},{"level":2,"title":"\u5173\u8054\u9879\u76EE","slug":"\u5173\u8054\u9879\u76EE"},{"level":2,"title":"\u81F4\u8C22","slug":"\u81F4\u8C22"}],"relativePath":"bundler/vite-plugin-uni-app-tailwind.md","lastUpdated":1660889854000}'),e={name:"bundler/vite-plugin-uni-app-tailwind.md"},o=l(`<h1 id="vite-plugin-uni-app-tailwind" tabindex="-1">vite-plugin-uni-app-tailwind <a class="header-anchor" href="#vite-plugin-uni-app-tailwind" aria-hidden="true">#</a></h1><p>\u652F\u6301\u5728 <code>uni-app</code> \u4E2D\u4F7F\u7528 <code>tailwindcss</code> \u539F\u6709\u8BED\u6CD5\u5F00\u53D1\u5C0F\u7A0B\u5E8F\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5728 <code>uni-app</code> \u9879\u76EE\u4E2D\u5B89\u88C5\u914D\u7F6E <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">tailwindcss</a> \u4E4B\u540E\uFF0C\u518D\u5B89\u88C5\u989D\u5916\u4F9D\u8D56\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">npm install vite-plugin-uni-app-tailwind</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728 <code>vite.config.ts</code> \u6587\u4EF6\u4E2D\u914D\u7F6E\u63D2\u4EF6\u3002</p><div class="language-typescript line-numbers-mode"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { defineConfig } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;vite&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> uni </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@dcloudio/vite-plugin-uni&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> tailwindcss </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;tailwindcss&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#8B949E;">// @ts-ignore</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> postcssPresetEnv </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;postcss-preset-env&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> uniAppTailwind, { postcssTransformSelector } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;vite-plugin-uni-app-tailwind&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#D2A8FF;">defineConfig</span><span style="color:#FFA657;">({</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">css: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    postcss: {</span></span>
<span class="line"><span style="color:#C9D1D9;">      plugins: [</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">tailwindcss</span><span style="color:#C9D1D9;">(),</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">postcssPresetEnv</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">          stage: </span><span style="color:#79C0FF;">3</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">        }),</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u6539\u5199\u6837\u5F0F\u6587\u4EF6\u91CC\u9762\u7684 \`selector\`</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">postcssTransformSelector</span><span style="color:#C9D1D9;">(),</span></span>
<span class="line"><span style="color:#C9D1D9;">      ],</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">plugins: [</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">uni</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">      vueOptions: {</span></span>
<span class="line"><span style="color:#C9D1D9;">        reactivityTransform: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      },</span></span>
<span class="line"><span style="color:#C9D1D9;">      viteLegacyOptions: {</span></span>
<span class="line"><span style="color:#C9D1D9;">        targets: [</span><span style="color:#A5D6FF;">&#39;ios &gt;= 10&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;chrome &gt;= 53&#39;</span><span style="color:#C9D1D9;">],</span></span>
<span class="line"><span style="color:#C9D1D9;">      },</span></span>
<span class="line"><span style="color:#C9D1D9;">    }),</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u6539\u5199\u6A21\u677F\u6587\u4EF6\u91CC\u9762\u7684 \`class\`</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">uniAppTailwind</span><span style="color:#C9D1D9;">(),</span></span>
<span class="line"><span style="color:#C9D1D9;">  ]</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">})</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u539F\u7406" tabindex="-1">\u539F\u7406 <a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a></h2><p><code>uni-app</code> + <code>tailwindcss</code> \u4E0D\u80FD\u7F16\u8BD1\u51FA\u5C0F\u7A0B\u5E8F\u6B63\u5E38\u4EE3\u7801\u7684\u9519\u8BEF\u539F\u56E0\u6709\u4E24\u4E2A\uFF1A</p><ul><li>\u6837\u5F0F\u6587\u4EF6\u4E2D\u542B\u6709\u4E0D\u652F\u6301\u7684\u5B57\u7B26\uFF0C\u5982 <code>[]</code>\u3001<code>()</code>\u3001<code>#</code>\u3001<code>!</code>\u3001<code>/</code>\u3001<code>.</code>\u3001<code>:</code>\u3001<code>,</code>\u3001<code>%</code>\u3001<code>&#39;</code> \u7B49\uFF1B</li><li>\u6837\u5F0F\u6587\u4EF6\u4E2D\u542B\u6709\u4E0D\u652F\u6301\u7684\u5143\u7D20\uFF0C\u5982 <code>html</code>, <code>body</code>\u3001<code>img</code>\u3001<code>span</code>\u3001<code>a</code>\u3001<code>*</code> \u7B49\u3002</li></ul><p>\u90A3\u4E48\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u505A\u5230\u4EE5\u4E0B\u4E24\u70B9\u5C31\u53EF\u4EE5\u8BA9 <code>tailwindcss</code> \u8DD1\u5728\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u800C\u4E0D\u9700\u8981\u8C03\u6574 <code>tailwindcss</code> \u7684\u8BED\u6CD5\u6765\u589E\u52A0\u5F00\u53D1\u65F6\u7684\u5FC3\u667A\u8D1F\u62C5\uFF1A</p><ul><li>\u4F7F\u7528 <code>postcss</code> \u6539\u5199\u6837\u5F0F\u6587\u4EF6\u91CC\u9762\u7684 <code>selector</code>\uFF0C\u5305\u62EC\u5B57\u7B26\u548C\u5143\u7D20\uFF1B</li><li>\u4F7F\u7528 <code>babel</code> \u6539\u5199\u6A21\u677F\u6587\u4EF6\u91CC\u9762\u7684 <code>class</code>\uFF0C\u53EA\u5305\u62EC\u5B57\u7B26\uFF0C\u8FD9\u662F\u4E3A\u4E86\u548C\u6837\u5F0F\u6587\u4EF6\u91CC\u9762\u7684 <code>selector</code> \u76F8\u5339\u914D\u3002</li></ul><p>\u8FD9\u4E2A\u9879\u76EE\u5BFC\u51FA\u4E86\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-typescript line-numbers-mode"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#8B949E;">// \u9ED8\u8BA4 space between \u5143\u7D20\u6620\u5C04</span></span>
<span class="line"><span style="color:#8B949E;">// https://tailwindcss.com/docs/space</span></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">SpaceBetweenElements</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [</span><span style="color:#A5D6FF;">&#39;view&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;button&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;text&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;image&#39;</span><span style="color:#C9D1D9;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u9ED8\u8BA4 divide width \u5143\u7D20\u6620\u5C04</span></span>
<span class="line"><span style="color:#8B949E;">// https://tailwindcss.com/docs/divide-width</span></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">DivideWidthElements</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [</span><span style="color:#A5D6FF;">&#39;view&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;button&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;text&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;image&#39;</span><span style="color:#C9D1D9;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u9ED8\u8BA4 uni-app \u4E2D\u5143\u7D20\u6620\u5C04</span></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">ElementMap</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> [</span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">[]][] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;html&#39;</span><span style="color:#C9D1D9;">, [</span><span style="color:#A5D6FF;">&#39;html&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;page&#39;</span><span style="color:#C9D1D9;">]],</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;body&#39;</span><span style="color:#C9D1D9;">, [</span><span style="color:#A5D6FF;">&#39;body&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;page&#39;</span><span style="color:#C9D1D9;">]],</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;img&#39;</span><span style="color:#C9D1D9;">, [</span><span style="color:#A5D6FF;">&#39;img&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;image&#39;</span><span style="color:#C9D1D9;">]],</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;span&#39;</span><span style="color:#C9D1D9;">, [</span><span style="color:#A5D6FF;">&#39;span&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;text&#39;</span><span style="color:#C9D1D9;">]],</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;a&#39;</span><span style="color:#C9D1D9;">, [</span><span style="color:#A5D6FF;">&#39;a&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;functional-page-navigator&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;navigator&#39;</span><span style="color:#C9D1D9;">]],</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#A5D6FF;">&#39;*&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    [</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;html&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;body&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;page&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;cover-image&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;cover-view&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;match-media&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;movable-area&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;movable-view&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;scroll-view&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;swiper&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;swiper-item&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;view&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;icon&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;progress&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;rich-text&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;text&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;button&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;checkbox&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;checkbox-group&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;editor&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;form&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;input&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;label&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;picker&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;picker-view&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;picker-view-column&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;radio&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;radio-group&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;slider&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;switch&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;textarea&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;functional-page-navigator&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;navigator&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;audio&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;camera&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;image&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;live-player&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;live-pusher&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;video&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;voip-room&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;map&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;canvas&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;ad&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;ad-custom&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;official-account&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;open-data&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;web-view&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;navigation-bar&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;page-meta&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    ],</span></span>
<span class="line"><span style="color:#C9D1D9;">  ],</span></span>
<span class="line"><span style="color:#C9D1D9;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u9ED8\u8BA4 uni-app \u4E2D\u7279\u6B8A\u7B26\u53F7\u6620\u5C04\uFF0C\u7528\u4E8E\u66FF\u6362\u7279\u6B8A\u7B26\u53F7</span></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">CharacterMap</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> [</span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">][] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;[&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-&#39;</span><span style="color:#C9D1D9;">],</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;]&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-&#39;</span><span style="color:#C9D1D9;">],</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;(&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-&#39;</span><span style="color:#C9D1D9;">],</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;)&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-&#39;</span><span style="color:#C9D1D9;">],</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;#&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-h-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// hash</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;!&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-i-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// important</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;/&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-s-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// slash</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;.&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-d-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// dot</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;:&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;_&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// colon</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;,</span><span style="color:#79C0FF;">\\\\</span><span style="color:#A5D6FF;">s&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-c-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// comma</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;,&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-c-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// comma</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;%&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-p-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// percentage</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&quot;&#39;&quot;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-q-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// quote</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;</span><span style="color:#79C0FF;">\\\\\\\\</span><span style="color:#A5D6FF;">2c</span><span style="color:#79C0FF;">\\\\</span><span style="color:#A5D6FF;">s&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-c-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// comma</span></span>
<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#A5D6FF;">&#39;</span><span style="color:#79C0FF;">\\\\\\\\</span><span style="color:#A5D6FF;">2c&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;-c-&#39;</span><span style="color:#C9D1D9;">], </span><span style="color:#8B949E;">// comma</span></span>
<span class="line"><span style="color:#C9D1D9;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">defaultOptions</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  spaceBetweenElements: SpaceBetweenElements,</span></span>
<span class="line"><span style="color:#C9D1D9;">  divideWidthElements: DivideWidthElements,</span></span>
<span class="line"><span style="color:#C9D1D9;">  elementMap: ElementMap,</span></span>
<span class="line"><span style="color:#C9D1D9;">  characterMap: CharacterMap,</span></span>
<span class="line"><span style="color:#C9D1D9;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br></div></div><p><code>SpaceBetweenElements</code> \u7528\u4E8E\u5728\u6CA1\u6709\u63D0\u4F9B\u81EA\u5B9A\u4E49\u914D\u7F6E\u65F6\uFF0C\u66FF\u6362 <code>space between</code> \u76F8\u5173\u7C7B\u7684\u5143\u7D20\u3002<code>DivideWidthElements</code> \u7528\u4E8E\u5728\u6CA1\u6709\u63D0\u4F9B\u81EA\u5B9A\u4E49\u914D\u7F6E\u65F6\uFF0C\u66FF\u6362 <code>divide width</code> \u76F8\u5173\u7C7B\u7684\u5143\u7D20\u3002\u5B83\u4EEC\u9ED8\u8BA4\u90FD\u53EA\u5305\u542B\u4E86 <code>view</code>\u3001<code>button</code>\u3001<code>text</code>\u3001<code>image</code> \u56DB\u4E2A\u5E38\u7528\u5143\u7D20\uFF0C\u8FD9\u5E94\u8BE5\u80FD\u6EE1\u8DB3\u7EDD\u5927\u90E8\u5206\u7684\u9700\u6C42\u4E86\u3002\u4F60\u4E5F\u53EF\u4EE5\u624B\u52A8\u8C03\u6574\u3002</p><p>\u800C <code>ElementMap</code> \u63D0\u4F9B\u4E86\u5143\u7D20\u6620\u5C04\uFF0C\u7528\u4E8E\u66FF\u6362 <code>preflight</code> \u5185\u7684\u5143\u7D20\u3002\u8FD9\u6837\uFF0C\u4F60\u5C31\u4E0D\u9700\u8981\u7981\u7528 <code>preflight</code> \u4E86\u3002</p><p><code>CharacterMap</code> \u63D0\u4F9B\u4E86\u7279\u6B8A\u7B26\u53F7\u7684\u6620\u5C04\uFF0C\u7528\u4E8E\u66FF\u6362\u7279\u6B8A\u7B26\u53F7\u3002\u8FD9\u6837\uFF0C\u4F60\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>tailwindcss</code> \u539F\u6709\u7684\u8BED\u6CD5\u5F00\u53D1\uFF0C\u800C\u65E0\u9700\u624B\u52A8\u8C03\u6574 <code>tailwindcss</code> \u914D\u7F6E\u4E86\u3002</p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h2><h3 id="rpx-\u8F6C\u6362" tabindex="-1">rpx \u8F6C\u6362 <a class="header-anchor" href="#rpx-\u8F6C\u6362" aria-hidden="true">#</a></h3><p><img src="`+p+'" alt="rpx"></p><p>\u7B80\u800C\u8A00\u4E4B\uFF0C<code>rpx</code> \u662F\u4E00\u4E2A\u8DDF\u5C4F\u5E55\u5BBD\u5EA6\u6302\u94A9\u7684\u54CD\u5E94\u5F0F\u5355\u4F4D\uFF0C\u4E0D\u5E94\u8BE5\u4E5F\u4E0D\u9700\u8981\u628A\u6240\u6709\u7528\u5230 <code>px</code> \u6216\u8005 <code>rem</code> \u7684\u5730\u65B9\u6362\u6210 <code>rpx</code>\u3002</p><p>\u4EC0\u4E48\u65F6\u5019\u5FC5\u987B\u8981\u7528 <code>rpx</code>\uFF1F\u6211\u4E2A\u4EBA\u7684\u7ECF\u9A8C\u662F <code>aside</code> \u7684\u5BBD\u5EA6\u9700\u8981\u968F\u5C4F\u5E55\u5BBD\u5EA6\u53D8\u5316\u3001<code>main</code> \u6839\u636E <code>aside</code> \u5BBD\u5EA6\u53D8\u5316\u65F6\uFF0C\u624D\u5FC5\u987B\u7528\u5230 <code>rpx</code> + <code>flexbox</code> \u7684\u7EC4\u5408\uFF0C\u5426\u5219\u7528 <code>flexbox</code> \u5C31\u5DF2\u7ECF\u8DB3\u591F\u4E86\u3002</p><p>\u6240\u4EE5\uFF0C\u8FD9\u4E2A\u63D2\u4EF6\u4E0D\u652F\u6301 <code>rpx</code> \u8F6C\u6362\u3002\u4F60\u53EF\u4EE5\u76F4\u63A5 <a href="https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values" target="_blank" rel="noreferrer">\u4F7F\u7528\u4EFB\u610F\u503C</a>\uFF0C\u5982 <code>.w-[750rpx]</code>\u3001<code>.w-[200rpx]</code>\uFF0C\u6211\u76F8\u4FE1\u53EF\u4EE5\u6EE1\u8DB3\u7EDD\u5927\u90E8\u5206\u7684\u9700\u6C42\u3002</p><p>\u5982\u679C\u4F60\u60B2\u4F24\u5730\u53D1\u73B0\u8FD9\u6CA1\u6CD5\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u80FD\u8FD9\u4E2A\u63D2\u4EF6\u4E0D\u9002\u5408\u4F60\uFF0C\u8BF7\u770B\u770B\u4EE5\u4E0B\u51E0\u4E2A\u9879\u76EE\u662F\u5426\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\u3002</p><ul><li><a href="https://github.com/dcasia/mini-program-tailwind" target="_blank" rel="noreferrer">mini-program-tailwind</a></li><li><a href="https://github.com/zguolee/unocss-preset-uni" target="_blank" rel="noreferrer">unocss-preset-uni</a></li><li><a href="https://github.com/MellowCo/unocss-preset-weapp" target="_blank" rel="noreferrer">unocss-preset-weapp</a></li></ul><h3 id="windicss-unocss" tabindex="-1">windicss / unocss <a class="header-anchor" href="#windicss-unocss" aria-hidden="true">#</a></h3><p><code>windicss</code> / <code>unocss</code> \u662F\u5BCC\u5177\u521B\u9020\u6027\u7684\u9879\u76EE\uFF0C\u4F46\u95EE\u4E16\u65F6\u95F4\u8F83\u77ED\uFF0C\u6211\u76F8\u4FE1 <code>tailwindcss</code> \u662F\u76EE\u524D\u66F4\u4E3A\u7A33\u59A5\u7684\u9009\u62E9\u3002</p><p>\u5982\u679C <code>unocss</code> \u672A\u6765\u6210\u4E3A <code>windicss@4</code> \u7684\u5E95\u5C42\u5F15\u64CE\u6216\u8005\u76F4\u63A5\u66FF\u4EE3\u4E86 <code>windicss</code>\uFF08\u8BF7\u9605\u8BFB <a href="https://antfu.me/posts/reimagine-atomic-css-zh" target="_blank" rel="noreferrer">\u91CD\u65B0\u6784\u60F3\u539F\u5B50\u5316 CSS</a>\uFF09\uFF0C\u6211\u975E\u5E38\u4E50\u610F\u989D\u5916\u5199\u4E00\u4E2A <code>vite-plugin-uni-app-unocss</code> \u63D2\u4EF6\u3002</p><h2 id="\u8D44\u6E90" tabindex="-1">\u8D44\u6E90 <a class="header-anchor" href="#\u8D44\u6E90" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/ModyQyW/uni-helper/tree/main/packages/vite-plugin-uni-app-tailwind/CHANGELOG.md" target="_blank" rel="noreferrer">\u6539\u52A8\u65E5\u5FD7</a></li></ul><h2 id="\u5173\u8054\u9879\u76EE" tabindex="-1">\u5173\u8054\u9879\u76EE <a class="header-anchor" href="#\u5173\u8054\u9879\u76EE" aria-hidden="true">#</a></h2><ul><li><a href="https://www.npmjs.com/package/@modyqyw/tailwind-presets" target="_blank" rel="noreferrer">@modyqyw/tailwind-presets</a></li></ul><h2 id="\u81F4\u8C22" tabindex="-1">\u81F4\u8C22 <a class="header-anchor" href="#\u81F4\u8C22" aria-hidden="true">#</a></h2><p>\u8BE5\u9879\u76EE\u4ECE\u4EE5\u4E0B\u9879\u76EE\u6C72\u53D6\u4E86\u7075\u611F\u5E76\u53C2\u8003\u4E86\u4EE3\u7801\u3002\u5728\u6B64\u5BF9\u5B83\u4EEC\u7684\u5F00\u53D1\u8005\u8868\u793A\u7531\u8877\u7684\u611F\u8C22\u3002</p><ul><li><a href="https://github.com/dcasia/mini-program-tailwind" target="_blank" rel="noreferrer">mini-program-tailwind</a></li><li><a href="https://github.com/zguolee/unocss-preset-uni" target="_blank" rel="noreferrer">unocss-preset-uni</a></li><li><a href="https://github.com/MellowCo/unocss-preset-weapp" target="_blank" rel="noreferrer">unocss-preset-weapp</a></li></ul><p>\u4E5F\u611F\u8C22\u4EE5\u4E0B\u9879\u76EE\u7684\u5F00\u53D1\u8005\uFF0C\u5982\u679C\u6CA1\u6709\u4ED6\u4EEC\uFF0C\u524D\u7AEF\u5F00\u53D1\u6BD4\u73B0\u5728\u66F4\u52A0\u56F0\u96BE\u3002</p><ul><li><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">tailwindcss</a></li><li><a href="https://windicss.org/" target="_blank" rel="noreferrer">windicss</a></li><li><a href="https://github.com/unocss/unocss" target="_blank" rel="noreferrer">unocss</a></li></ul>',37),c=[o];function r(t,i,D,y,F,b){return a(),n("div",null,c)}const u=s(e,[["render",r]]);export{C as __pageData,u as default};
