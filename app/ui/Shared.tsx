"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "./content";

export function Brand() {
  return <Link className="brand" href="/" aria-label="Quafu 首页"><span className="brand-mark"><i /><i /></span><span>Quafu</span></Link>;
}

export function Header({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [en, setEn] = useState(false);
  const toggleLanguage = () => {
    const next = !en;
    setEn(next);
    document.documentElement.lang = next ? "en" : "zh-CN";
    document.documentElement.dataset.lang = next ? "en" : "zh";
  };
  return <header className={`site-header ${compact ? "compact" : ""}`}>
    <div className="nav-wrap"><Brand />
      <button className="menu-toggle" aria-label="打开导航" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      <nav className={open ? "open" : ""} aria-label="主导航">
        {nav.map(([href, label]) => <Link key={label} href={compact ? `/${href}` : href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <div className="nav-actions"><button className="lang" onClick={toggleLanguage} aria-label="切换语言"><b>{en ? "EN" : "中"}</b><span> / {en ? "中" : "EN"}</span></button><button className="login" onClick={() => alert("登录入口将在平台态开放")}>登录</button><Link className="button small" href="/lab">进入平台</Link></div>
    </div>
  </header>;
}

export function Circuit({ compact = false }: { compact?: boolean }) {
  return <div className={`circuit ${compact ? "circuit-compact" : ""}`} role="img" aria-label="贝尔态量子线路：对 q0 应用 H 门，再连接 q0 与 q1，最后测量">
    <div className="circuit-top"><span>LIVE CIRCUIT</span><span>Bell state · 2 qubits</span></div>
    <div className="wire"><code>q0</code><span className="gate">H</span><span className="control" /><span className="measure">M</span></div>
    <div className="wire"><code>q1</code><span className="wire-gap" /><span className="target">⊕</span><span className="measure">M</span></div>
    <div className="pulse" aria-hidden="true" />
  </div>;
}

export function Probability({ xMode = false, animate = false }: { xMode?: boolean; animate?: boolean }) {
  const values = xMode ? [0, 0, 100, 0] : [49.8, 0, 0, 50.2];
  return <div className={`probability ${animate ? "animate" : ""}`} role="img" aria-label={xMode ? "结果：10 为 100%" : "结果：00 与 11 各约 50%，01 与 10 为 0"}>
    {values.map((v, i) => <div className="bar-cell" key={i}><span className="bar-value">{v}%</span><div className="bar-track"><i style={{ "--bar": `${v}%` } as React.CSSProperties} /></div><code>{["00", "01", "10", "11"][i]}</code></div>)}
  </div>;
}

export function Footer() {
  return <footer><div className="footer-top"><Brand /><p>让真实的量子计算，离第一次好奇更近一点。</p></div><div className="footer-links"><div><b>平台</b><a href="#devices">设备实况</a><Link href="/lab">在线编程</Link></div><div><b>资源</b><a href="#learn">量子小课堂</a><a href="#dev">SDK 与文档</a></div><div><b>连接</b><a href="#community">社区</a><button onClick={() => alert("联系通道即将开放")}>联系我们</button></div></div><div className="footer-base"><span>© 2026 北京量子信息科学研究院</span><span>「夸父与日逐走」——《山海经》</span></div></footer>;
}
