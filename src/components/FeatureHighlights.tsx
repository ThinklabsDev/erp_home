import React from 'react';
import { motion } from 'framer-motion';
import { Users, Check, BarChart3, Briefcase, FolderKanban } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { HRMockup, SalesMockup, KanbanMockup } from '@/components/Mockups';

export function FeatureHighlights() {
    return (
        <Section className="bg-white space-y-24 md:space-y-32">
            {/* Block A: HR */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                    <div className="absolute inset-0 bg-indigo-50 rounded-3xl transform rotate-7 scale-95 z-0"></div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <HRMockup />
                    </motion.div>
                </div>
                <div className="order-1 md:order-2 md:pl-12">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                        <Users size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Quản trị Nhân sự & <br />Tự động hóa</h2>
                    <ul className="space-y-4">
                        {[
                            'Báo cáo nhân sự realtime (Cơ cấu, Kỹ năng).',
                            'Cảnh báo nhân viên sắp hết hạn hợp đồng.',
                            'Quy trình duyệt phép online 3 bước.'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Block B: Sales & Project */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-12">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                        <BarChart3 size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Tối ưu Doanh thu & <br />Quản lý Dự án</h2>
                    <ul className="space-y-4">
                        {[
                            'Theo dõi KPI cá nhân & nhóm theo thời gian thực.',
                            'Quản lý phễu khách hàng (Sales Pipeline).',
                            'Kiểm soát chi phí và tiến độ dự án (Gantt Chart).'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-50 rounded-3xl transform -rotate-3 scale-95 z-0"></div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <SalesMockup />
                    </motion.div>
                </div>
            </div>

            {/* Block C: Recruitment & Assets */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <motion.div whileHover={{ y: -5 }}>
                        <KanbanMockup />
                    </motion.div>
                </div>
                <div className="order-1 md:order-2 md:pl-12">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                        <Briefcase size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Tuyển dụng thông minh & <br />Quản lý tài sản</h2>
                    <ul className="space-y-4">
                        {[
                            'Kéo thả trạng thái CV ứng viên (Kanban board).',
                            'Gửi email phỏng vấn tự động.',
                            'Cấp phát tài sản trực tiếp trên hệ thống.'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Block D: Project & Task Management */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-12">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                        <FolderKanban size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Quản lý Công việc & <br />Tiến độ đa dự án</h2>
                    <ul className="space-y-4">
                        {[
                            'Giao việc và nhắc nhở tự động qua Telegram/Zalo.',
                            'Báo cáo tiến độ đa cấp: Công ty > Phòng ban > Cá nhân.',
                            'Lưu trữ tài liệu dự án tập trung, an toàn.'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-50 rounded-3xl transform rotate-2 scale-95 z-0"></div>
                    <div className="relative z-10 bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                        <div className="space-y-3">
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-bold text-slate-700">Sprint Backlog</span>
                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Active</span>
                            </div>
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                                    <div className="flex-1">
                                        <div className="h-2 w-3/4 bg-slate-200 rounded mb-1"></div>
                                        <div className="h-1.5 w-1/2 bg-slate-100 rounded"></div>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
