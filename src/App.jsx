import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, ArrowRight, Linkedin, Mail, MousePointer2, Layers, Zap, 
  ShieldCheck, Cpu, Code2, LineChart, Globe, Heart, Users, BookOpen, 
  Star, Sparkles, Rocket, Smartphone 
} from 'lucide-react';

// ==========================================
// 1. 全局设计规范 (Global Design System)
// ==========================================
const COLORS = {
  bg: '#F8FAFC',        // 极淡的云灰
  text: '#1E1E3C',      // 深蓝紫
  primary: '#4F46E5',   // 靛青色
  accent: '#F59E0B',    // 活力橙
  secondary: '#10B981', // 薄荷绿
  paper: '#FFFFFF',
  border: '#E2E8F0',
  neon: 'rgba(79, 70, 229, 0.15)',
};

// ==========================================
// 2. 通用装饰组件 (Shared Decorators)
// ==========================================

const WashiTape = ({ rotate = '-2deg', className = "" }) => (
  <div 
    className={`absolute h-8 w-28 bg-indigo-500/20 backdrop-blur-md border-x border-white/30 shadow-sm z-20 ${className}`} 
    style={{ transform: `rotate(${rotate})`, clipPath: 'polygon(0% 0%, 100% 2%, 98% 100%, 2% 98%)' }} 
  />
);

const HandLine = () => (
  <svg viewBox="0 0 100 10" className="w-full h-3 opacity-60" preserveAspectRatio="none">
    <motion.path 
      d="M0,5 Q50,10 100,5" 
      fill="none" 
      stroke={COLORS.accent} 
      strokeWidth="3" 
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.2 }}
    />
  </svg>
);

const Sparkline = ({ color = COLORS.secondary }) => (
  <svg viewBox="0 0 100 30" className="w-16 h-8 opacity-80 overflow-visible">
    <motion.path
      d="M0,25 L20,20 L40,25 L60,10 L80,15 L100,0"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    <circle cx="100" cy="0" r="3" fill={color} />
  </svg>
);

const PaperTexture = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
       style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
  />
);

// ==========================================
// 3. 独立模块: Solo Lab (Project Wanderlust)
// ==========================================

const SOLO_THEME = {
  bg: '#FDF6E3',        // 米色/宣纸色
  ink: '#433422',       // 深褐墨水
  accent: '#D35400',    // 砖红/印泥色
  chart: '#27AE60',     // 生长绿
};

const GrowthPath = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full overflow-visible">
    <line x1="10" y1="10" x2="10" y2="110" stroke={SOLO_THEME.ink} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <line x1="10" y1="110" x2="190" y2="110" stroke={SOLO_THEME.ink} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <motion.path
      d="M10,105 Q30,105 40,100 C60,80 80,90 100,50 C120,10 150,20 190,5"
      fill="none"
      stroke={SOLO_THEME.chart}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.g 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 1.5 }}
    >
      <circle cx="10" cy="105" r="3" fill={SOLO_THEME.ink} />
      <text x="15" y="105" fontSize="8" fill={SOLO_THEME.ink} fontFamily="inherit">Day 1 (20)</text>
      <circle cx="100" cy="50" r="3" fill={SOLO_THEME.accent} />
      <text x="105" y="55" fontSize="8" fill={SOLO_THEME.accent} fontFamily="inherit" fontWeight="bold">Day 3: Viral Hook</text>
      <circle cx="190" cy="5" r="4" fill={SOLO_THEME.chart} />
      <text x="160" y="15" fontSize="10" fill={SOLO_THEME.chart} fontFamily="inherit" fontWeight="bold">Day 5 (500+)</text>
    </motion.g>
  </svg>
);

