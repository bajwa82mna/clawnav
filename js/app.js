/**
 * ClawNav — OpenClaw AI Ecosystem Directory
 * app.js — claw.corporateinchina.com
 */
(function () {
  'use strict';

  /* ── Safe localStorage wrapper ─────────────────────── */
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ── i18n strings ──────────────────────────────────── */
  var T = {
    en: {
      badge: 'OpenClaw Ecosystem',
      h1: 'The OpenClaw AI Directory',
      sub: 'Your one-stop hub for AI agents, tools, models, skills, deployments, and the full OpenClaw ecosystem.',
      srch: 'Search tools, models, platforms…',
      cats: 'CATEGORIES',
      n1: '🦞 Claw Battle',    n2: '☁️ Cloud Deploy',    n3: '📚 Tutorials',
      n4: '🤖 Common AI',      n5: '💻 Coding Plans',     n6: '⚙️ MaaS Platforms',
      n7: '🧠 AI Models',      n8: '🛒 Skills Market',    n9: '🌐 Ecosystem',
      n10: '🤝 Agent Ecosystem', n11: '💳 Agent Payments', n12: '₿ Crypto',
      tc: 'Cloud', tl: 'Local',
      t1: 'Claw Battle',       d1: 'OpenClaw variants — cloud & local deployments',
      t2: 'Cloud Deployment',  d2: "Deploy OpenClaw on China's major cloud providers",
      t3: 'Tutorials',         d3: 'Guides, handbooks, and learning resources for OpenClaw',
      t4: 'Common AI Tools',   d4: 'Popular AI assistants and generation tools',
      t5: 'Coding Plans',      d5: 'AI coding subscriptions with API access for developers',
      t6: 'MaaS Platforms',    d6: 'Model-as-a-Service — unified API access to large models',
      t7: 'AI Models',         d7: 'Leading foundation models and evaluation leaderboards',
      t8: 'Skills Market',     d8: 'Discover, share, and install OpenClaw skills and plugins',
      t9: 'Ecosystem Tools',   d9: 'Integrations and extensions across the OpenClaw ecosystem',
      t10: 'Agent Ecosystem',  d10: 'Communities, social networks, and management tools',
      t11: 'Agent Payments',   d11: 'Virtual cards, wallets, and payment rails for AI agents',
      t12: 'Crypto Ecosystem', d12: 'AI agents integrated with exchanges and Web3 platforms',
      nores: 'No results found. Try a different keyword.',
      fdesc: 'OpenClaw ecosystem directory — tools, deployments, models & community resources.',
      foff: 'OpenClaw Official',
      fcopy: '© 2026 claw.corporateinchina.com · All linked services are third-party products. Users are responsible for their own due diligence. Not affiliated with OpenClaw or any listed service unless stated.'
    },
    zh: {
      badge: 'OpenClaw 生态系统',
      h1: '龙虾导航 · AI生态大全',
      sub: 'OpenClaw 生态系统一站式聚合平台，提供部署指南、技能精选、工具聚合与社区入口。',
      srch: '搜索工具、模型、平台…',
      cats: '分类导航',
      n1: '🦞 百虾大战',    n2: '☁️ 云端部署',    n3: '📚 教程合集',
      n4: '🤖 常用AI',      n5: '💻 Coding Plan',  n6: '⚙️ MaaS平台',
      n7: '🧠 AI大模型',    n8: '🛒 Skills市场',   n9: '🌐 综合生态',
      n10: '🤝 Agent生态', n11: '💳 Agent支付',    n12: '₿ 币圈生态',
      tc: '云端', tl: '本地',
      t1: '百虾大战',    d1: 'OpenClaw 各平台实现，涵盖云端与本地',
      t2: '云端部署',    d2: '在国内主流云平台一键部署 OpenClaw',
      t3: '教程合集',    d3: 'OpenClaw 入门到精通的各类教程与学习资源',
      t4: '常用AI',      d4: '常用的AI聊天助手与生成工具',
      t5: 'Coding Plan', d5: '面向高频AI编程场景的订阅服务',
      t6: 'MaaS平台',    d6: '模型即服务平台，提供统一API调用',
      t7: 'AI大模型',    d7: '主流大模型及评测榜单',
      t8: 'Skills市场',  d8: '发现、分享、安装 OpenClaw 技能与插件',
      t9: '综合生态',    d9: 'OpenClaw 生态系统内的工具与集成资源',
      t10: 'Agent生态',  d10: 'AI智能体的社区、社交平台与管理工具',
      t11: 'Agent支付',  d11: '为AI智能体设计的虚拟卡、钱包与支付基础设施',
      t12: '币圈生态',   d12: 'AI 智能体与加密交易所及 Web3 平台的集成',
      nores: '未找到结果，请尝试其他搜索词。',
      fdesc: 'OpenClaw生态系统目录——汇聚工具、部署、模型与社区资源。',
      foff: '官方网站',
      fcopy: '© 2026 claw.corporateinchina.com · 本站所有链接服务均为第三方产品，请用户注意自行甄别。'
    }
  };

  /* ── Language ──────────────────────────────────────── */
  var lang = store.get('clawnav-lang') || 'en';

  function applyLang(l) {
    lang = l;
    store.set('clawnav-lang', l);
    document.getElementById('btn-en').classList.toggle('active', l === 'en');
    document.getElementById('btn-zh').classList.toggle('active', l === 'zh');
    var t = T[l];
    var nodes = document.querySelectorAll('[data-k]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-k');
      if (t[key] !== undefined) nodes[i].textContent = t[key];
    }
    var si = document.getElementById('si');
    if (si) si.placeholder = t.srch;
  }
  window.setLang = applyLang;

  /* ── Theme ─────────────────────────────────────────── */
  var dark = store.get('clawnav-theme') === 'dark';

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    var btn = document.getElementById('tbtn');
    if (btn) btn.textContent = dark ? '☀️' : '🌙';
  }
  window.toggleTheme = function () {
    dark = !dark;
    store.set('clawnav-theme', dark ? 'dark' : 'light');
    applyTheme();
  };

  /* ── Search ────────────────────────────────────────── */
  window.doSearch = function (raw) {
    var q = raw.trim().toLowerCase();
    var anyVisible = false;
    var sections = document.querySelectorAll('.cat');
    for (var i = 0; i < sections.length; i++) {
      var cards = sections[i].querySelectorAll('.card');
      var hasMatch = false;
      for (var j = 0; j < cards.length; j++) {
        var kw = (cards[j].getAttribute('data-q') || '').toLowerCase();
        var nm = (cards[j].querySelector('.cname') || { textContent: '' }).textContent.toLowerCase();
        var match = !q || kw.indexOf(q) !== -1 || nm.indexOf(q) !== -1;
        cards[j].classList.toggle('hide', !match);
        if (match) hasMatch = true;
      }
      sections[i].classList.toggle('hide', !hasMatch);
      if (hasMatch) anyVisible = true;
    }
    var nr = document.getElementById('nores');
    if (nr) nr.className = (!anyVisible && q.length > 0) ? 'no-res show' : 'no-res';
  };

  /* ── Sidebar navigation ────────────────────────────── */
  /* spyLocked: prevents scroll-spy from overriding active state during smooth scroll */
  var spyLocked = false;

  window.navGo = function (item) {
    /* Clear + set active */
    var allItems = document.querySelectorAll('.ni');
    for (var i = 0; i < allItems.length; i++) allItems[i].classList.remove('active');
    item.classList.add('active');

    var targetId = item.getAttribute('data-t');
    var target = document.getElementById(targetId);
    if (!target) return;

    var hh = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--hh'), 10) || 60;
    var top = target.getBoundingClientRect().top + window.pageYOffset - hh - 12;

    spyLocked = true;
    clearTimeout(window._spyTimer);
    window._spyTimer = setTimeout(function () { spyLocked = false; }, 1000);

    window.scrollTo({ top: top, behavior: 'smooth' });
  };

  /* ── Scroll spy ────────────────────────────────────── */
  (function () {
    var sections = Array.prototype.slice.call(document.querySelectorAll('.cat'));
    var navItems = Array.prototype.slice.call(document.querySelectorAll('.ni'));
    var map = {};
    navItems.forEach(function (n) { map[n.getAttribute('data-t')] = n; });

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking || spyLocked) return;
      ticking = true;
      requestAnimationFrame(function () {
        var sy = window.pageYOffset;
        var active = null;
        sections.forEach(function (s) {
          if (s.classList.contains('hide')) return;
          var top = s.getBoundingClientRect().top + sy;
          if (sy + 80 >= top) active = s;
        });
        navItems.forEach(function (n) { n.classList.remove('active'); });
        if (active && map[active.id]) map[active.id].classList.add('active');
        ticking = false;
      });
    }, { passive: true });
  })();

  /* ── Back to top ───────────────────────────────────── */
  (function () {
    var btn = document.getElementById('btt');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.pageYOffset > 400);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();

  /* ── Init ──────────────────────────────────────────── */
  applyTheme();
  applyLang(lang);

})();
