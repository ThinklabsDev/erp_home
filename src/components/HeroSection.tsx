import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeroVisual } from '@/components/HeroVisual';

export function HeroSection() {
    return (
        <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-slate-50/50">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent"></div>
            </div>

            <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Hero Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-6 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                            Phiên bản Enterprise 2.0
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight"
                        >
                            Hệ thống Quản trị <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Doanh nghiệp tERP</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-sm text-indigo-600 mb-8 max-w-lg"
                        >
                            Giảm chi phí vận hành — Tăng tốc ra quyết định — Kiểm soát toàn doanh nghiệp trên một nền tảng.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg"
                        >
                            Phát triển bởi ThinkLabs. Giải pháp quản trị tổng thể giúp doanh nghiệp vận hành hiệu quả, đồng bộ và thông minh trong kỷ nguyên số.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="px-6 py-3.5 bg-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                Khám phá tính năng <ArrowRight size={18} />
                            </button>
                            <button className="px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                Liên hệ tư vấn
                            </button>
                        </motion.div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative">
                        <HeroVisual />
                    </div>

                </div>
            </div>
        </section>
    );
}
