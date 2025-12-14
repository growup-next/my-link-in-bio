import React, { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Globe, 
  MessageCircle, 
  Share2, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

// SNSやWebサイトのデータ定義
const LINKS = [
  {
    id: 'fb-personal',
    title: 'Facebook (個人)',
    url: 'https://www.facebook.com/kyo.miyagi',
    icon: Facebook,
    description: 'Kyo Miyagi',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10',
    borderColor: 'hover:border-blue-500/50'
  },
  {
    id: 'fb-page',
    title: 'Facebook (Page)',
    url: 'https://www.facebook.com/growup.next.jp',
    icon: Facebook,
    description: 'GrowUp Next',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10',
    borderColor: 'hover:border-blue-500/50'
  },
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/growup_next.jp/',
    icon: Instagram,
    description: '@growup_next.jp',
    color: 'hover:text-pink-400',
    bgColor: 'hover:bg-pink-500/10',
    borderColor: 'hover:border-pink-500/50'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kyo-miyagi/',
    icon: Linkedin,
    description: 'Kyo Miyagi',
    color: 'hover:text-blue-300',
    bgColor: 'hover:bg-blue-400/10',
    borderColor: 'hover:border-blue-400/50'
  },
  {
    id: 'line',
    title: 'LINE 公式',
    url: 'https://line.me/ti/p/5uRNX1dctZ',
    icon: MessageCircle,
    description: 'お問い合わせはこちら',
    color: 'hover:text-green-400',
    bgColor: 'hover:bg-green-500/10',
    borderColor: 'hover:border-green-500/50'
  },
  {
    id: 'corp-site',
    title: 'GrowUp Next',
    url: 'https://growup-next.com/',
    icon: Globe,
    description: 'Corporate Website',
    color: 'hover:text-cyan-400',
    bgColor: 'hover:bg-cyan-500/10',
    borderColor: 'hover:border-cyan-500/50'
  },
  {
    id: 'personal-site',
    title: 'Personal Website',
    url: 'https://kyo.miyagi.jp/',
    icon: Globe,
    description: 'kyo.miyagi.jp',
    color: 'hover:text-purple-400',
    bgColor: 'hover:bg-purple-500/10',
    borderColor: 'hover:border-purple-500/50'
  },
];

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    // 実際のURLをクリップボードにコピーするシミュレーション
    const url = "https://your-vercel-project.vercel.app";
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* 背景の装飾（グラデーションのぼかし） */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-md mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* プロフィールセクション */}
        <div className="flex flex-col items-center mb-10 text-center animate-fade-in-up">
          <div className="relative w-28 h-28 mb-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-sm opacity-70 animate-pulse"></div>
            {/* プロフィール画像 */}
            <div className="relative w-full h-full rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center overflow-hidden">
               <img 
                 src="Kyo Miyag2i.jpg" 
                 alt="Kyo Miyagi" 
                 className="w-full h-full object-cover" 
               />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-white tracking-wide mb-3">
            宮城 京（Kyo Miyagi）
          </h1>

          {/* ロゴ画像 */}
          <div className="mb-4 w-48">
            <img 
              src="GROW UP NEXT logo type.png" 
              alt="GrowUp Next Logo" 
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>

          <p className="text-slate-400 text-sm mb-4 max-w-xs">
            GrowUp Next 代表 | Digital Creator
            <br />
            テクノロジーで未来をデザインする
          </p>

          <div className="flex gap-4">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              {copied ? <Check size={14} /> : <Share2 size={14} />}
              {copied ? 'Copied!' : 'Share'}
            </button>
          </div>
        </div>

        {/* リンク一覧セクション */}
        <div className="w-full flex flex-col gap-4">
          {LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative flex items-center p-4 rounded-xl
                  bg-slate-900/50 border border-slate-800
                  backdrop-blur-sm transition-all duration-300
                  hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/10
                  ${link.borderColor} ${link.bgColor}
                `}
                style={{
                  animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
                  opacity: 0 // アニメーション用初期状態
                }}
              >
                <div className={`
                  p-3 rounded-full bg-slate-800/80 text-slate-300 
                  transition-colors group-hover:bg-slate-800 group-hover:text-white
                  ${link.color}
                `}>
                  <Icon size={20} />
                </div>
                
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                    {link.description}
                  </p>
                </div>

                <div className="text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all">
                  <ExternalLink size={16} />
                </div>
              </a>
            );
          })}
        </div>

        {/* フッター */}
        <footer className="mt-16 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} GrowUp Next. All Rights Reserved.
          </p>
        </footer>
      </div>

      {/* カスタムアニメーション用のスタイル定義 */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}