'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const MODULES = [
  {
    id: 'crm',
    label: 'BASE CRM',
    title: 'Đồng bộ hành trình khách hàng, từ bán hàng đến hậu mãi',
    bullets: [
      'Quản lý pipeline & sản phẩm',
      'Tự động hóa báo giá, hợp đồng',
      'Chăm sóc sau bán: ticket, feedback, upsell'
    ],
    tags: ['Base Marketing', 'Base Product', 'Base Sales'],
    image: '/images/crm-dashboard.png' // Placeholder
  },
  {
    id: 'hrm',
    label: 'BASE HRM',
    title: 'Quản trị nhân sự toàn diện & Tự động hóa lương thưởng',
    bullets: [
      'Hồ sơ nhân sự số hóa tập trung',
      'Chấm công GPS & FaceID thông minh',
      'Tính lương tự động đa chiều'
    ],
    tags: ['Base HRM', 'Base Goal', 'Base Payroll'],
    image: '/images/hrm-dashboard.png' // Placeholder
  },
  {
    id: 'project',
    label: 'BASE WORK',
    title: 'Quản lý công việc & Dự án theo thời gian thực',
    bullets: [
      'Theo dõi tiến độ & Gantt Chart',
      'Phân bổ nguồn lực hiệu quả',
      'Báo cáo hiệu suất tự động'
    ],
    tags: ['Base Wework', 'Base Request', 'Base Workflow'],
    image: '/images/project-dashboard.png' // Placeholder
  },
  {
    id: 'recruitment',
    label: 'BASE E-HIRING',
    title: 'Hệ thống quản trị tuyển dụng thông minh',
    bullets: [
      'Xây dựng Talent Pool chất lượng',
      'Quy trình phỏng vấn chuẩn hóa',
      'Onboarding tự động cho nhân viên mới'
    ],
    tags: ['Base E-Hiring', 'Base Talent'],
    image: '/images/recruitment-dashboard.png' // Placeholder
  },
  {
    id: 'asset',
    label: 'BASE ASSET',
    title: 'Quản lý vòng đời tài sản doanh nghiệp',
    bullets: [
      'Cấp phát & Thu hồi tài sản',
      'Tính khấu hao tự động',
      'Lịch bảo trì & bảo dưỡng định kỳ'
    ],
    tags: ['Base Asset', 'Base Warehouse'],
    image: '/images/asset-dashboard.png' // Placeholder
  },
  {
    id: 'office',
    label: 'BASE OFFICE',
    title: 'Văn phòng số & Truyền thông nội bộ',
    bullets: [
      'Cổng thông tin nội bộ (Intranet)',
      'Quản lý công văn & văn bản',
      'Quy trình phê duyệt không giấy tờ'
    ],
    tags: ['Base Inside', 'Base Office', 'Base Sign'],
    image: '/images/office-dashboard.png' // Placeholder
  }
];

export function ModulesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // 6s auto slide
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % MODULES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + MODULES.length) % MODULES.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentModule = MODULES[currentIndex];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      <div className="relative min-h-[700px] md:min-h-[700px] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 40 },
              opacity: { duration: 0.3 }
            }}
            className="absolute inset-0 w-full h-full grid md:grid-cols-2"
          >
            {/* Left Column: Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center h-full bg-white z-10">
              <span className="inline-block text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                {currentModule.label}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {currentModule.title}
              </h3>
              
              <ul className="space-y-4 mb-8">
                {currentModule.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-indigo-600" />
                    </div>
                    <span className="text-slate-600 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {currentModule.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                  Xem chi tiết <ArrowRight size={16} />
                </button>
                <button className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                  Demo tính năng
                </button>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="relative h-full bg-slate-100 flex items-center justify-center overflow-hidden">
              {/* Placeholder for Backend-driven Media */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                 {/* In a real implementation, this would be an <img /> or <video /> from CMS */}
                 <div className="text-center p-8">
                    <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-indigo-600 font-bold text-2xl">{currentModule.label.split(' ')[1]?.[0] || 'M'}</span>
                    </div>
                    <p className="text-slate-500 font-medium">UI Dashboard Preview</p>
                    <p className="text-slate-400 text-sm mt-2">{currentModule.label}</p>
                 </div>
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-indigo-900/5 mix-blend-overlay pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-20">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-600 hover:bg-white hover:text-indigo-600 transition-all shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-600 hover:bg-white hover:text-indigo-600 transition-all shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
