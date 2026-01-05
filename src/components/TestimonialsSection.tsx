import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "tERP đã giúp chúng tôi cắt giảm 40% chi phí vận hành chỉ sau 6 tháng triển khai. Báo cáo realtime cực kỳ chính xác.",
    author: "Trần Minh T.",
    role: "CEO, TechSolutions",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    quote: "Quy trình nhân sự tự động hóa hoàn toàn. Không còn giấy tờ thủ công, mọi thứ đều minh bạch trên hệ thống.",
    author: "Nguyễn Thị L.",
    role: "HR Director, RetailChain",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    quote: "Khả năng tích hợp API của tERP rất mạnh mẽ. Chúng tôi kết nối Zalo OA để CSKH ngay trên nền tảng.",
    author: "Lê Văn H.",
    role: "CTO, LogisticPro",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-200 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Khách hàng nói gì về tERP?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Sự hài lòng của khách hàng là thước đo thành công của chúng tôi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group"
            >
              <Quote className="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-200 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6 text-amber-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-slate-700 mb-6 italic leading-relaxed">"{item.quote}"</p>

              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full border-2 border-slate-100" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
