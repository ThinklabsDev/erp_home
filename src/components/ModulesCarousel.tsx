'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Shield, Workflow, Database, History } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const MODULES = [
  {
    id: 'crm',
    label: 'BASE CRM',
    badge: 'Phổ biến',
    title: 'Đồng bộ hành trình khách hàng, từ bán hàng đến hậu mãi',
    bullets: [
      'Quản lý Pipeline & Danh mục sản phẩm',
      'Tự động hóa báo giá, hợp đồng',
      'Chăm sóc sau bán: Ticket, Feedback, Upsell'
    ],
    tags: ['Base Marketing', 'Base Product', 'Base Sales'],
    image: '/images/crm-dashboard.png'
  },
  {
    id: 'hrm',
    label: 'BASE HRM',
    badge: 'Hệ thống lõi',
    title: 'Quản trị nhân sự toàn diện & Tự động hóa lương thưởng',
    bullets: [
      'Hồ sơ nhân sự số hóa tập trung',
      'Chấm công GPS & FaceID thông minh',
      'Tính lương tự động đa chiều'
    ],
    tags: ['Base HRM', 'Base Goal', 'Base Payroll'],
    image: '/image/carousel.webp'
  },
  {
    id: 'project',
    label: 'BASE WORK',
    badge: 'Sẵn sàng triển khai',
    title: 'Quản lý công việc & Dự án theo thời gian thực',
    bullets: [
      'Theo dõi tiến độ & Gantt Chart',
      'Phân bổ nguồn lực hiệu quả',
      'Báo cáo hiệu suất tự động'
    ],
    tags: ['Base Wework', 'Base Request', 'Base Workflow'],
    image: '/images/project-dashboard.png'
  },
  {
    id: 'recruitment',
    label: 'BASE E-HIRING',
    badge: 'Sử dụng nhiều',
    title: 'Hệ thống quản trị tuyển dụng thông minh',
    bullets: [
      'Xây dựng Talent Pool chất lượng',
      'Quy trình phỏng vấn chuẩn hóa',
      'Onboarding tự động cho nhân viên mới'
    ],
    tags: ['Base E-Hiring', 'Base Talent'],
    image: '/images/recruitment-dashboard.png'
  },
  {
    id: 'asset',
    label: 'BASE ASSET',
    badge: 'Chuyên sâu',
    title: 'Quản lý vòng đời tài sản doanh nghiệp',
    bullets: [
      'Cấp phát & Thu hồi tài sản',
      'Tính khấu hao tự động',
      'Lịch bảo trì & bảo dưỡng định kỳ'
    ],
    tags: ['Base Asset', 'Base Warehouse'],
    image: '/images/asset-dashboard.png'
  },
  {
    id: 'office',
    label: 'BASE OFFICE',
    badge: 'Hệ thống lõi',
    title: 'Văn phòng số & Truyền thông nội bộ',
    bullets: [
      'Cổng thông tin nội bộ (Intranet)',
      'Quản lý công văn & văn bản số',
      'Quy trình phê duyệt không giấy tờ'
    ],
    tags: ['Base Inside', 'Base Office', 'Base Sign'],
    image: '/images/office-dashboard.png'
  }
];

