'use client';

import React, { useState } from 'react';
import { 
  Menu, X, ArrowRight, Layers, Globe, Zap, Cpu, Check, MessageSquare,
  BarChart3, Briefcase, Users, Database
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HRMockup, SalesMockup, KanbanMockup } from '@/components/Mockups';
import { ModulesCarousel } from '@/components/ModulesCarousel';
import { AboutSection } from '@/components/AboutSection';
import { ROISection } from '@/components/ROISection';

// --- DATA CONSTANTS ---
const NAV_LINKS = ['Tính năng', 'Giải pháp', 'Khách hàng', 'Bảng giá'];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-600 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- NAVIGATION --- */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[2040px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">t</div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">tERP</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link} href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Đăng nhập</button>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm shadow-indigo-200">
              Dùng thử miễn phí
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
            {NAV_LINKS.map(link => (
              <a key={link} href="#" className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">
                {link}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <button className="w-full py-3 text-center font-medium text-slate-600 bg-slate-50 rounded-lg">Đăng nhập</button>
              <button className="w-full py-3 text-center font-medium text-white bg-indigo-600 rounded-lg">Dùng thử miễn phí</button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <Section className="pt-12 pb-20 md:pt-24 md:pb-32 bg-slate-50/50">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                Phiên bản Enterprise 2.0
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
                Hệ thống Quản trị <br/>
                <span className="text-indigo-600">Doanh nghiệp tERP</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Phát triển bởi ThinkLabs. Giải pháp quản trị tổng thể giúp doanh nghiệp vận hành hiệu quả, đồng bộ và thông minh trong kỷ nguyên số.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3.5 bg-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Khám phá tính năng <ArrowRight size={18} />
                </button>
                <button className="px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                  Liên hệ tư vấn
                </button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 ring-2 ring-white">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 ring-2 ring-white">
                    <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 ring-2 ring-white">
                    <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 ring-2 ring-white">
                    <AvatarImage src="https://github.com/tailwindlabs.png" alt="@tailwindlabs" />
                    <AvatarFallback>TL</AvatarFallback>
                  </Avatar>
                </div>
                <p>Được tin dùng bởi <span className="font-bold text-slate-700">500+</span> doanh nghiệp</p>
              </div>
            </div>
            
            {/* Right: Dynamic Media Block (Video) */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="/images/video-poster.jpg" // Fallback image if video fails
              >
                <source src="/videos/banner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Optional Overlay for better text contrast if needed, though design says 'no shadow' but 'subtle border' */}
              <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl"></div>
            </div>
          </div>
        </Section>

        {/* --- PAIN POINTS --- */}
        <Section className="bg-white">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thách thức trong quản trị hiện đại</h2>
            <p className="text-slate-600">Doanh nghiệp của bạn có đang gặp phải những vấn đề này?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Dữ liệu phân tán', desc: 'Thông tin rời rạc, thiếu đồng bộ. Khó truy cập dữ liệu chính xác để ra quyết định.', icon: Layers },
              { title: 'Quản lý thủ công', desc: 'Quy trình xử lý chậm, dễ sai sót. Giảm năng suất và hiệu quả vận hành.', icon: Cpu },
              { title: 'Thiếu báo cáo Realtime', desc: 'Không có dữ liệu tức thời. Bỏ lỡ cơ hội kinh doanh và tăng trưởng.', icon: BarChart3 }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* --- MODULES OVERVIEW (CAROUSEL) --- */}
        <Section className="bg-slate-50">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Hệ sinh thái tính năng toàn diện</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Mọi công cụ bạn cần để vận hành doanh nghiệp, được tích hợp trong một nền tảng duy nhất.</p>
          </div>
          
          <ModulesCarousel />
          
        </Section>

        {/* --- FEATURE HIGHLIGHTS (ZIG ZAG) --- */}
        <Section className="bg-white space-y-24 md:space-y-32">
          
          {/* Block A */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-indigo-50 rounded-3xl transform rotate-3 scale-95 z-0"></div>
              <div className="relative z-10">
                <HRMockup />
              </div>
            </div>
            <div className="order-1 md:order-2 md:pl-12">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <Users size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Quản trị Nhân sự & <br/>Tự động hóa</h2>
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

          {/* Block B */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-12">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <BarChart3 size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tối ưu Doanh thu & <br/>Quản lý Dự án</h2>
              <ul className="space-y-4">
                {[
                  'Theo dõi KPI cá nhân & nhóm theo thời gian thực.',
                  'Quản lý phễu khách hàng (Sales Pipeline).',
                  'Kiểm soát chi phí và tiến độ dự án.'
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
              <div className="relative z-10">
                <SalesMockup />
              </div>
            </div>
          </div>

          {/* Block C */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <KanbanMockup />
            </div>
            <div className="order-1 md:order-2 md:pl-12">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tuyển dụng thông minh & <br/>Quản lý tài sản</h2>
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

        </Section>

        {/* --- INTEGRATION --- */}
        <Section className="bg-slate-900 text-white text-center overflow-hidden relative rounded-3xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Mở rộng & Tích hợp không giới hạn</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">Kết nối tERP với các công cụ yêu thích của bạn để tạo ra luồng công việc liền mạch.</p>
            
            <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
               {/* Simplified Logos */}
               <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <span className="font-bold text-xl">Zalo</span>
               </div>
               <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 hidden md:block"></div>
               <div className="flex items-center justify-center w-24 h-24 bg-indigo-600 rounded-2xl shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] border border-indigo-400 z-10 relative">
                  <span className="font-bold text-3xl">tERP</span>
                  <div className="absolute -inset-1 rounded-2xl border border-white/20 animate-ping opacity-20"></div>
               </div>
               <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 hidden md:block"></div>
               <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <span className="font-bold text-xl">Tele</span>
               </div>
            </div>
          </div>
        </Section>

        {/* --- DEPLOYMENT --- */}
        <Section className="bg-white">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Lựa chọn triển khai linh hoạt</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-indigo-500 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Globe size={20} className="text-indigo-600"/> Cloud (SaaS)
              </h3>
              <p className="text-slate-500 text-sm mb-6">Dành cho doanh nghiệp vừa & nhỏ (SMEs)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500"/> Chi phí đầu tư ban đầu thấp</li>
                <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500"/> Sao lưu dữ liệu tự động</li>
                <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500"/> Linh hoạt mở rộng user</li>
              </ul>
              <button className="w-full py-2 bg-indigo-50 text-indigo-700 font-medium rounded-lg hover:bg-indigo-100">Chọn Cloud</button>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-slate-400 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-600"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Database size={20} className="text-slate-700"/> On-Premise
              </h3>
              <p className="text-slate-500 text-sm mb-6">Dành cho Tập đoàn & Nhà nước</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500"/> Kiểm soát dữ liệu tuyệt đối</li>
                <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500"/> Hạ tầng server riêng biệt</li>
                <li className="flex items-center gap-2 text-slate-700 text-sm"><Check size={16} className="text-emerald-500"/> Tùy chỉnh tính năng sâu</li>
              </ul>
              <button className="w-full py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-100">Liên hệ báo giá</button>
            </div>
          </div>
        </Section>

        {/* --- BENEFITS ROI (DATA PULSE SECTION) --- */}
        <ROISection />

        {/* --- ABOUT THINKLABS --- */}
        <AboutSection />

        {/* --- FOOTER --- */}
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
          <div className="max-w-[2040px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900">tERP – Đồng hành cùng sự phát triển doanh nghiệp</h3>
                </div>
                <p className="text-sm text-slate-500 mb-2">Công ty cổ phần Thinklabs</p>
                <p className="text-sm text-slate-500 mb-2">51 Nhà sách Lê Lợi, Hạc Thành, Thanh Hóa</p>
                <p className="text-sm text-slate-500 mb-2">Điện thoại: <a href="tel:0944488868" className="text-indigo-600 hover:underline">0944488868</a></p>
                <p className="text-sm text-slate-500">Website: <a href="https://thinklabs.com.vn/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">thinklabs.com.vn</a></p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Sản phẩm</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-indigo-600">Tính năng</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Bảng giá</a></li>
                  <li><a href="#" className="hover:text-indigo-600">API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Công ty</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-indigo-600">Về chúng tôi</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Khách hàng</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Liên hệ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Hỗ trợ</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-indigo-600">Tài liệu HDSD</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Trung tâm hỗ trợ</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Chính sách bảo mật</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400">© 2024 ThinkLabs. All rights reserved.</p>
              <div className="flex gap-4">
                 <a href="#" className="text-slate-400 hover:text-indigo-600"><MessageSquare size={20} /></a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
