import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quafu 量子计算云平台｜运行你的第一条量子线路",
  description: "无需安装、无需注册，在浏览器中运行第一条量子线路，并探索真实量子处理器。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Quafu｜你的第一条量子线路，已经写好了。",
    description: "3 分钟 · 免安装 · 免注册",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Quafu 贝尔态量子线路与概率分布" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