export function ModulesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play logic
  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section className="py-16 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nền tảng tERP được cấu thành từ các Hệ thống lõi</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">Mỗi phân hệ là một khối vận hành độc lập, được liên kết trên cùng một nền tảng dữ liệu.</p>

          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-6 px-4 md:px-6 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Shield size={14} className="text-indigo-500" /> Phân quyền
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Workflow size={14} className="text-indigo-500" /> Quy trình
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
              <History size={14} className="text-indigo-500" /> Nhật ký hệ thống
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Database size={14} className="text-indigo-500" /> Tầng dữ liệu
            </div>
          </div>

          <p className="mt-4 text-xs md:text-sm text-slate-400 font-medium italic px-4">
            Tất cả module dùng chung Permission, Workflow, Audit Log & Data Layer
          </p>
        </div>

        {/* Carousel Container */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
            <CarouselContent className="-ml-0">
              {MODULES.map((module) => (
                <CarouselItem key={module.id} className="pl-0 basis-full">
                  <div className="grid lg:grid-cols-2 lg:h-[800px] min-h-[700px]">
                    {/* Left Column: Content - Centered vertically within fixed height */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white z-10">
                      <div className="max-w-xl mx-auto lg:mx-0">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">
                            {module.label}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                          <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase rounded border border-indigo-100">
                            {module.badge}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight">
                          {module.title}
                        </h3>

                        <ul className="space-y-4 lg:space-y-5 mb-8 lg:mb-10">
                          {module.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-3 lg:gap-4">
                              <div className="mt-1 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                                <Check size={12} className="text-emerald-600 lg:hidden" strokeWidth={3} />
                                <Check size={14} className="text-emerald-600 hidden lg:block" strokeWidth={3} />
                              </div>
                              <span className="text-slate-600 font-medium text-base lg:text-lg">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
                          {module.tags.map((tag, idx) => (
                            <span key={idx} className="px-2.5 py-1 lg:px-3 lg:py-1.5 bg-slate-50 text-slate-500 text-[10px] lg:text-xs font-semibold rounded-lg border border-slate-100">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <button className="px-6 py-3 lg:px-8 lg:py-4 bg-slate-900 text-white rounded-xl  hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200 text-sm font-bold">
                            Xem quy trình nghiệp vụ <ArrowRight size={18} />
                          </button>
                          <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-slate-700 border border-slate-200 rounded-xl  hover:bg-slate-50 transition-all text-sm font-bold">
                            Yêu cầu Demo kiến trúc
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Visual - Fixed Stage for stability */}
                    <div className="relative h-[450px] lg:h-full bg-slate-950 flex items-center justify-center overflow-hidden group/visual">
                      {/* Dark Mockup Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>

                      {/* Animated Background Elements */}
                      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                      </div>

                      {/* Mockup UI - Constrained width and aspect ratio */}
                      <div className="relative w-[85%] max-w-[500px] xl:max-w-[580px] aspect-[16/10] bg-slate-900 rounded-xl border border-white/10 shadow-2xl overflow-hidden transform group-hover/visual:scale-[1.02] transition-transform duration-700">
                        {/* Mockup Header */}
                        <div className="h-6 lg:h-8 bg-slate-800/50 border-b border-slate-700/50 flex items-center px-4 gap-1.5 z-10 relative">
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-700"></div>
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-700"></div>
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-slate-700"></div>
                        </div>

                        {/* Image Content */}
                        {module.image ? (
                          <div className="absolute inset-x-0 bottom-0 top-6 lg:top-8 bg-slate-900 overflow-hidden">
                            <img
                              src={module.image}
                              alt={module.title}
                              className="w-full h-full object-cover object-top opacity-90 group-hover/visual:opacity-100 transition-opacity duration-700"
                            />
                            {/* Subtle Overlay to match dark theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                          </div>
                        ) : (
                          /* Mockup Content (Blurred) - Fallback */
                          <div className="p-4 lg:p-6 h-full blur-[4px] opacity-40 select-none">
                            <div className="flex gap-4 mb-6">
                              <div className="w-1/3 h-16 lg:h-24 bg-slate-800 rounded-lg"></div>
                              <div className="w-1/3 h-16 lg:h-24 bg-slate-800 rounded-lg"></div>
                              <div className="w-1/3 h-16 lg:h-24 bg-slate-800 rounded-lg"></div>
                            </div>
                            <div className="space-y-3 lg:space-y-4">
                              <div className="h-3 lg:h-4 w-full bg-slate-800 rounded"></div>
                              <div className="h-3 lg:h-4 w-5/6 bg-slate-800 rounded"></div>
                              <div className="h-3 lg:h-4 w-4/6 bg-slate-800 rounded"></div>
                              <div className="h-24 lg:h-32 w-full bg-slate-800/50 rounded-lg mt-6 lg:mt-8"></div>
                            </div>
                          </div>
                        )}

                        {/* Overlay Label */}
                        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="px-4 py-2 lg:px-6 lg:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
                            <p className="text-white font-bold text-[10px] lg:text-sm tracking-wide flex items-center gap-2">
                              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              {module.image ? 'Actual System Preview' : 'Visual Preview (Anonymized)'}
                            </p>
                          </div>
                        </div> */}
                      </div>

                      {/* Bottom Label */}
                      <div className="absolute bottom-4 lg:bottom-8 left-0 w-full text-center">
                        <p className="text-slate-500 text-[10px] lg:text-xs font-medium uppercase tracking-widest">
                          Enterprise Ready • v2.4.0
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Controls - Positioned over the right visual area consistently */}
            <div className="absolute bottom-3 right-3 lg:bottom-8 lg:right-8 flex gap-2 md:gap-3 z-20">
              <button
                onClick={() => api?.scrollPrev()}
                className="p-2.5 lg:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all shadow-xl group"
              >
                <ChevronLeft size={20} className="lg:hidden group-hover:-translate-x-0.5 transition-transform" />
                <ChevronLeft size={24} className="hidden lg:block group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="p-2.5 lg:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all shadow-xl group"
              >
                <ChevronRight size={20} className="lg:hidden group-hover:translate-x-0.5 transition-transform" />
                <ChevronRight size={24} className="hidden lg:block group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Progress Indicator Dots */}
            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 flex gap-1.5 z-20">
              {MODULES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    current === idx ? "w-8 bg-indigo-500" : "w-1.5 bg-slate-200 hover:bg-slate-300"
                  )}
                />
              ))}
            </div>

            {/* Visual Auto-slide Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-100/10 z-20">
              <div
                key={current}
                className="h-full bg-indigo-500 transition-all linear"
                style={{
                  width: isPaused ? '0%' : '100%',
                  transitionDuration: isPaused ? '0s' : '8s'
                }}
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
