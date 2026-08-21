"use client";

import Link from "next/link";
import { useState } from "react";
import { devices, research } from "./content";
import { Circuit, Footer, Header, Probability } from "./Shared";

function SectionHead({ no, eyebrow, title, sub }: { no: string; eyebrow: string; title: string; sub?: string }) {
  return <div className="section-head"><span className="section-no">{no}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{sub && <p className="section-sub">{sub}</p>}</div></div>;
}

export function HomePage() {
  const [device, setDevice] = useState(0);
  const [copied, setCopied] = useState(false);
  const copy = async () => { await navigator.clipboard?.writeText("pip install pyquafu"); setCopied(true); setTimeout(() => setCopied(false), 1600); };
  return <>
    <Header />
    <main>
      <section className="hero" id="top">
        <div className="grid-lines" aria-hidden="true" />
        <div className="hero-copy"><p className="eyebrow"><span className="live-dot" /> OPEN QUANTUM CLOUD · BEIJING</p><div className="zh-copy"><h1>你的第一条<br />量子线路，<br /><em>已经写好了。</em></h1><p className="lead">打开编程页就能运行——在模拟器上，不必安装，也不必注册。注册之后，同一段代码可以运行在真实的量子处理器上，这不收费。</p><div className="hero-actions"><Link className="button primary beacon" href="/lab">运行它 <span>→</span></Link><a className="button secondary" href="#devices">先看看设备</a></div></div><div className="en-copy"><h1>Your first<br />quantum circuit<br /><em>is ready.</em></h1><p className="lead">Run it in your browser on a simulator—no installation or sign-up. Create a free account when you are ready to send the same code to a real quantum processor.</p><div className="hero-actions"><Link className="button primary beacon" href="/lab">Run it <span>→</span></Link><a className="button secondary" href="#devices">View devices</a></div></div></div>
        <div className="hero-instrument"><Circuit /><div className="instrument-result"><div><span>MEASUREMENT</span><b>1,024 shots</b></div><Probability animate /></div></div>
        <nav className="pathways" aria-label="探索捷径"><a href="#play"><span>01</span>零基础？玩个量子小实验</a><a href="#learn"><span>02</span>想系统学？进量子小课堂</a><a href="#dev"><span>03</span>会写代码？从这里接上</a><a href="#research"><span>04</span>做研究？量子计算能帮你做什么</a></nav>
      </section>

      <section className="section devices-section" id="devices">
        <SectionHead no="01" eyebrow="HARDWARE / CALIBRATION" title="设备实况 3/5 在线 · 校准数据公开" />
        <div className="device-layout"><div className="device-list" role="list">{devices.map((d, i) => <button key={d.name} className={device === i ? "active" : ""} onClick={() => setDevice(i)} aria-pressed={device === i}><span className={`status ${d.cls}`}><i />{d.status}</span><b>{d.name}</b><code>{d.qubits} Q</code><span>查看参数 →</span></button>)}</div><div className="calibration-panel"><div className="cal-head"><div><p>SELECTED PROCESSOR</p><h3>{devices[device].name}</h3></div><span className={`status ${devices[device].cls}`}><i />{devices[device].status}</span></div><div className="metrics"><div><b>{devices[device].qubits}</b><span>量子比特</span></div><div><b>{devices[device].readout}</b><span>读取误差</span></div><div><b>{devices[device].gate}</b><span>双比特门误差</span></div><div><b>{devices[device].t1}</b><span>T1</span></div></div><div className="cal-scale"><i /><i /><i /><i /><i /></div><p className="cal-note">校准 2026-08-21 08:00 · 数据示意</p><p className="maintenance-note">{devices[device].cls === "online" ? "点开查看各台校准参数。" : "真机每天都要调校，这台正在保养。你仍可先用模拟器运行。"}</p></div></div>
      </section>

      <section className="section play-section" id="play"><SectionHead no="02" eyebrow="FIRST EXPERIMENT" title="零基础？玩个量子小实验" />
        <div className="experiment-grid"><Link className="experiment-feature" href="/lab"><span className="label">从这开始 · 在模拟器上</span><div className="coin" aria-hidden="true"><i>0</i><i>1</i></div><div><h3>3 分钟，亲手做一个</h3><p>从“旋转的硬币”看起，到亲手跑通第一个——每个术语出现时，旁边都帮你翻译好了。</p><b>开始实验 →</b></div></Link><article className="experiment-next"><span className="label">然后 · 上真机</span><div className="dice" aria-hidden="true"><i>● ●</i><i>● ●</i></div><h3>有心灵感应的骰子</h3><p>点一下，制备一对纠缠比特并测量：两颗骰子，永远同向。你在真机上的第一个实验，可以就是它。</p><button onClick={() => alert("注册后即可把同一条线路发送到真机")}>看看真机会发生什么 →</button></article></div>
        <aside className="term-strip"><b>术语，帮你翻译</b><p>全站任何术语悬停即见——<span tabIndex={0} data-tip="一对有心灵感应的骰子——相隔再远，掷出的点数永远同步">纠缠</span>是“有心灵感应的骰子”，<span tabIndex={0} data-tip="硬币转着转着自己停了——量子性的保鲜期">退相干</span>是“量子性的保鲜期”。</p></aside>
      </section>

      <section className="section learn-section" id="learn"><SectionHead no="03" eyebrow="LEARNING PATH" title="想系统学？进量子小课堂" sub="从零开始，不设数学门槛" /><div className="learning-path"><article className="path-main"><p className="label">SELF-PACED / CLASSROOM</p><h3>一条从零到科研的路</h3><p>上课的人随课来，自学的人自己来——每一步都在模拟器与真机上动手。</p><div className="route"><span><i>01</i>旋转的硬币</span><span><i>02</i>两个比特相遇</span><span><i>03</i>噪声从哪里来</span><span><i>∞</i>你的研究问题</span></div><button onClick={() => alert("量子小课堂课程目录即将开放")}>看看这条路 →</button></article><article className="teacher-card"><span className="label">FOR EDUCATORS</span><h3>老师，把量子计算带进课堂</h3><p>一到两课时的互动教案：课堂演示、随堂实验、作业与评分，都在平台上完成。</p><button onClick={() => alert("课堂合作申请即将开放")}>了解课堂合作 →</button></article></div></section>

      <section className="section dev-section" id="dev"><SectionHead no="04" eyebrow="SDK / OPEN DATA" title="会写代码？从这里接上" /><div className="dev-grid"><div className="code-panel"><div className="code-head"><span>QUICKSTART.PY</span><button onClick={copy}>{copied ? "已复制 ✓" : "复制代码"}</button></div><pre><code><span># 安装 Quafu SDK</span>{"\n"}pip install pyquafu{"\n\n"}<span># 同一条线路，切换后端</span>{"\n"}backend = <b>&quot;simulator&quot;</b>{"\n"}result = circuit.run(backend)</code></pre><div className="console"><span>✓</span> 1024 shots completed in 0.42s</div></div><div className="dev-copy"><div><span className="label">01 / SDK</span><h3>把代码带回你的电脑</h3><p>一行 pip 装好 SDK，同一段代码在模拟器与真机之间切换——科研人员的工作方式。</p><button onClick={copy}>{copied ? "已复制安装命令 ✓" : "复制安装命令 →"}</button></div><div><span className="label">02 / VERIFY</span><h3>校准数据公开——想验证？自己测一测</h3><p>每台设备的校准参数逐台公布、每日更新。平台里备着一个现成的小例子，拿结果和公布值对一对。</p><button onClick={() => document.querySelector("#devices")?.scrollIntoView({ behavior: "smooth" })}>跑一个验证小例子 →</button></div></div></div></section>

      <section className="research-section" id="research"><div className="section research-inner"><SectionHead no="05" eyebrow="RESEARCH STORIES" title="做研究？量子计算能帮你做什么" /><div className="research-list">{research.map(([no, title, body, meta]) => <article key={no}><span>{no}</span><div><h3>{title}</h3><p>{body}</p></div><code>{meta}</code></article>)}</div><p className="research-note">做计算研究的：DFT、蒙特卡洛、凝聚态与经典算法加速，各有专门一页——在领域页里等你。</p></div></section>

      <section className="section community-section" id="community"><SectionHead no="06" eyebrow="COMMUNITY / WORKS" title="做出来的东西，放在这里" /><div className="works"><article className="work dark"><div className="work-graphic wave"><i /><i /><i /></div><span>精选 · 材料方向</span><h3>用变分算法算一次拓扑相变</h3><p>Quafu 杯参赛作品 · 12 qubits</p><button onClick={() => alert("作品详情即将开放")}>查看实验 →</button></article><article className="work cyan"><div className="work-graphic bars"><i /><i /><i /><i /></div><span>工具 · 硬件方向</span><h3>真机落点验证工具包</h3><p>把校准参数与真实测量逐项对照</p><button onClick={() => alert("作品详情即将开放")}>查看实验 →</button></article><article className="work empty"><span>OPEN SLOT / 03</span><h3>这个位置，<br />留给你的第一个作品。</h3><Link href="/lab">从第一条线路开始 →</Link></article></div><div className="community-lines"><button onClick={() => alert("精选内容即将开放")}><i />精选 <span>“真机结果为什么和模拟器不一样？”</span><b>全部精选 →</b></button><button onClick={() => alert("赛事详情即将开放")}><i />量子计算真机挑战赛 <span>第二届筹备中</span><b>了解赛事 →</b></button></div>
        <div className="final-cta"><span>YOUR NEXT SIGNAL</span><h2>注册即可在真实量子处理器上<br />运行你的线路——免费。</h2><button className="button primary" onClick={() => alert("注册通道即将开放；游客实验无需注册，可立即运行")}>注册，去真机 →</button></div></section>
    </main><Footer />
  </>;
}
