export const devices = [
  { name: "Baihua", status: "在线", cls: "online", qubits: "136", readout: "1.2%", gate: "0.9%", t1: "46 μs" },
  { name: "Dongling", status: "在线", cls: "online", qubits: "66", readout: "2.3%", gate: "1.1%", t1: "38 μs" },
  { name: "Shenglian", status: "在线", cls: "online", qubits: "24", readout: "1.8%", gate: "0.7%", t1: "52 μs" },
  { name: "Hongluo", status: "维护中", cls: "maintenance", qubits: "10", readout: "—", gate: "—", t1: "—" },
  { name: "Ling", status: "校准中", cls: "calibrating", qubits: "18", readout: "—", gate: "—", t1: "—" },
];

export const research = [
  ["01", "新材料，先算后做", "造出来之前，先算出一种材料的性质。第一个跑通的例子：一种拓扑材料的相变。", "VQE · 12 QUBITS"],
  ["02", "分子与药物", "化学键的本质是量子的——所以量子计算机算分子，是用它自己的语言。", "MOLECULAR ENERGY"],
  ["03", "优化与调度", "从物流路线到电网调度，在天文数字的方案里挑最好的一个。", "QAOA · OPTIMIZATION"],
  ["04", "随机的世界", "金融风险、天气、粒子——凡是靠掷骰子模拟的，量子有它的算法。", "MONTE CARLO"],
];

export const nav = [
  ["#devices", "产品"], ["#learn", "学习"], ["#dev", "开发者"], ["#research", "研究"], ["#community", "社区"], ["#dev", "文档"],
];
