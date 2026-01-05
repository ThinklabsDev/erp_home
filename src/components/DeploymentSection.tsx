import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Check, Database } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export function DeploymentSection() {
    return (
        <Section className="bg-slate-50">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Lựa chọn triển khai linh hoạt</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-indigo-500 transition-colors relative overflow-hidden shadow-sm"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Globe size={20} className="text-indigo-600" /> Cloud (SaaS)
                    </h3>
                    <p className="text-slate-500 text-sm mb-6">Dành cho doanh nghiệp vừa & nhỏ (SMEs)</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500" /> Chi phí đầu tư ban đầu thấp</li>
                        <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500" /> Sao lưu dữ liệu tự động</li>
                        <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500" /> Linh hoạt mở rộng user</li>
                    </ul>
                    <button className="w-full py-2 bg-indigo-50 text-indigo-700 font-medium rounded-lg hover:bg-indigo-100">Chọn Cloud</button>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-400 transition-colors relative overflow-hidden shadow-sm"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-600"></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Database size={20} className="text-slate-700" /> On-Premise
                    </h3>
                    <p className="text-slate-500 text-sm mb-6">Dành cho Tập đoàn & Nhà nước</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500" /> Kiểm soát dữ liệu tuyệt đối</li>
                        <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500" /> Hạ tầng server riêng biệt</li>
                        <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500" /> Tùy chỉnh tính năng sâu</li>
                    </ul>
                    <button className="w-full py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-100">Liên hệ báo giá</button>
                </motion.div>
            </div>
        </Section>
    );
}
