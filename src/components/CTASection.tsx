import React from 'react';
import { Section } from '@/components/ui/Section';

export function CTASection() {
    return (
        <Section className="bg-white">
            <div className="bg-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">tERP — Nền tảng quản trị dành cho doanh nghiệp đang mở rộng</h2>
                    <p className="text-indigo-100 mb-8 text-lg">Trao đổi trực tiếp với đội ngũ ThinkLabs để đánh giá hiện trạng, kiến trúc hệ thống và lộ trình triển khai phù hợp cho doanh nghiệp của bạn.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-indigo-800 font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/10">Nhận tư vấn triển khai tERP</button>
                        <button className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">Trao đổi kiến trúc & Demo hệ thống</button>
                    </div>
                    <p className="mt-4 text-sm text-indigo-200/80">
                        Hotline: <span className="font-semibold text-white">0944 488 868</span> • Email: sales@thinklabs.vn
                    </p>
                </div>
            </div>
        </Section>
    );
}
