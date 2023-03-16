---
# try also 'default' to start simple
theme: seriph
#theme: default
colorSchema: 'dark'
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# download : true
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  What is k-point sampling
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: fade-out
# use UnoCSS/
#css: unocss
fonts:
  # basically the text
  sans: 'Robot'
  # use with `font-serif` css class from windicss
  serif: 'Robot Slab'
  # for code blocks, inline code, etc.
  mono: 'Fira Code'
  italic: false
  fallback: false

---

# k点分割とは何か

逆格子空間を経由しない説明の試み

---

# はじめに

- 主に固体物理分野で利用される第一原理計算では、**k点分割**（サンプリング）を指定します。
  - ”逆格子空間（ブリルアンゾーン）の分割”のように説明されます。
  この内容は正しいですが、逆格子空間に馴染みのない人に向けては、説明になっていません。
- 第一原理計算の利用に際して、”逆格子空間”の理解は必須ではありません。逆格子空間を持ち出さずに、k点分割を説明します。
  - ”ブロッホの定理”は登場しません。
  - とは言っても、**逆格子空間**や**ブロッホの定理**は固体物理学における重要な基礎概念です。
  第一原理計算の深い理解のためには（後追いで）学習することをお勧めします。

<style>
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

---

# 数学の復習

- オイラーの公式

$$
\exp (i \theta) = \cos \theta + i \sin \theta
$$

- 位相を変える

$$
\cos (\theta - \phi)+ i \sin (\theta - \phi) = \exp (i (\theta - \phi)) = \exp (i \theta) \times \exp (-i \phi)
$$

- 複素数を用いた波の表現、重ね合わせ
  - $A_m$：複素数（位相成分を含みます）
  - $b_m$：実数
$$
f(x) = \sum_m A_m \exp(i b_m x)
$$

---

# 周期境界条件と平面波基底

繰り返し構造とFourier変換

- 計算対象（原子配列）を、繰り返し構造で表現します；周期境界条件を用います。

<svg v-click viewBox="0 0 160 30" xmlns="http://www.w3.org/2000/svg">

  <circle cx="10" cy="10" r="6" fill="pink"/>
  <circle cx="20" cy="10" r="8" fill="lightgreen"/>
  <circle cx="15" cy="20" r="7" fill="skyblue"/>

  <circle cx="30" cy="10" r="6" fill="pink"/>
  <circle cx="40" cy="10" r="8" fill="lightgreen"/>
  <circle cx="35" cy="20" r="7" fill="skyblue"/>

  <circle cx="50" cy="10" r="6" fill="pink"/>
  <circle cx="60" cy="10" r="8" fill="lightgreen"/>
  <circle cx="55" cy="20" r="7" fill="skyblue"/>

  <circle cx="70" cy="10" r="6" fill="pink"/>
  <circle cx="80" cy="10" r="8" fill="lightgreen"/>
  <circle cx="75" cy="20" r="7" fill="skyblue"/>
</svg>

- 繰り返し構造では、電子の波動関数を平面波の和で記述すると便利です。
  - Fourier変換；平面波基底

---

# 周期境界条件とk点分割

周期境界における電子波動関数の位相変化を許し、位相変化量を離散化する。

- 周期境界条件を満たすべきなのは、観測可能な物理量（オブザーバブル）です。
  - 電子の波動関数は観測できません；波動関数の**位相**は観測できません。
  - 電子の波動関数に対して、位相を含めた完全な周期境界条件を課すことは、過剰な制約です。
    - <span class="red">周期境界で、波動関数の位相は変化して良いのです。</span>
    - 位相変化範囲：$-\pi$から$\pi$まで。
- 位相変化量は連続ですが、これを離散的な値に代表させます；これが**k点分割**（サンプリング）です。

<style>
.red {
    color: pink;
    font-weight: bold;
}
</style>

---

# k点分割と計算精度

k点分割により、波長を離散化する”稠密さ”を調整する。

- 位相を固定する厳格な周期境界条件では、取り扱い対象となる波の細かさ（波長）は離散的です。
  - 電子波動関数の記述に参画する平面波の波長が<span class="orange">飛び飛び</span>であれば、計算精度は低下します。
- 周期境界での位相変化を許すと、任意の細かさ（波長）の波を取り扱うことができます。
  - 平面波の波長が<span class="green">稠密</span>であれば、波動関数記述精度は向上します。

<div class="grid grid-cols-[25%,25%,50%] gap-2"> <div>

<img class="h-70" src="/images/pw.svg">

</div> <div>

<img v-click class="h-70" src="/images/pw_pi.svg">

</div> <div>

<img v-click class="h-70" src="/images/double.svg">

</div> </div>

<style>
.orange {
    color: gold;
    font-weight: bold;
}
.green {
    color: lightgreen;
    font-weight: bold;
}
.bky {
    background-color: lemonchiffon;
}
</style>

---

# $\bm{k}$は”良い量子数”

$k$を用いて、電子の状態を指定する。

<div class="grid grid-cols-[62%,1fr] gap-4"> <div>

- 通常の（特別に高精度ではない；一体の）ハミルトニアン$\mathcal{H}$は、異なる$k$と$k'$の間に要素を持ちません。

$$
<k m | \mathcal{H} | k' n> = \delta_{k, k'} H_{kmn}
$$

- $k$を指標にして、電子状態を分類できます。
  - ”k点並列は実行効率が良い”ことにもつながります。

</div> <div>

<img class="h-100" src="/images/band.svg">

</div> </div>

<style>
.bky {
    background-color: lemonchiffon;
}
</style>

---

# まとめ

- 固体中の電子の波動関数に対する周期境界条件は、周期境界での位相変化を許容します。
  - k点分割は、<span class="red">位相変化量の離散化</span>です。
- k点分割により、基底関数の、離散化された波長の稠密さを調整します。
  - k点分割は、計算精度に影響を及ぼします。
  - k点分割数を実格子長さに反比例させると、波長離散化の度合いが同等になります。
- kは状態を指定する指標として、物理現象の解釈に役立つ意味を持ちます。

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.red {
    color: crimson;
    font-weight: bold;
}
</style>

---

# 補足：$\bm{k}$と$\bm{G}$

Fourier変換の式：一旦、電子状態計算を忘れます。
$$
f(x) = \int F(k) \exp (i k x) dk
$$
変数$k$を使って説明されることが多いですが、k点分割とは無関係です。
- 第一原理電子状態計算では、平面波の足し合わせ（積分）に$\bm{G}$を使います（慣例）。
- PHASE/0三次元並列版のG並列は、この$\bm{G}$での並列です。
