import React from 'react';
import { Target, Globe, Award, Zap, Users, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub-section 1: Company Overview */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            ThinkLabs – Đối tác công nghệ cho chuyển đổi số doanh nghiệp
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            ThinkLabs được thành lập từ năm 2017 bởi đội ngũ chuyên gia công nghệ được đào tạo trong và ngoài nước. 
            Chúng tôi tập trung phát triển các giải pháp CNTT thiết thực cho doanh nghiệp trong hành trình chuyển đổi số.
          </p>
        </div>

        {/* Sub-section 2: Vision – Mission – Core Values */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Vision */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
              <Target className="text-slate-600 group-hover:text-indigo-600 transition-colors" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Tầm nhìn</h3>
            <p className="text-slate-600 leading-relaxed">
              Ứng dụng các công nghệ mới như AI, Big Data vào các sản phẩm CNTT mang giá trị thực tiễn cao.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
              <Globe className="text-slate-600 group-hover:text-indigo-600 transition-colors" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Sứ mệnh</h3>
            <p className="text-slate-600 leading-relaxed">
              Kết nối đội ngũ chuyên gia để tạo ra các sản phẩm sáng tạo, chia sẻ tới cộng đồng và vươn ra toàn cầu.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
              <Heart className="text-slate-600 group-hover:text-indigo-600 transition-colors" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Giá trị cốt lõi</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-600">
                <Users size={16} className="text-indigo-500" />
                <span>Lấy khách hàng làm trung tâm</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Zap size={16} className="text-indigo-500" />
                <span>Tốc độ – Tối ưu – Chính xác</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Award size={16} className="text-indigo-500" />
                <span>Sáng tạo & Cam kết dài hạn</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