const HandPhone = ({ images }) => {
  const [active, setActive] = useState(0);
  
  return (
    <div className="relative w-64 h-[480px] mx-auto group">
      <div 
        className="absolute inset-0 border-4 border-slate-800 bg-white overflow-hidden shadow-2xl z-10 transition-transform group-hover:-translate-y-2"
        style={{ borderRadius: '30px 35px 32px 30px', boxShadow: '10px 10px 0px rgba(0,0,0,0.1)' }}
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-100 rounded-full z-20 border border-slate-200" />
        <div className="w-full h-full relative bg-slate-50">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 ${active === idx ? 'block' : 'hidden'}`}
            >
              <img
                src={img}
                alt={`Game screen ${idx + 1}`}
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(0.2)' }}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-2 h-2 rounded-full border border-slate-800 transition-all ${active === idx ? 'bg-slate-800 scale-125' : 'bg-white'}`}
            >
              <span className="sr-only">Screen {idx + 1}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full opacity-80 z-0 animate-pulse" />
    </div>
  );
};

const SoloLab = () => {
  // Game screenshots
  const gameScreens = [
    "/images/game-screens/1.jpg",
    "/images/game-screens/2.jpg",
    "/images/game-screens/3.jpg",
    "/images/game-screens/4.jpg",
  ];

  return (
    <section id="solo-lab" className="py-32 relative overflow-hidden" style={{ backgroundColor: SOLO_THEME.bg, color: SOLO_THEME.ink }}>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-[10px] font-bold uppercase tracking-widest rounded-full border border-orange-200">Solo Lab</span>
              <span className="text-xs font-mono text-slate-400">SIDE PROJECT</span>
            </div>
            <h2 className="text-5xl font-serif font-black tracking-tight text-[#433422]">
              Project: Wanderlust <br/>
              <span className="text-2xl font-normal italic text-slate-500">The 24h Launch Experiment</span>
            </h2>
          </div>
          <div className="flex flex-col items-end">
             <div className="flex items-center gap-2 text-sm font-bold bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                <Sparkles size={16} className="text-purple-500" />
                <span>Powered by AI-Agent & Cursor</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-white/50 blur-3xl rounded-full" />
             <HandPhone images={gameScreens} />
             <div className="absolute -bottom-10 left-10 font-mono text-xs text-slate-400 -rotate-6">
               Ghibli-Game By Ava
             </div>
          </div>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-3xl border-2 border-dashed border-[#D7CCC8] relative">
              <div className="absolute -top-3 left-6 bg-[#FDF6E3] px-2 text-xs font-bold text-[#D35400]">
                VIRAL GROWTH TRAJECTORY
              </div>
              <div className="h-40 w-full">
                <GrowthPath />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Product Hunt Launch', 'WeChat Group Viral', 'AI Agent Ops'].map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded border border-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#E8F5E9] rounded-2xl border border-[#C8E6C9] relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="text-4xl font-black text-[#2E7D32] mb-1">80%</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#1B5E20]">Feedback Fixed</div>
                  <div className="text-xs text-[#388E3C] mt-2">via User Community</div>
                </div>
                <Users className="absolute -bottom-4 -right-4 text-[#A5D6A7] opacity-50 w-24 h-24 group-hover:scale-110 transition" />
              </div>
              <div className="p-6 bg-[#FFF3E0] rounded-2xl border border-[#FFE0B2] relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="text-4xl font-black text-[#EF6C00] mb-1">24h</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#E65100]">Idea to Launch</div>
                  <div className="text-xs text-[#F57C00] mt-2">Agile Dev Cycle</div>
                </div>
                <Rocket className="absolute -bottom-4 -right-4 text-[#FFCC80] opacity-50 w-24 h-24 group-hover:scale-110 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. 主页面组件 (Main Page)
// ==========================================

const Navbar = ({ onResumeClick }) => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 transition-all">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-8">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#1E1E3C] rounded-xl flex items-center justify-center text-white font-serif font-bold italic shadow-lg group-hover:scale-105 transition border-2 border-[#1E1E3C]">A.</div>
          <span className="font-bold text-[#1E1E3C] tracking-tight text-xl">Ava Wang</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#work" className="hover:text-[#4F46E5] transition relative group py-2">Work</a>
          <a href="#solo-lab" className="hover:text-[#4F46E5] transition relative group py-2">Solo Lab</a>
          <a href="#impact" className="hover:text-[#4F46E5] transition relative group py-2">Impact</a>
          <a href="#contact" className="hover:text-[#4F46E5] transition relative group py-2">Contact</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/chilla-ong-0475b8217/?locale=zh" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-[#0077B5] transition hover:bg-slate-50 rounded-full">
          <Linkedin size={20}/>
        </a>
        <button onClick={onResumeClick} className="bg-[#1E1E3C] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#2D2D55] transition shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group">
          <Download size={12} className="group-hover:animate-bounce" /> Resume
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-36 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 min-h-[85vh]">
    <div className="flex-1 space-y-10 relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold border border-indigo-100 shadow-sm ring-1 ring-indigo-500/10">
        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"/>
        Open for new opportunities
      </div>
      <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[1.05] text-[#1E1E3C] tracking-tight">
        Architecting <br/>
        <span className="relative inline-block text-[#4F46E5]">
          Growth.
          <div className="absolute -bottom-2 left-0 w-full"><HandLine /></div>
        </span>
      </h1>
      <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-light">
        A Senior Product Manager combining <strong className="bg-indigo-50 text-[#1E1E3C] font-semibold px-1 rounded">Game Economics</strong> insight with <strong className="bg-blue-50 text-[#1E1E3C] font-semibold px-1 rounded">FinTech Infrastructure</strong> precision.
        <br/><span className="text-sm text-slate-400 mt-4 block font-mono">Based in Hong Kong. Global Perspective.</span>
      </p>
      <div className="flex gap-6 pt-4">
        <button onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-[#1E1E3C] text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-[#2D2D55] transition shadow-2xl shadow-indigo-900/20 group">
          View Showcase <ArrowRight size={18} className="group-hover:translate-x-1 transition"/>
        </button>
      </div>
    </div>
    <div className="flex-1 relative flex justify-center perspective-1000">
      <motion.div 
        initial={{ rotate: 3, opacity: 0, scale: 0.9 }}
        animate={{ rotate: 3, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-80 h-[440px] bg-white p-4 shadow-[20px_20px_60px_rgba(0,0,0,0.1)] rounded-sm border border-slate-100 group hover:rotate-0 transition-all duration-700"
      >
        <div className="w-full h-full bg-slate-100 overflow-hidden relative grayscale-[10%] group-hover:grayscale-0 transition-all duration-700">
          <img 
            src="/images/profile-small.jpg" 
            alt="Ava Wang" 
            className="w-full h-full object-cover"
          />
        </div>
        <WashiTape className="-top-5 left-1/2 -translate-x-1/2" rotate="-2deg" />
        <WashiTape className="-bottom-5 right-10" rotate="85deg" />
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="absolute -right-16 top-20 bg-white text-[#4F46E5] text-xs font-bold font-mono px-4 py-2 rounded-lg shadow-lg rotate-[5deg] border border-indigo-100 z-30 cursor-default"
        >
          Ava sailing on the way ⛵️
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const CaseCard = ({ id, title, subtitle, tags, metrics, blueprint }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-500 overflow-hidden flex flex-col h-full group">
      <div className="p-8 flex-1 flex flex-col relative">
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-100">{t}</span>
            ))}
          </div>
          <span className="text-slate-100 font-black text-6xl leading-none -mt-4 font-serif italic opacity-50 group-hover:text-indigo-50 transition-colors">0{id}</span>
        </div>
        <h3 className="text-2xl font-serif font-bold mb-3 text-[#1E1E3C] group-hover:text-[#4F46E5] transition-colors">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{subtitle}</p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {metrics.map((m, i) => (
            <div key={i} className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <div className="text-xl font-black text-[#1E1E3C] relative z-10">
                  <span className="relative">
                    {m.value}
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-200/50 -z-10 rounded-sm"></span>
                  </span>
                </div>
                {i === 0 && <Sparkles size={14} className="text-amber-400" />}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight flex items-center gap-1">
                {m.label}
                {i === 0 && <Sparkline />} 
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-widest ${isOpen ? 'bg-slate-100 text-slate-600' : 'bg-[#1E1E3C] text-white hover:bg-[#4F46E5] shadow-lg hover:shadow-indigo-500/20'}`}
        >
          {isOpen ? "Close Blueprint" : "Explore Blueprint"} <Layers size={14} />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#1E1E3C] border-t border-white/5 overflow-hidden relative"
          >
             <PaperTexture />
             <div className="p-8 relative z-10">
                <div className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest mb-6 border-b border-white/10 pb-2 flex justify-between">
                  <span>// Logic Architecture v1.0</span>
                  <span>HAND-SKETCHED</span>
                </div>
                <div className="flex flex-col gap-6 relative pl-4">
                   <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-white/10 border-l border-dashed border-white/20" />
                   {blueprint.steps.map((step, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.15 }}
                        className="flex items-center gap-4 relative z-10"
                      >
                       <div className="w-4 h-4 rounded-full bg-indigo-500 border-2 border-[#1E1E3C] shadow-[0_0_0_2px_rgba(79,70,229,0.3)] z-20" />
                       <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/5 text-white/90 text-sm font-medium backdrop-blur-sm flex-1">
                         {step}
                       </div>
                     </motion.div>
                   ))}
                </div>
                <div className="mt-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20 text-amber-200/80 text-xs italic leading-relaxed font-serif">
                   <span className="font-bold not-italic text-amber-500 mr-2">AVA'S NOTE:</span>
                   "{blueprint.insight}"
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ImpactSection = () => (
  <section id="impact" className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-20">
        <h2 className="text-5xl font-serif font-medium mb-6 text-[#1E1E3C]">Life & <span className="text-[#4F46E5] italic">Impact.</span></h2>
        <p className="text-slate-500 max-w-xl text-lg">Beyond product metrics, I focus on empowering people and solving real-world complexities.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><BookOpen size={20}/></div>
            <h3 className="text-xl font-bold">The Foundation</h3>
          </div>
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-colors">
            <h4 className="font-bold text-lg mb-1">HUST (985/211)</h4>
            <div className="text-sm text-slate-500 mb-4">Energy & Power Engineering</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600">CS Minor</span>
              <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600">Project Mgmt</span>
            </div>
          </div>
          <div className="p-6 bg-green-50 rounded-3xl border border-green-100 relative group hover:shadow-lg transition-all">
            <div className="absolute top-4 right-4 text-green-200 group-hover:text-green-300 transition-colors"><Heart size={40} /></div>
            <h4 className="font-bold text-lg mb-2 text-green-900">Social Responsibility</h4>
            <p className="text-sm text-green-800/80 leading-relaxed mb-3 relative z-10">
              Led a university volunteer team to build classrooms in <strong className="text-green-900 border-b border-green-400">Enshi mountainous areas</strong>. Empowering rural education through infrastructure.
            </p>
            <div className="text-xs font-bold text-green-700 uppercase tracking-widest mt-4">#Altruism</div>
          </div>
        </div>
        <div className="md:col-span-2 bg-[#1E1E3C] text-white rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-between group">
          <PaperTexture />
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
            <Users size={200} />
          </div>
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-indigo-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Leadership</div>
            <h3 className="text-4xl font-serif mb-6">The Multiplier.</h3>
            <p className="text-slate-300 max-w-lg leading-relaxed text-lg">
              I believe in open-sourcing knowledge. I've mentored <span className="text-white font-bold border-b-2 border-indigo-500 pb-0.5">10+ individuals</span> to land core positions in Big Tech firms by reconstructing their product thinking.
            </p>
          </div>
          <div className="mt-12 flex gap-4 relative z-10">
            <div className="flex-1 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl font-black text-indigo-400 mb-2">10+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Big Tech Offers</div>
            </div>
            <div className="flex-1 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl font-black text-indigo-400 mb-2">High</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Impact Energy</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 border-t border-slate-100 pt-12">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
          <MousePointer2 size={12}/> Recent Thinking
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="#" className="group block p-8 bg-white border border-slate-200 hover:border-indigo-500 rounded-2xl transition-all hover:shadow-lg shadow-indigo-100/50">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase">Blog</span>
              <ArrowRight size={18} className="text-slate-300 group-hover:text-indigo-600 transition -rotate-45 group-hover:rotate-0" />
            </div>
            <h5 className="text-2xl font-serif font-bold text-slate-800 group-hover:text-indigo-600 transition mb-3">How Gaming Economics Shapes Fintech</h5>
            <p className="text-sm text-slate-500 leading-relaxed">Applying inflation control, sinks, and faucets from MMORPGs to real-world financial loyalty systems.</p>
          </a>
          <a href="#" className="group block p-8 bg-white border border-slate-200 hover:border-indigo-500 rounded-2xl transition-all hover:shadow-lg shadow-indigo-100/50">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase">Guide</span>
              <ArrowRight size={18} className="text-slate-300 group-hover:text-indigo-600 transition -rotate-45 group-hover:rotate-0" />
            </div>
            <h5 className="text-2xl font-serif font-bold text-slate-800 group-hover:text-indigo-600 transition mb-3">The PM Guide to TTPS in HK</h5>
            <p className="text-sm text-slate-500 leading-relaxed">A systematic breakdown of the visa process, treated like a product launch with clear milestones.</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-slate-50 border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-10 justify-center">
        <Heart size={20} className="text-red-500 fill-red-500 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Loved by Colleagues & Mentees</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative group hover:-translate-y-1 transition-transform">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-2xl"/>
          <p className="text-slate-600 italic mb-6 leading-relaxed">"Professional, execution-driven, and incredibly reliable partner. Ava bridges the gap between complex compliance and smooth user experience seamlessly."</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">LI</div>
            <div>
              <div className="font-bold text-slate-900 text-sm">LinkedIn Recommendation</div>
              <div className="text-xs text-slate-400">Former Colleague</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative group hover:-translate-y-1 transition-transform">
          <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 rounded-l-2xl"/>
          <p className="text-slate-600 italic mb-6 leading-relaxed">"The strongest career assist I've ever had. Ava doesn't just review resumes; she reconstructs your product thinking logic."</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">ST</div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Mentee Feedback</div>
              <div className="text-xs text-slate-400">Landed Offer at Big Tech</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordSubmit = () => {
    if (password === '0821ava') {
      // Correct password - open resume in new tab for preview
      window.open('/resume/UserPM_Gamefication_growth.pdf', '_blank', 'noopener,noreferrer');

      // Close modal and reset
      setShowPasswordModal(false);
      setPassword('');
      setPasswordError('');
    } else {
      // Wrong password
      setPasswordError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

    const handleEmailClick = () => {
      window.location.href = 'mailto:avawang821@gmail.com';
      setShowEmailModal(true);
    };
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-indigo-100 text-[#1E1E3C] overflow-x-hidden">
      <Navbar onResumeClick={() => setShowPasswordModal(true)} />
      <main>
        <Hero />
        
        {/* Logo Wall */}
        <section className="py-12 border-y border-slate-200/60 bg-white/50">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               <h3 className="font-black text-xl tracking-tighter hover:text-[#FF9900] transition-colors cursor-default">ALIBABA</h3>
               <h3 className="font-black text-xl tracking-tighter hover:text-[#002D72] transition-colors cursor-default">FUTU</h3>
               <h3 className="font-black text-xl tracking-tighter hover:text-[#E60012] transition-colors cursor-default">KINGSOFT</h3>
               <h3 className="font-black text-xl tracking-tighter hover:text-[#000000] transition-colors cursor-default">ZEAL</h3>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-32 max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-5xl font-serif font-medium mb-4 text-[#1E1E3C]">Selected <span className="text-[#4F46E5] italic">Showcase.</span></h2>
              <p className="text-slate-500 max-w-lg">Four key projects demonstrating the convergence of growth and infrastructure.</p>
            </div>
            <div className="text-right hidden md:block">
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Impact</div>
               <div className="font-mono text-xs text-slate-600">90% Conv. • 0 Errors • +200% Rev</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseCard 
              id={1}
              title="Zeal Global Infra"
              subtitle="Multi-entity user center & compliance routing for global expansion."
              tags={["Compliance", "Backend"]}
              metrics={[{label: "Compliance", value: "100%"}, {label: "Verifications", value: "+30%"}]}
              blueprint={{
                steps: ["User Residency Check", "Dynamic License Routing", "FCA/SFC Rules Engine", "Entity Assignment"],
                insight: "The challenge was ensuring strict regulatory isolation while maintaining a unified user experience."
              }}
            />
            <CaseCard 
              id={2}
              title="Futu Malaysia 0-1"
              subtitle="High-speed onboarding engine for SEA market penetration."
              tags={["Growth", "0-1"]}
              metrics={[{label: "Conversion", value: "90%"}, {label: "Speed", value: "-50%"}]}
              blueprint={{
                steps: ["User Input", "Local Reg Check", "eKYC & AML Screening", "Bank API Integration", "Auto Activation"],
                insight: "We parallelized the KYC and AML processes to reduce wait times by half."
              }}
            />
            <CaseCard 
              id={3}
              title="Taobao Tokenomics"
              subtitle="Gamified incentive system balancing liquidity and inflation."
              tags={["Web2 Scale", "Economy"]}
              metrics={[{label: "Task Completion", value: "+40%"}, {label: "ROI Boost", value: "+25%"}]}
              blueprint={{
                steps: ["Task Definition", "Token Minting", "Liquidity Control", "Sink/Burn Mech", "Reward Dist."],
                insight: "Applying macro-economic principles to user behavior to prevent point inflation."
              }}
            />
            <CaseCard 
              id={4}
              title="Seasun Game Economy"
              subtitle="Anti-inflation auction system driving revenue through scarcity."
              tags={["Monetization", "Psychology"]}
              metrics={[{label: "Revenue", value: "+200%"}, {label: "Penetration", value: "40%"}]}
              blueprint={{
                steps: ["Scarcity Modeling", "Auction Logic", "Dynamic Recycling", "LTV Optimization"],
                insight: "Using scarcity psychology to drive higher engagement from high-net-worth users."
              }}
            />
          </div>
        </section>

        {/* 独立实验室模块 */}
        <SoloLab />

        <ImpactSection />
        <Testimonials />

        {/* Footer */}
        <footer id="contact" className="py-24 bg-[#1E1E3C] text-white px-6 mt-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-serif italic mb-4">Let's build something scalable.</h2>
              <div className="text-4xl font-serif italic text-white/80">Learn in public.</div>
            </div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/chilla-ong-0475b8217/?locale=zh" target="_blank" rel="noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-indigo-600 transition"><Linkedin /></a>
              <button onClick={() => setShowEmailModal(true)} className="p-4 bg-white/10 rounded-2xl hover:bg-indigo-600 transition cursor-pointer"><Mail /></button>
            </div>
          </div>
          <div className="text-center text-slate-500 text-xs mt-20 font-mono flex justify-center gap-8">
            <span>© 2026 AVA WANG</span>
            <span>DESIGNED WITH LOGIC & PASSION</span>
          </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;600;800&family=Architects+Daughter&display=swap');
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-hand { font-family: 'Architects Daughter', cursive; }
        .perspective-1000 { perspective: 1000px; }
      `}} />

      {/* Email Modal */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowEmailModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white p-8 rounded-3xl max-w-md w-full relative cursor-default"
              style={{ 
                boxShadow: '8px 8px 0px rgba(79, 70, 229, 0.3)',
                border: '2px solid #1E1E3C'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Washi Tape */}
              <div className="absolute top-0 left-1/4 w-20 h-6 bg-yellow-200/50 -translate-y-1/2 transform rotate-12"></div>
              <div className="absolute top-0 right-1/4 w-20 h-6 bg-indigo-200/50 -translate-y-1/2 transform -rotate-12"></div>
              
              {/* Hand-drawn Header */}
              <h3 className="font-hand text-2xl font-bold mb-6 text-center text-[#1E1E3C]">
                Let's Stay in Touch!
              </h3>
              
              {/* Hand-drawn Divider */}
              <div className="w-full h-2 mb-6 relative overflow-hidden">
                <svg viewBox="0 0 400 10" className="w-full h-full">
                  <path 
                    d="M0,5 Q50,2 100,5 Q150,8 200,5 Q250,2 300,5 Q350,8 400,5" 
                    fill="none" 
                    stroke="#4F46E5" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              {/* Email Content */}
              <div className="text-center space-y-4 mb-8">
                <p className="text-slate-600 leading-relaxed font-medium">
                  Feel free to reach out anytime. I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="bg-indigo-50 p-4 rounded-xl border-2 border-dashed border-indigo-200">
                  <a href="mailto:avawang821@gmail.com" className="font-hand text-xl font-bold text-indigo-800 hover:text-indigo-600 transition-colors">
                    avawang821@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setShowEmailModal(false)}
                className="w-full bg-[#1E1E3C] text-white py-3 rounded-xl font-bold hover:bg-[#2D2D55] transition shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 group"
              >
                Got it! Let's Connect
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowPasswordModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white p-8 rounded-3xl max-w-md w-full relative cursor-default"
              style={{ 
                boxShadow: '8px 8px 0px rgba(79, 70, 229, 0.3)',
                border: '2px solid #1E1E3C'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Washi Tape */}
              <div className="absolute top-0 left-1/4 w-20 h-6 bg-yellow-200/50 -translate-y-1/2 transform rotate-12"></div>
              <div className="absolute top-0 right-1/4 w-20 h-6 bg-indigo-200/50 -translate-y-1/2 transform -rotate-12"></div>
              
              {/* Hand-drawn Header */}
              <h3 className="font-hand text-2xl font-bold mb-6 text-center text-[#1E1E3C]">
                Resume Access
              </h3>
              
              {/* Hand-drawn Divider */}
              <div className="w-full h-2 mb-6 relative overflow-hidden">
                <svg viewBox="0 0 400 10" className="w-full h-full">
                  <path 
                    d="M0,5 Q50,2 100,5 Q150,8 200,5 Q250,2 300,5 Q350,8 400,5" 
                    fill="none" 
                    stroke="#4F46E5" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              {/* Password Input */}
              <div className="space-y-4 mb-8">
                <p className="text-slate-600 leading-relaxed font-medium text-center">
                  Please enter the password to access my resume.
                </p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password..."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-center font-mono"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handlePasswordSubmit();
                    }
                  }}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm text-center font-medium">
                    {passwordError}
                  </p>
                )}
              </div>
              
              {/* Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-200 transition"
                >
                  Cancel
                </button>
                <button 
                  onClick={handlePasswordSubmit}
                  className="flex-1 bg-[#1E1E3C] text-white py-3 rounded-xl font-bold hover:bg-[#2D2D55] transition shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 group"
                >
                  <Download size={14} className="group-hover:animate-bounce" /> Access
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;