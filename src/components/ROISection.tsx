'use client';

import React, { useEffect, useState } from 'react';
import { TrendingDown, Zap, Eye  , ZapIcon , TrendingDownIcon } from 'lucide-react';

interface ROIMetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  evidence: string;
  color: 'emerald' | 'blue' | 'amber';
  delay: number;
}

const ROIMetric: React.FC<ROIMetricProps> = ({ 
  icon, 
  value, 
  label, 
  description, 
  evidence,
  color,
  delay
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const colorMap = {
    emerald: 'border-emerald-500/30 hover:border-emerald-500/60',
    blue: 'border-blue-500/30 hover:border-blue-500/60',
    amber: 'border-amber-500/30 hover:border-amber-500/60'
  };

  const accentColorMap = {
    emerald: 'text-emerald-400',
    blue: 'text-blue-400',
    amber: 'text-amber-400'
  };

  return (
    <div
      className={`
        p-8 border rounded-2xl backdrop-blur-sm bg-white/5 transition-all duration-700 ease-out
        ${colorMap[color]} hover:shadow-lg hover:shadow-white/5
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
      `}
    >
      {/* Icon */}
      <div className={`w-10 h-10 rounded-lg ${accentColorMap[color]} mb-4 flex items-center justify-center opacity-80`}>
        {icon}
      </div>

      {/* Value */}
      <div className={`${accentColorMap[color]} text-5xl font-bold tracking-tight mb-1 `}>
        {value}
      </div>

      {/* Label */}
      <div className="text-white/90 text-lg  mb-1">
        {label}
      </div>

      {/* Description */}
      <div className="text-white/70 text-sm leading-relaxed mb-4">
        {description}
      </div>

      {/* Evidence line with accent */}
      <div className="flex items-start gap-2">
        <div className={`w-1 h-full ${accentColorMap[color]} rounded-full mt-1 opacity-60`}></div>
        <p className="text-white/50 text-xs leading-relaxed">
          {evidence}
        </p>
      </div>
    </div>
  );
};

/**
 * Data Pulse ROI Section - Enterprise Executive Dashboard Style
 * 
 * Design Intent:
 * - Authority & Credibility through data-driven metrics
 * - Calm, professional animations (fade & translate only)
 * - Asymmetric card layout (not equal 3-columns)
 * - Resembles SAP / ServiceNow / Stripe enterprise design
 */
export const ROISection: React.FC = () => {
  const [animateCenter, setAnimateCenter] = useState(false);

  useEffect(() => {
    setAnimateCenter(true);
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background: Deep slate/indigo with subtle grain */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900/95">
        {/* Subtle grain texture */}
        <div 
          className="absolute inset-0 opacity-20"
         
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-white/70 text-xs  uppercase tracking-wider">
              Tác động kinh doanh
            </span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Hiệu quả đầu tư có đo lường
          </h2>
          
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Dữ liệu thực từ các doanh nghiệp triển khai tERP trong 6 tháng đầu.
          </p>
        </div>

        {/* Centerpiece: Data Pulse Signal */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div
            className={`
              relative w-48 h-48 transition-all duration-1000 ease-out
              ${animateCenter ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >
            {/* Outer pulse ring */}
            <div 
              className="absolute inset-0 border border-white/20 rounded-full"
              style={{
                animation: 'pulse-ring 3s ease-in-out infinite'
              }}
            ></div>

            {/* Middle accent ring */}
            <div className="absolute inset-4 border border-indigo-500/30 rounded-full"></div>

            {/* Center core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32 bg-gradient-to-br from-indigo-600/20 to-indigo-500/10 rounded-full border border-indigo-500/50 flex items-center justify-center">
                {/* Animated center dot */}
                <div 
                  className="w-3 h-3 bg-indigo-400 rounded-full"
                  style={{
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                ></div>

                {/* Label */}
                <style>{`
                  @keyframes pulse-ring {
                    0% {
                      transform: scale(1);
                      opacity: 1;
                    }
                    50% {
                      opacity: 0.5;
                    }
                    100% {
                      transform: scale(1.15);
                      opacity: 0;
                    }
                  }
                  @keyframes pulse {
                    0%, 100% {
                      transform: scale(1);
                      opacity: 1;
                    }
                    50% {
                      transform: scale(1.2);
                      opacity: 0.7;
                    }
                  }
                `}</style>
              </div>
            </div>

            {/* Orbiting elements (visual only, no animation loop) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-emerald-400 opacity-60 text-2xl"><TrendingDown /></div>
            <div className="absolute bottom-2 right-2 text-blue-400 opacity-60 text-2xl"><ZapIcon /></div>
            <div className="absolute bottom-2 left-2 text-amber-400 opacity-60 text-2xl"><Eye /></div>
          </div>
        </div>

        {/* ROI Metrics Grid - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* METRIC 1: Cost Reduction - Full row on mobile, spans 1 on desktop */}
          <ROIMetric
            icon={<TrendingDown size={20} />}
            value="–30%"
            label="Giảm chi phí vận hành"
            description="Tối ưu nguồn lực nhờ tự động hóa quy trình"
            evidence="Số liệu từ 120+ công ty sản xuất & dịch vụ, giảm thời gian xử lý công việc"
            color="emerald"
            delay={200}
          />

          {/* METRIC 2: Speed - Slightly larger on desktop */}
          <ROIMetric
            icon={<Zap size={20} />}
            value="2×"
            label="Tăng tốc độ xử lý"
            description="Dữ liệu tập trung, không gián đoạn"
            evidence="Quy trình duyệt dữ liệu từ 3-5 ngày xuống còn 4-8 giờ"
            color="blue"
            delay={400}
          />

          {/* METRIC 3: Control - Right-aligned on desktop */}
          <ROIMetric
            icon={<Eye size={20} />}
            value="Realtime"
            label="Kiểm soát toàn diện"
            description="Ra quyết định nhanh và chính xác"
            evidence="Dashboard tập trung giúp lãnh đạo theo dõi KPI 24/7"
            color="amber"
            delay={600}
          />

        </div>

        {/* Bottom CTA / Trust line */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm">
            Kết quả từ khảo sát khách hàng ThinkLabs · Tháng 1-6/2024
          </p>
        </div>

      </div>
    </section>
  );
};
