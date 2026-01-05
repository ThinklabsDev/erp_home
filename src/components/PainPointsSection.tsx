import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, BarChart3 } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export function PainPointsSection() {
    return (
        <Section className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Thách thức trong quản trị hiện đại</h2>
                    <p className="text-slate-600 text-lg">Doanh nghiệp của bạn có đang gặp phải những vấn đề này?</p>
                </motion.div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: 'Dữ liệu phân tán', desc: 'Thông tin rời rạc, thiếu đồng bộ. Khó truy cập dữ liệu chính xác để ra quyết định.', icon: Layers, delay: 0 },
                    { title: 'Quản lý thủ công', desc: 'Quy trình xử lý chậm, dễ sai sót. Giảm năng suất và hiệu quả vận hành.', icon: Cpu, delay: 0.1 },
                    { title: 'Thiếu báo cáo Realtime', desc: 'Không có dữ liệu tức thời. Bỏ lỡ cơ hội kinh doanh và tăng trưởng.', icon: BarChart3, delay: 0.2 }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: item.delay }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 group cursor-default"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                            <item.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
