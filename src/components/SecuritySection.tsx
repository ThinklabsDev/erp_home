import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, FileCheck } from 'lucide-react';

export const SecuritySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase mb-6">
              <ShieldCheck size={14} /> Enterprise Security
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Bảo mật dữ liệu <br/>
              <span className="text-emerald-600">Tiêu chuẩn Quốc tế</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Chúng tôi hiểu rằng dữ liệu là tài sản quý giá nhất của doanh nghiệp. tERP được xây dựng với kiến trúc bảo mật đa lớp, tuân thủ nghiêm ngặt các tiêu chuẩn an toàn thông tin.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Lock, title: "Mã hóa AES-256", desc: "Dữ liệu được mã hóa hai chiều tại Rest & Transit." },
                { icon: Server, title: "Hạ tầng Tier-3", desc: "Server đặt tại Data Center chuẩn Tier-3, uptime 99.9%." },
                { icon: FileCheck, title: "Audit Log 24/7", desc: "Ghi lại mọi thao tác trên hệ thống để kiểm soát rủi ro." },
                { icon: ShieldCheck, title: "ISO 27001", desc: "Quy trình vận hành đạt chuẩn an toàn thông tin." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Representation (Bento Grid Style) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 col-span-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-mono text-sm text-slate-600">System Status: Operational</span>
              </div>
              <span className="text-emerald-600 font-bold text-sm">99.99% Uptime</span>
            </div>
            <div className="bg-indigo-600 p-6 rounded-2xl text-white flex flex-col justify-center items-center text-center aspect-square">
              <ShieldCheck size={48} className="mb-4 opacity-80" />
              <div className="font-bold text-xl">GDPR</div>
              <div className="text-xs text-indigo-200 mt-1">Ready Compliance</div>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl text-white flex flex-col justify-center items-center text-center aspect-square">
              <Lock size={48} className="mb-4 text-emerald-400" />
              <div className="font-bold text-xl">SSL/TLS</div>
              <div className="text-xs text-slate-400 mt-1">End-to-end Encryption</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
