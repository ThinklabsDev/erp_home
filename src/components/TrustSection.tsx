import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
  "TechCorp", "GlobalLogistics", "VinaManufacture", "EduSystems", "RetailChain", "BuildCo"
];

export const TrustSection = () => {
  return (
    <div className="w-full py-12 border-b border-slate-100 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Được nhiều doanh nghiệp trong các lĩnh vực sản xuất, logistics, bán lẻ, giáo dục tin chọn
        </p>
        <p className="text-xs text-slate-400 mb-6">Số liệu tổng hợp từ các dự án triển khai & đối tác</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {LOGOS.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-slate-400 flex items-center gap-2"
            >
              {/* Placeholder Logo Icon */}
              <div className="w-8 h-8 bg-slate-200 rounded-lg flex-shrink-0" />
              <span>{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
