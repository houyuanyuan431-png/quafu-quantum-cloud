"use client";

import Link from "next/link";
import { useState } from "react";
import { Circuit, Header, Probability } from "./Shared";

const bellCode = [
  ["from quafu import QuantumCircuit", "# 准备一张量子动作谱"],
  ["qc = QuantumCircuit(2)", "# 放入两个量子比特"],
  ["qc.h(0)", "# 让第一枚“硬币”旋转起来"],
  ["qc.cnot(0, 1)", "# 让两个比特产生纠缠"],
  ["qc.measure([0, 1])", "# 测量：看看它们如何落地"],
];

export function LabPage() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [xMode, setXMode] = useState(false);
  const run = () => { setRunning(true); setDone(false); setTimeout(() => { setRunning(false); setDone(true); }, 900); };
  const changeGate = () => { setXMode(true); setDone(false); setTimeout(() => setDone(true), 250); };
  return <div className="lab-page"><Header compact /><main className="lab-shell">
    <div className="lab-title"><div><Link href="/">← 返回首页</Link><p className="eyebrow">GUEST WORKSPACE / NO SIGN-IN</p><h1>第一条线路，准备好了。</h1><p>这是一个贝尔态实验。先不必理解每一行——运行它，结果会替我们解释。</p></div><div className="lab-meta"><span><i className="live-dot" />模拟器就绪</span><span>预计耗时 &lt; 2 秒</span></div></div>
    <div className="workspace"><section className="editor-panel"><div className="panel-head"><span>bell_state.py</span><span>Python · Quafu SDK</span></div><div className="editor" aria-label="预填贝尔态代码">{bellCode.map(([code, note], i) => <div key={code}><em>{i + 1}</em><code>{xMode && i === 2 ? "qc.x(0)" : code}</code><span>{xMode && i === 2 ? "# 把第一枚硬币翻到另一面" : note}</span></div>)}</div><div className="editor-foot"><span>免登录 · 运行于理想模拟器</span><button className="button primary run-button" disabled={running} onClick={run}>{running ? <><i className="spinner" /> 正在运行…</> : "运行线路 →"}</button></div></section><aside className="circuit-panel"><div className="panel-head"><span>线路预览</span><span>2 qubits · 2 classical bits</span></div><Circuit compact /><div className="hint"><b>量子线路</b><p>一份动作谱：按顺序对哪些比特做哪些“拨动”。</p></div></aside></div>
    {!done && !running && <section className="result-empty"><span>RESULT / WAITING</span><h2>结果会出现在这里。</h2><p>点击“运行线路”，模拟器会把同一套动作重复 1,024 次。</p></section>}
    {running && <section className="result-loading" aria-live="polite"><div className="scan-line" /><span>SIMULATING 1,024 SHOTS</span><p>正在重复测量，统计每一种可能……</p></section>}
    {done && <section className="results" aria-live="polite"><div className="result-head"><div><p className="eyebrow">SIMULATOR RESULT</p><h2>{xMode ? "X 门让结果变得确定。" : "两个结果，各占一半。"}</h2></div><span>完成 · 0.42 秒</span></div><div className="result-layout"><div className="chart-card"><div className="chart-meta"><span>测量概率</span><code>shots = 1,024</code></div><Probability xMode={xMode} animate /><p>{xMode ? "把 H 门换成 X 门后，旋转中的可能性消失了：结果稳定落在 10。" : "00 与 11 几乎各占一半，01 与 10 没有出现。两枚“骰子”始终同向。"}</p></div><aside className="achievement"><span>ACHIEVEMENT / 01</span><div className="achievement-mark">01<br /><small>ENTANGLED</small></div><h3>{xMode ? "你刚刚改变了量子线路。" : "你刚刚制备了一对纠缠比特。"}</h3><p>{xMode ? "一个量子门的变化，重写了整个概率分布。" : "测量结果永远同步——爱因斯坦称之为“鬼魅般的超距作用”。"}</p></aside></div>
      <div className="noise-preview"><div className="noise-bars"><i /><i /><i /><i /></div><div><span>REAL QPU / RESERVED LAYOUT</span><h3>真机并不总是这么整齐。</h3><p>看到这些“不该出现”的结果了吗？这就是噪声，当今量子计算的头号对手，也是最前沿的战场。</p></div><button onClick={() => alert("注册后可解锁真机对比")}>注册解锁对比 →</button></div>
      <div className="next-section"><p className="eyebrow">NEXT SIGNALS</p><h2>下一座灯塔，选哪一座都可以。</h2><div className="next-grid"><button onClick={() => alert("注册后，同一条线路即可发送到真实量子处理器")}><span>01 / REAL QPU</span><h3>换个参数，让它在真实量子计算机上再跑一次</h3><b>注册解锁 →</b></button><button onClick={() => alert("3 分钟纠缠短课即将开放")}><span>02 / EXPLAIN</span><h3>为什么会这样？3 分钟读懂纠缠</h3><b>开始阅读 →</b></button><button className={xMode ? "completed" : ""} onClick={changeGate}><span>03 / FREE PLAY</span><h3>{xMode ? "已经把 H 门换成 X 门" : "试试把 H 门换成 X 门，看看结果怎么变"}</h3><b>{xMode ? "已完成 ✓" : "免登录重跑 →"}</b></button></div></div>
    </section>}
  </main></div>;
}
