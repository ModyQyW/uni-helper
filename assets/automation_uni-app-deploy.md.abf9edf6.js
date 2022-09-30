import{_ as s,c as n,o as a,a as l}from"./app.e0113d01.js";const h=JSON.parse('{"title":"uni-app-deploy","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[{"level":3,"title":"\u5B89\u88C5\u4F9D\u8D56","slug":"\u5B89\u88C5\u4F9D\u8D56","link":"#\u5B89\u88C5\u4F9D\u8D56","children":[]},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6","link":"#\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"\u5E94\u7528\u5E73\u53F0","slug":"\u5E94\u7528\u5E73\u53F0","link":"#\u5E94\u7528\u5E73\u53F0","children":[]},{"level":3,"title":"\u6C9F\u901A\u5DE5\u5177","slug":"\u6C9F\u901A\u5DE5\u5177","link":"#\u6C9F\u901A\u5DE5\u5177","children":[]},{"level":3,"title":"CLI \u8C03\u7528","slug":"cli-\u8C03\u7528","link":"#cli-\u8C03\u7528","children":[]},{"level":3,"title":"\u811A\u672C\u8C03\u7528","slug":"\u811A\u672C\u8C03\u7528","link":"#\u811A\u672C\u8C03\u7528","children":[]}]}],"relativePath":"automation/uni-app-deploy.md","lastUpdated":1664502799000}'),e={name:"automation/uni-app-deploy.md"},p=l(`<h1 id="uni-app-deploy" tabindex="-1">uni-app-deploy <a class="header-anchor" href="#uni-app-deploy" aria-hidden="true">#</a></h1><p><a href="https://github.com/ModyQyW/uni-helper/blob/main/LICENSE" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/license/ModyQyW/uni-helper" alt="License"></a></p><p><a href="https://www.npmjs.com/package/uni-app-deploy" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/uni-app-deploy" alt="npm"></a></p><p><strong>WIP</strong></p><p>\u652F\u6301\u5728\u811A\u672C\u6587\u4EF6\u548C CI/CD \u4E2D\u8C03\u7528\u4EE5\u81EA\u52A8\u90E8\u7F72 <code>uni-app</code> \u5E94\u7528\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h3><p>\u5B89\u88C5\u4F9D\u8D56\u3002</p><p>\u4F7F\u7528 <code>npm</code>\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">npm install uni-app-deploy -D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528 <code>yarn</code>\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">yarn install uni-app-deploy -D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528 <code>pnpm</code>\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">pnpm install uni-app-deploy -D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528 <code>cnpm</code>\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">cnpm install uni-app-deploy -D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6 <code>uni-app-deploy.config.ts</code>\u3002\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u4F1A\u88AB <a href="https://github.com/antfu/unconfig" target="_blank" rel="noreferrer">unconfig</a> \u8BFB\u53D6\u3002</p><div class="language-typescript line-numbers-mode"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { defineConfig } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;uni-app-deploy&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#D2A8FF;">defineConfig</span><span style="color:#FFA657;">({</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#8B949E;">/* \u901A\u7528\u914D\u7F6E */</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#8B949E;">// \u5F53\u524D\u8FDB\u7A0B\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u4E3A\u6267\u884C\u76EE\u5F55</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">cwd: process.</span><span style="color:#D2A8FF;">cwd</span><span style="color:#C9D1D9;">()</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#8B949E;">// globby \u5339\u914D\u6587\u4EF6\u65F6\u9700\u8981\u8FC7\u6EE4\u7684\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u8FC7\u6EE4 node_modules, dist, .hbuilder, .hbuilderx</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">ignore: [</span><span style="color:#A5D6FF;">&#39;**/node_modules&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;**/dist&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;**/.hbuilder&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;**/.hbuilderx&#39;</span><span style="color:#C9D1D9;">]</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#8B949E;">// globby \u4F7F\u7528\u7684\u5FFD\u7565\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u4E3A .gitignore</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">ignoreFiles: [</span><span style="color:#A5D6FF;">&#39;**/.gitignore&#39;</span><span style="color:#C9D1D9;">]</span><span style="color:#FFA657;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#8B949E;">/* \u5E94\u7528\u5E73\u53F0 */</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">platform: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u914D\u7F6E</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#A5D6FF;">&#39;mp-weixin&#39;</span><span style="color:#C9D1D9;">: { </span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;"> },</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span><span style="color:#FFA657;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#8B949E;">/* \u6C9F\u901A\u5DE5\u5177 */</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">im: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u4F01\u4E1A\u5FAE\u4FE1\u914D\u7F6E</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#A5D6FF;">&#39;wecom&#39;</span><span style="color:#C9D1D9;">: { </span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;"> },</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u5E94\u7528\u5E73\u53F0" tabindex="-1">\u5E94\u7528\u5E73\u53F0 <a class="header-anchor" href="#\u5E94\u7528\u5E73\u53F0" aria-hidden="true">#</a></h3><h4 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F" tabindex="-1">\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F <a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F" aria-hidden="true">#</a></h4><p>TODO</p><h3 id="\u6C9F\u901A\u5DE5\u5177" tabindex="-1">\u6C9F\u901A\u5DE5\u5177 <a class="header-anchor" href="#\u6C9F\u901A\u5DE5\u5177" aria-hidden="true">#</a></h3><h4 id="\u4F01\u4E1A\u5FAE\u4FE1" tabindex="-1">\u4F01\u4E1A\u5FAE\u4FE1 <a class="header-anchor" href="#\u4F01\u4E1A\u5FAE\u4FE1" aria-hidden="true">#</a></h4><p>TODO</p><h3 id="cli-\u8C03\u7528" tabindex="-1">CLI \u8C03\u7528 <a class="header-anchor" href="#cli-\u8C03\u7528" aria-hidden="true">#</a></h3><p>TODO</p><h3 id="\u811A\u672C\u8C03\u7528" tabindex="-1">\u811A\u672C\u8C03\u7528 <a class="header-anchor" href="#\u811A\u672C\u8C03\u7528" aria-hidden="true">#</a></h3><p>TODO</p>`,29),r=[p];function o(c,i,t,d,u,y){return a(),n("div",null,r)}const D=s(e,[["render",o]]);export{h as __pageData,D as default};
