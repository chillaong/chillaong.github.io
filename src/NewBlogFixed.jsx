import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, ArrowRight, Linkedin, Mail, MousePointer2, Layers, 
  Heart, Users, BookOpen, Sparkles, Rocket 
} from 'lucide-react';

// 只复制部分内容来测试
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 transition-all">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-8">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#1E1E3C] rounded-xl flex items-center justify-center text-white font-serif font-bold italic shadow-lg group-hover:scale-105 transition border-2 border-[#1E1E3C]">A.</div>
          <span className="font-bold text-[#1E1E3C] tracking-tight text-xl">Ava Wang</span>
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-36 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 min-h-[85vh]">
    <div className="flex-1 space-y-10 relative z-10">
      <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[1.05] text-[#1E1E3C] tracking-tight">
        Architecting <br/>
        <span className="relative inline-block text-[#4F46E5]">
          Growth.
        </span>
      </h1>
    </div>
  </section>
);

const NewBlogFixed = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-indigo-100 text-[100px] overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default NewBlogFixed;