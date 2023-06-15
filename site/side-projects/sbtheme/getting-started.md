---
layout: hexo
title: Getting started with Hexo theme SB
description: SB is a clean and simple theme for Hexo blog framework based on pink and dark colors, Vollkorn and Playfair Display fonts, and best practices in 2018.
---

<header class="header">
  <nav class="nav">
    <input class="nav__checkbox" type="checkbox" id="NavToggle"><label class="nav__toggle" for="NavToggle">Toggle navigation</label>
    <ul class="nav__list">
      <li class="nav__item"><a class="nav__link" href="/side-projects/sbtheme/">Home</a></li>
      <li class="nav__item"><a class="nav__link" href="/side-projects/sbtheme/docs/">Docs</a></li>
      <li class="nav__item"><a class="nav__link" href="/side-projects/sbtheme/about/">About</a></li>
    </ul>
  </nav>
</header>
<div class="wrapper">
  <div class="article">
    <h1 class="article__title">Getting Started With Hexo Theme SB</h1>
    <div class="details">
      <ul class="details__list">
        <li class="details__item"><span class="text">On:</span></li>
        <li class="details__item"><span class="tally">2018-02-06</span></li>
      </ul>
      <ul class="details__list">
        <li class="details__item"><span class="text">Location:</span></li>
        <li class="details__item"><a class="tally" href="/side-projects/sbtheme/">Home</a></li>
        <li class="details__item"><a class="tally" href="/side-projects/sbtheme/docs/">docs</a></li>
        <li class="details__item">
          <a class="tally" href="/side-projects/sbtheme/getting-started/">Getting Started With Hexo The...</a></li>
      </ul>
    </div>
    <div class="content">
      <h2 id="hexo-theme-sb"><a href="#hexo-theme-sb" class="headerlink" title="hexo-theme-sb"></a>hexo-theme-sb
      </h2>
      <p>Clean and simple theme for Hexo blog framework.</p>
      <h2 id="Installation"><a href="#Installation" class="headerlink" title="Installation"></a>Installation</h2>
      <p>Npm installation:</p>
      <figure class="highlight bash">
        <table>
          <tr>
            <td class="gutter">
              <pre><span class="line">1</span><br></pre>
            </td>
            <td class="code">
              <pre><span class="line">npm i -S hexo-helper-inline-svg hexo-render-pug hexo-theme-sb</span><br></pre>
            </td>
          </tr>
        </table>
      </figure>
      <p>Yarn installation:</p>
      <figure class="highlight bash">
        <table>
          <tr>
            <td class="gutter">
              <pre><span class="line">1</span><br></pre>
            </td>
            <td class="code">
              <pre><span class="line">yarn add hexo-helper-inline-svg hexo-render-pug hexo-theme-sb</span><br></pre>
            </td>
          </tr>
        </table>
      </figure>
      <a id="more"></a>
      <p>This will install SB theme in both <code>./node_modules/hexo-theme-sb/</code> and
        <code>./themes/hexo-theme-sb/</code><br>folders.</p>
        <h2 id="Initialization">
          <a href="#Initialization" class="headerlink" title="Initialization"></a>Initialization</h2>
        <p>Update the config file to start using SB theme:</p>
        <figure class="highlight yml">
          <table>
            <tr>
              <td class="gutter">
                <pre><span class="line">1</span><br></pre>
              </td>
              <td class="code">
                <pre><span class="line"><span class="attr">theme:</span> <span class="string">hexo-theme-sb</span></span><br></pre>
              </td>
            </tr>
          </table>
        </figure>
        <p>Check that your <code>.gitignore</code> file contains <code>/node_modules/</code> rule.</p>
        <p>For better Hexo performance, you could add the following line to your config file:</p>
        <figure class="highlight yaml">
          <table>
            <tr>
              <td class="gutter">
                <pre><span class="line">1</span><br><span class="line">2</span><br></pre>
              </td>
              <td class="code">
                <pre><span class="line"><span class="attr">ignore:</span></span><br><span class="line"><span class="bullet">  -</span> <span class="string">'**/themes/**/*(node_modules|lib)'</span> <span class="comment"># improve performance while `hexo server` is running</span></span><br></pre>
              </td>
            </tr>
          </table>
        </figure>
        <h2 id="Configuration"><a href="#Configuration" class="headerlink" title="Configuration"></a>Configuration
        </h2>
        <p>There is already a config file in SB theme, but it is
          commented.<br>Here is the file with every possible option:</p>
          <figure class="highlight yaml">
            <table>
              <tr>
                <td class="gutter">
                  <pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br><span class="line">22</span><br><span class="line">23</span><br><span class="line">24</span><br><span class="line">25</span><br><span class="line">26</span><br><span class="line">27</span><br><span class="line">28</span><br><span class="line">29</span><br><span class="line">30</span><br><span class="line">31</span><br><span class="line">32</span><br><span class="line">33</span><br><span class="line">34</span><br><span class="line">35</span><br><span class="line">36</span><br><span class="line">37</span><br><span class="line">38</span><br><span class="line">39</span><br><span class="line">40</span><br><span class="line">41</span><br><span class="line">42</span><br><span class="line">43</span><br><span class="line">44</span><br><span class="line">45</span><br><span class="line">46</span><br><span class="line">47</span><br><span class="line">48</span><br><span class="line">49</span><br><span class="line">50</span><br><span class="line">51</span><br><span class="line">52</span><br><span class="line">53</span><br><span class="line">54</span><br><span class="line">55</span><br><span class="line">56</span><br><span class="line">57</span><br><span class="line">58</span><br><span class="line">59</span><br><span class="line">60</span><br><span class="line">61</span><br><span class="line">62</span><br><span class="line">63</span><br><span class="line">64</span><br><span class="line">65</span><br><span class="line">66</span><br><span class="line">67</span><br><span class="line">68</span><br><span class="line">69</span><br><span class="line">70</span><br><span class="line">71</span><br><span class="line">72</span><br><span class="line">73</span><br><span class="line">74</span><br><span class="line">75</span><br></pre>
                </td>
                <td class="code">
                  <pre><span class="line"><span class="comment"># General section</span></span><br><span class="line"><span class="attr">site:</span></span><br><span class="line"><span class="attr">  full_name:</span> <span class="string">SB</span> <span class="bullet">-</span> <span class="string">Silvestar's</span> <span class="string">personal</span> <span class="string">website</span></span><br><span class="line"><span class="attr">  short_name:</span> <span class="string">SB</span></span><br><span class="line"><span class="attr">  description:</span> <span class="string">Silvestar</span> <span class="string">is</span> <span class="string">a</span> <span class="string">fearless</span> <span class="string">web</span> <span class="string">developer</span> <span class="string">eager</span> <span class="string">to</span> <span class="string">prove</span> <span class="string">his</span> <span class="string">worth</span></span><br><span class="line"><span class="attr">  logo:</span> <span class="string">/gfx/svg/logo.svg</span></span><br><span class="line"><span class="attr">  language:</span> <span class="string">en</span></span><br><span class="line"></span><br><span class="line"><span class="comment"># Menu section</span></span><br><span class="line"><span class="attr">menu:</span></span><br><span class="line"><span class="attr">  centered:</span> <span class="literal">true</span></span><br><span class="line"><span class="attr">  display_logo:</span> <span class="literal">true</span></span><br><span class="line"><span class="attr">  items:</span></span><br><span class="line"><span class="attr">    Home:</span> <span class="string">/</span></span><br><span class="line"><span class="attr">    Blog:</span> <span class="string">/categories/articles</span></span><br><span class="line"><span class="attr">    Portfolio:</span> <span class="string">/portfolio</span></span><br><span class="line"><span class="attr">    About:</span> <span class="string">/about-me</span></span><br><span class="line"></span><br><span class="line"><span class="comment"># Homepage section</span></span><br><span class="line"><span class="attr">home_page:</span></span><br><span class="line"><span class="attr">  - section:</span></span><br><span class="line"><span class="attr">    title:</span> <span class="string">Silvestar</span> <span class="string">BistroviÄ‡</span></span><br><span class="line"><span class="attr">    paragraphs:</span></span><br><span class="line"><span class="bullet">     -</span> <span class="string">Fearless</span> <span class="string">web</span> <span class="string">developer</span></span><br><span class="line"><span class="attr">  - section:</span></span><br><span class="line"><span class="attr">    title:</span> <span class="string">Specializations</span></span><br><span class="line"><span class="attr">    paragraphs:</span></span><br><span class="line"><span class="bullet">      -</span> <span class="string">Frontend</span></span><br><span class="line"><span class="bullet">      -</span> <span class="string">User</span> <span class="string">Interface</span></span><br><span class="line"><span class="bullet">      -</span> <span class="string">Wordpress</span></span><br><span class="line"><span class="bullet">      -</span> <span class="string">Web</span> <span class="string">Optimization</span></span><br><span class="line"><span class="attr">  - section:</span></span><br><span class="line"><span class="attr">    title:</span> <span class="string">Projects</span></span><br><span class="line"><span class="attr">    links:</span></span><br><span class="line">      <span class="string">Starter</span> <span class="attr">Project:</span> <span class="string">//starter-project.silvestar.codes</span></span><br><span class="line">      <span class="string">Hexo</span> <span class="string">Theme</span> <span class="attr">SB:</span> <span class="string">//www.silvestar.codes</span></span><br><span class="line"><span class="attr">      Contiamo:</span> <span class="string">//www.contiamo.com</span></span><br><span class="line">      <span class="string">Irina</span> <span class="string">and</span> <span class="attr">Matej:</span> <span class="string">//irinaandmatej.com</span></span><br><span class="line"><span class="attr">  - section:</span></span><br><span class="line"><span class="attr">    title:</span> <span class="string">Links</span></span><br><span class="line"><span class="attr">    links:</span></span><br><span class="line"><span class="attr">      Mail:</span> <span class="attr">mailto:me@silvestar.codes?Subject=Hello</span></span><br><span class="line"><span class="attr">      Twitter:</span> <span class="string">//twitter.com/malimirkeccita</span></span><br><span class="line"><span class="attr">      Github:</span> <span class="string">//github.com/maliMirkec</span></span><br><span class="line"></span><br><span class="line"><span class="comment"># Open Graph section</span></span><br><span class="line"><span class="attr">open_graph:</span></span><br><span class="line"><span class="attr">  pretty_url:</span> <span class="literal">true</span></span><br><span class="line"><span class="attr">  image:</span> <span class="string">/gfx/jpg/SB-big.jpg</span></span><br><span class="line"><span class="attr">  fb:</span></span><br><span class="line"><span class="attr">    fb_id:</span> <span class="number">340933169673372</span></span><br><span class="line"><span class="attr">    fb_admins:</span> <span class="string">malimirkeccita</span></span><br><span class="line"><span class="attr">  twitter:</span></span><br><span class="line"><span class="attr">    twitter_id:</span> <span class="string">malimirkeccita</span></span><br><span class="line"><span class="attr">  google_plus:</span></span><br><span class="line"><span class="attr">    google_plus_id:</span> <span class="string">+SilvestarbistrovicFromHr</span></span><br><span class="line"></span><br><span class="line"><span class="comment"># Widgets</span></span><br><span class="line"><span class="attr">widgets:</span></span><br><span class="line"><span class="attr">  contact:</span></span><br><span class="line"><span class="attr">    mail:</span> <span class="attr">mailto:me@silvestar.codes?Subject=Hello</span></span><br><span class="line"><span class="attr">    twitter:</span> <span class="string">//twitter.com/malimirkeccita</span></span><br><span class="line"><span class="attr">    linkedin:</span> <span class="string">//www.linkedin.com/in/starbist/</span></span><br><span class="line"><span class="attr">    facebook:</span> <span class="string">//www.facebook.com/silvestar.codes/</span></span><br><span class="line"><span class="attr">    medium:</span> <span class="string">//medium.com/@malimirkeccita</span></span><br><span class="line"><span class="attr">    github:</span> <span class="string">//github.com/maliMirkec</span></span><br><span class="line"><span class="attr">    codepen:</span> <span class="string">//codepen.io/CiTA/</span></span><br><span class="line"><span class="attr">    lastfm:</span> <span class="string">//www.last.fm/user/maliMirkec</span></span><br><span class="line"><span class="attr">  google_analytics:</span></span><br><span class="line"><span class="attr">    tracking_id:</span> <span class="string">UA-37881833-5</span></span><br><span class="line"><span class="attr">  disqus:</span></span><br><span class="line"><span class="attr">    shortname:</span> <span class="string">silvestarbistrovic</span></span><br><span class="line"><span class="attr">  sharing:</span></span><br><span class="line"><span class="attr">    twitter:</span> <span class="string">malimirkeccita</span></span><br><span class="line"><span class="attr">    facebook:</span> <span class="string">silvestar.codes</span></span><br></pre>
                </td>
              </tr>
            </table>
          </figure>
          <h2 id="Advanced"><a href="#Advanced" class="headerlink" title="Advanced"></a>Advanced</h2>
          <p>This theme follows the latest best practices. This is achieved by using
            <a href="/side-projects/starter-project/" target="_blank" rel="noopener">Starter Project</a>.<br>Everything is already set up for you, but you could configure the theme by updating
            <code>./themes/hexo-theme-sb/config.json</code> file.</p>
          <p>For example, if you want to generate new Critical CSS file, you should update
            <code>penthouse.criticalCssConfigs.url</code> option and set it according to your Hexo configuration.
          </p>
          <p>After this, run <code>gulp</code> command inside <code>./themes/hexo-theme-sb/</code> folder.</p>
          <p><strong>It is important that your website is running.</strong></p>
          <h2 id="Support"><a href="#Support" class="headerlink" title="Support"></a>Support</h2>
          <p>If you’re having issues, please
            <a href="https://github.com/maliMirkec/hexo-theme-sb/issues" target="_blank" rel="noopener">search for issues</a>
            or open
            <a href="https://github.com/maliMirkec/hexo-theme-sb/issues/new" target="_blank" rel="noopener">a new one</a>.
          </p>
          <p>If you need any help, please feel free to
            <a href="mailto:me@silvestar.codes?Subject=Help" target="_blank" rel="noopener">contact me</a>.
          </p>
    </div>
    <div class="gallery"></div>
    <div class="details">
      <ul class="details__list">
        <li class="details__item"><a class="tally" href="/side-projects/sbtheme/tags-hexo/">hexo</a></li>
      </ul>
      <div class="social">
        <a class="tally" href="https://twitter.com/intent/tweet?url=https://www.silvestar.codes/side-projects/sbtheme/getting-started/&amp;text=Getting Started With Hexo Theme SB&amp;via=malimirkeccita" target="_blank">Share on Twitter</a><a class="tally" href="https://facebook.com/sharer.php?u=https://www.silvestar.codes/side-projects/sbtheme/getting-started/" target="_blank">Share on Facebook</a>
      </div>
    </div>
  </div>
</div>
<footer class="footer">
  <div class="copyright">
    <p>&copy; SB 2018</p>
  </div>
  <ul class="contact">
    <li class="contact__item">
      <a class="tally" href="mailto:me@silvestar.codes?Subject=Hello"><svg class="font-awesome font-awesome--mail" viewBox="0 0 512 512"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"/></svg><span>mail</span></a>
    </li>
    <li class="contact__item">
      <a class="tally" href="//github.com/maliMirkec/hexo-theme-sb"><svg class="font-awesome font-awesome--github" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg><span>github</span></a>
    </li>
  </ul>
</footer>
<div class="sig">
  <p>Powered by
    <a class="sig__link" href="/side-projects/starter-project/"><svg width="500" height="500" viewBox="0 0 500 500"><defs><linearGradient id="starter-project-a" x1="0%" y1="50%" y2="50%"><stop offset="0%" stop-color="#BA1ADA"/><stop offset="100%" stop-color="#D91A79"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><polygon fill="url(#starter-project-a)" points="130 91 450 91 450 456 50 456 50 56 130 56"/><polygon fill="#1ED9D9" points="300 281 150 356 150 156 300 231 300 156 350 156 350 356 300 356"/></g></svg> Starter Project</a>.
  </p>
</div>
