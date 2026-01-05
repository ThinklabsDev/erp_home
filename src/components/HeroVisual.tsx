import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const HeroVisual = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto w-full max-w-6xl"
    >
      {/* Decorative Glow Effects behind the visual */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Container - Designed to look like a browser window or high-end display */}
      <div className="relative rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm shadow-2xl shadow-indigo-500/10 overflow-hidden">
        
        {/* Browser/App Header Bar */}
        <div className="h-10 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center px-4 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <div className="w-3 h-3 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full border border-slate-200">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-medium text-slate-500">tERP Live Demo</span>
          </div>
        </div>

        {/* Video/Image Content Area */}
        <div className="relative aspect-video  group cursor-pointer overflow-hidden">
            {/* 
                TODO: Replace 'poster' and 'src' with your actual marketing assets.
                Using a placeholder gradient and text for now to represent the "Video/Image" area.
            */}
            <div className="absolute inset-0  flex items-center justify-center">
                 {/* Placeholder Content - Replace this div with your <video> or <img> tag */}
                 <div className="text-center">
                    <video
                      src="/videos/banner.mp4"
                      className="absolute inset-0 w-full h-full object-cover  transition-transform duration-700 "
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-slate-900/10  transition-colors" />
                    
                    {/* Play Button Overlay (visual only since video autoplays muted) */}
                    {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <Play className="ml-1 text-indigo-600 fill-indigo-600" size={24} />
                            </div>
                        </div>
                    </div> */}
                 </div>
            </div>
            
            {/* Floating Badges (Decorations) */}
              {/* <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-6 right-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 max-w-[180px]"
              >
                <div className="text-xs text-slate-500 mb-1">Doanh thu Q3</div>
                <div className="text-lg font-bold text-indigo-600">+128.5% 📈</div>
              </motion.div> */}

            {/* <motion.div 
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 1.2, duration: 0.5 }}
               className="absolute bottom-6 left-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
            >
               <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white" />
                 <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white" />
                 <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white" />
               </div>
               <div>
                 <div className="text-xs font-bold text-slate-800">Team Active</div>
                 <div className="text-[10px] text-emerald-600">Online now</div>
               </div>
            </motion.div> */}
        </div>
        
        {/* Caption for Credibility */}
        {/* <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 text-center">
           <p className="text-[10px] text-slate-400 uppercase tracking-wide">Hình ảnh mô phỏng giao diện hệ thống tERP trên môi trường Desktop</p>
        </div> */}
      </div>
    </motion.div>
  );
};
