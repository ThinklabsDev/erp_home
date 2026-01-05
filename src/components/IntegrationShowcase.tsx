'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, CheckCircle, ArrowRight, Brain, Users, Database, RotateCw, Plug } from 'lucide-react';
import { motion } from 'framer-motion';

interface FlowStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const FlowStep: React.FC<FlowStepProps> = ({ step, title, description, icon, isActive }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: step * 0.1 }}
    className={`relative flex-1 p-6 rounded-2xl border-2 transition-all duration-500 ${
      isActive
        ? 'border-indigo-400 bg-indigo-50 shadow-lg shadow-indigo-100'
        : 'border-slate-200 bg-white hover:border-slate-300'
    }`}
  >
    <div className="flex items-start gap-3 mb-3">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
        isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
      }`}>
        {icon}
      </div>
      <div className={`text-sm font-bold ${isActive ? 'text-indigo-600' : 'text-slate-500'}`}>
        Bước {step}
      </div>
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>

    {step < 4 && (
      <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-slate-300">
        <ArrowRight size={24} />
      </div>
    )}
  </motion.div>
);

export function IntegrationShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const flowSteps = [
    {
      title: 'Chat & Request',
      description: 'Nhân viên gửi yêu cầu xin nghỉ trực tiếp trên Zalo, Telegram',
      icon: <MessageCircle size={20} />
    },
    {
      title: 'AI Smart Parse',
      description: 'Hệ thống phân tích yêu cầu, trích xuất thông tin (ngày, lý do, loại phép)',
      icon: <Brain size={20} />
    },
    {
      title: 'Approval',
      description: 'Quản lý nhân sự phê duyệt/từ chối ngay trên chat app',
      icon: <CheckCircle size={20} />
    },
    {
      title: 'Auto Sync',
      description: 'Dữ liệu tự động cập nhật vào hệ thống tERP realtime',
      icon: <Database size={20} />
    }
  ];

  return (
    <section className="relative   px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Tích hợp & API
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Nhân sự thông minh<br />
            <span className="text-indigo-600">qua các nền tảng chat</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Nhân viên xin nghỉ qua Zalo, Telegram... người quản lý phê duyệt ngay, dữ liệu tự động đồng bộ vào tERP. Không cần vào web, tất cả trên một ứng dụng chat.
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Chat Integration Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 border border-slate-200 relative overflow-hidden">
              {/* Chat bubble simulation */}
              <div className="space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white rounded-3xl rounded-tr-lg px-4 py-3 max-w-xs">
                    <p className="text-sm font-medium">Em xin phép từ 10-12/12 tháng này ạ 🙏</p>
                  </div>
                </div>

                {/* Loading indicator */}
                <div className="flex items-center gap-2 px-4">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                  <span className="text-xs text-slate-500">tERP đang xử lý...</span>
                </div>

                {/* Bot response with approval buttons */}
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-300 rounded-3xl rounded-tl-lg px-4 py-3 max-w-xs shadow-sm">
                    <p className="text-sm font-medium text-slate-900 mb-3">Xin phép từ 10-12/12 (2 ngày)</p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-2 py-2 bg-emerald-500 text-white text-xs font-semibold rounded-xl hover:bg-emerald-600 transition-colors">
                        ✓ Phê duyệt
                      </button>
                      <button className="flex-1 px-3 py-2 bg-red-500 text-white text-xs font-semibold rounded-xl hover:bg-red-600 transition-colors">
                        ✕ Từ chối
                      </button>
                    </div>
                  </div>
                </div>

                {/* Confirmation */}
                <div className="flex justify-start">
                  <div className="bg-emerald-50 text-emerald-700 rounded-3xl rounded-tl-lg px-4 py-3 max-w-xs border border-emerald-200">
                    <p className="text-sm font-medium flex items-center gap-2">
                      <CheckCircle size={16} /> Đã cập nhật vào tERP!
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat platform badges (image-based, polished style) */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-slate-200">
                {[
                  { src: '/image/zalo.png', alt: 'Zalo' },
                  { src: '/image/telegram.png', alt: 'Telegram' },
                  { src: '/image/messager.png', alt: 'Messenger' }
                ].map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1">
                      <img src={p.src} alt={p.alt} className="w-10 h-10 object-contain" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{p.alt}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Các tính năng nổi bật</h3>
              
              {[
                {
                  title: 'Xin phép thông minh',
                  desc: 'AI tự hiểu yêu cầu từ tin nhắn tự do, không cần form phức tạp',
                  icon: <Brain size={24} />
                },
                {
                  title: 'Phê duyệt tức thời',
                  desc: 'Quản lý tra cứu lịch sử, phê duyệt ngay trên chat',
                  icon: <Zap size={24} />
                },
                {
                  title: 'Đồng bộ realtime',
                  desc: 'Dữ liệu tự động cập nhật vào hệ thống, không bao giờ bị sai lệch',
                  icon: <RotateCw size={24} />
                },
                {
                  title: 'API mở cho tích hợp',
                  desc: 'Các bên thứ 3 có thể xây dựng ứng dụng riêng kết nối tERP',
                  icon: <Plug size={24} />
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Quy trình làm việc</h3>
          <div className="grid lg:grid-cols-4 gap-6">
            {flowSteps.map((step, idx) => (
              <FlowStep
                key={idx}
                step={idx + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isActive={activeStep === idx}
              />
            ))}
          </div>
        </div>

        {/* API & Integration Stats */}
        {/* <div className="grid md:grid-cols-3 gap-8 py-12 px-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl border border-indigo-200">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
            <p className="text-slate-600 font-medium">API Endpoints</p>
            <p className="text-xs text-slate-500 mt-1">Cho các nhà phát triển tích hợp</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">REST</div>
            <p className="text-slate-600 font-medium">API Standard</p>
            <p className="text-xs text-slate-500 mt-1">Tương thích với mọi platform</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-emerald-600 mb-2">∞</div>
            <p className="text-slate-600 font-medium">Tích hợp vô hạn</p>
            <p className="text-xs text-slate-500 mt-1">Kết nối hệ thống bên thứ 3</p>
          </motion.div>
        </div> */}

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2">
            Khám phá API Documentation <ArrowRight size={18} />
          </button>
        </div> */}
      </div>
    </section>
  );
}
