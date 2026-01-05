import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, Zap } from 'lucide-react';

export const ROISection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Tối ưu chi phí",
      desc: "Giảm thiểu lãng phí nguồn lực nhờ quy trình tự động hóa và kiểm soát chặt chẽ.",
      delay: 0
    },
    {
      icon: Zap,
      title: "Vận hành tốc độ",
      desc: "Loại bỏ nút thắt cổ chai trong phê duyệt, giúp dòng chảy công việc thông suốt.",
      delay: 0.1
    },
    {
      icon: Target,
      title: "Quyết định chính xác",
      desc: "Dữ liệu realtime giúp ban lãnh đạo ra quyết định dựa trên số liệu thực tế.",
      delay: 0.2
    },
    {
      icon: Clock,
      title: "Tiết kiệm thời gian",
      desc: "Giảm 90% thời gian làm báo cáo thủ công và nhập liệu lặp lại.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 bg-indigo-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl mix-blend-screen"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Giá trị mang lại cho Doanh nghiệp</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Không chỉ là phần mềm, tERP là đòn bẩy tăng trưởng bền vững.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-300 mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-indigo-200/80 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};