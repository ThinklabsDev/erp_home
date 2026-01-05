import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, XCircle, ArrowRight, Building2, 
  Network, FileSpreadsheet, Layers, Clock, Settings,
  Users, Server, ShieldCheck, Code2, HeadphonesIcon
} from 'lucide-react';

// Note: Using a simple Section component. Adjust import if needed.
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 ${className}`}>
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

// --- 1. TARGET AUDIENCE SECTION ---
export const TargetAudienceSection = () => {
  return (
    <Section className="bg-slate-50 border-b border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">tERP phù hợp nhất cho ai?</h2>
        <p className="text-slate-600">
          Hệ thống được thiết kế tối ưu cho các doanh nghiệp đang trong giai đoạn chuyển đổi số mạnh mẽ.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Building2,
            title: "Quy mô 50 - 500 nhân sự",
            desc: "Doanh nghiệp SME hoặc mô hình Tập đoàn vừa, có cấu trúc phòng ban rõ ràng cần sự liên kết chặt chẽ."
          },
          {
            icon: Network,
            title: "Đa chi nhánh / Đa điểm",
            desc: "Doanh nghiệp có văn phòng, nhà máy hoặc kho bãi phân tán cần dữ liệu tập trung về một nguồn duy nhất (Single Source of Truth)."
          },
          {
            icon: FileSpreadsheet,
            title: "Muốn thoát khỏi 'Ma trận Excel'",
            desc: "Dành cho lãnh đạo nhận thấy việc quản lý thủ công, rời rạc qua Excel/Zalo đang kìm hãm tốc độ tăng trưởng."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// --- 2. BEFORE / AFTER TRANSFORMATION ---
export const BeforeAfterSection = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Sự khác biệt khi vận hành với tERP</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Connector Icon for Desktop */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-slate-200 items-center justify-center z-10 shadow-md">
          <ArrowRight className="text-slate-400" />
        </div>

        {/* BEFORE */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="inline-block px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold mb-6">TRƯỚC KHI DÙNG tERP</div>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-slate-700">Dữ liệu rời rạc</h4>
                <p className="text-sm text-slate-500 mt-1">Thông tin nằm rải rác ở Excel, Zalo, Email. Mất 3-5 ngày để tổng hợp báo cáo tháng.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-slate-700">Quy trình "nút cổ chai"</h4>
                <p className="text-sm text-slate-500 mt-1">Phê duyệt giấy tờ chậm trễ, nhân viên phải chờ đợi sếp ký duyệt trực tiếp.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-slate-700">Thiếu minh bạch</h4>
                <p className="text-sm text-slate-500 mt-1">Khó xác định trách nhiệm khi xảy ra sai sót. Lịch sử làm việc không được lưu vết.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* AFTER */}
        <div className="bg-indigo-50/50 rounded-2xl p-8 border border-indigo-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-6 relative z-10">SAU KHI DÙNG tERP</div>
          <ul className="space-y-6 relative z-10">
            <li className="flex gap-4">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
              <div>
               <h4 className="font-bold text-slate-900">Dữ liệu Real-time</h4>
               <p className="text-sm text-slate-600 mt-1">Mọi chỉ số kinh doanh, nhân sự được cập nhật tức thời. Báo cáo realtime trong vài giây.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-slate-900">Tự động hóa quy trình</h4>
                <p className="text-sm text-slate-600 mt-1">Phê duyệt online đa cấp. Hệ thống tự động nhắc việc và cảnh báo tiến độ.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-slate-900">Minh bạch & Trách nhiệm</h4>
                <p className="text-sm text-slate-600 mt-1">Hệ thống Log ghi lại mọi thao tác. Phân quyền chặt chẽ đến từng trường dữ liệu.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

// --- 3. IMPLEMENTATION PROCESS ---
export const ImplementationSection = () => {
  const steps = [
    { title: "Khảo sát & Tư vấn", desc: "Đánh giá hiện trạng, xây dựng lộ trình số hóa phù hợp." },
    { title: "Thiết lập & Cấu hình", desc: "Cài đặt hệ thống, import dữ liệu cũ và phân quyền." },
    { title: "Đào tạo & Pilot", desc: "Hướng dẫn nhân sự sử dụng và chạy thử nghiệm (UAT)." },
    { title: "Go-live & Hỗ trợ", desc: "Vận hành chính thức với sự hỗ trợ kỹ thuật 24/7." }
  ];

  return (
    <Section className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Quy trình triển khai chuẩn Enterprise</h2>
        <p className="text-slate-600">Lộ trình rõ ràng, giảm thiểu rủi ro và đảm bảo hệ thống vận hành ổn định.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
              {i + 1}
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
            <p className="text-sm text-slate-500 max-w-[200px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- 4. STRATEGIC COMPARISON ---
export const ComparisonSection = () => {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Tại sao doanh nghiệp chọn tERP?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-4 text-sm font-semibold text-slate-500 uppercase">Tiêu chí</th>
                <th className="p-4 text-sm font-semibold text-slate-400 bg-slate-50/50">Phần mềm Kế toán/Rời rạc</th>
                <th className="p-4 text-sm font-semibold text-slate-400 bg-slate-50/50">ERP Nước ngoài</th>
                <th className="p-4 text-lg font-bold text-indigo-600 bg-indigo-50 rounded-t-xl border-t border-x border-indigo-100">tERP System</th>
              </tr>
            </thead>
            <tbody>
              {[
                { criterion: "Tính liên kết dữ liệu", legacy: "Rời rạc, nhập liệu nhiều lần", foreign: "Tốt", terp: "Đồng bộ Real-time" },
                { criterion: "Chi phí triển khai", legacy: "Thấp", foreign: "Rất cao ($$$)", terp: "Tối ưu, linh hoạt" },
                { criterion: "Thời gian triển khai", legacy: "Nhanh", foreign: "6 - 18 tháng", foreignColor: "text-red-500", terp: "2 - 8 tuần (đối với phạm vi tiêu chuẩn)" },
                { criterion: "Hỗ trợ tiếng Việt", legacy: "Tốt", foreign: "Hạn chế", foreignColor: "text-amber-500", terp: "Bản địa hóa 100%" },
                { criterion: "Khả năng tùy chỉnh", legacy: "Thấp", foreign: "Phức tạp, đắt đỏ", foreignColor: "text-amber-500", terp: "High Customizability" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="p-4 font-medium text-slate-700">{row.criterion}</td>
                  <td className="p-4 text-slate-500 bg-slate-50/30 text-sm">{row.legacy}</td>
                  <td className={`p-4 text-slate-500 bg-slate-50/30 text-sm ${row.foreignColor || ''}`}>{row.foreign}</td>
                  <td className="p-4 font-bold text-indigo-700 bg-indigo-50 border-x border-indigo-100 last:rounded-b-xl border-b text-sm">{row.terp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

// --- 5. PRICING LOGIC ---
export const PricingLogicSection = () => {
  return (
    <Section className="bg-slate-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Chi phí đầu tư được tính như thế nào?</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Chúng tôi hiểu mỗi doanh nghiệp có ngân sách và nhu cầu khác nhau. 
            Mô hình giá của tERP được thiết kế để <span className="font-semibold text-indigo-600">tối ưu hóa dòng tiền</span> và mở rộng theo sự phát triển của bạn.
          </p>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm text-sm font-medium text-slate-700">Không phí ẩn</div>
             <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm text-sm font-medium text-slate-700">Nâng cấp linh hoạt</div>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            { 
              icon: Users, 
              title: "Số lượng người dùng (User)", 
              desc: "Tính phí dựa trên số lượng user hoạt động thực tế. Giúp doanh nghiệp nhỏ dễ dàng bắt đầu." 
            },
            { 
              icon: Layers, 
              title: "Phân hệ (Module) sử dụng", 
              desc: "Chỉ trả tiền cho những tính năng bạn cần. Ví dụ: Chỉ mua gói HR và Dự án, chưa cần mua gói Kho." 
            },
            { 
              icon: Server, 
              title: "Hạ tầng triển khai", 
              desc: "Lựa chọn Cloud (trả phí thuê bao tháng/năm) hoặc On-Premise (mua license vĩnh viễn)." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm">
              <div className="mt-1 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                <item.icon size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// --- 6. TEAM CREDIBILITY ---
export const TeamCredibilitySection = () => {
  return (
    <Section className="bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Đội ngũ phát triển & Vận hành</h2>
        <p className="text-slate-500 mb-4 text-sm">Sản phẩm được xây dựng bởi các kỹ sư và chuyên gia tư vấn quản trị hàng đầu.</p>
        <p className="text-slate-500 mb-8 text-xs">Kinh nghiệm triển khai cho các doanh nghiệp trong các lĩnh vực: sản xuất, logistics, bán lẻ, dịch vụ.</p>

        <div className="grid md:grid-cols-3 gap-8">
           <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Code2 size={24} />
              </div>
              <h4 className="font-bold text-slate-900">Công nghệ Lõi</h4>
              <p className="text-xs text-slate-500 mt-2">Đội ngũ kỹ sư &gt; 10 năm kinh nghiệm xây dựng hệ thống High-load, Cloud Native, Security.</p>
           </div>
           <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Settings size={24} />
              </div>
              <h4 className="font-bold text-slate-900">Am hiểu Nghiệp vụ</h4>
              <p className="text-xs text-slate-500 mt-2">Chuyên gia tư vấn quy trình doanh nghiệp (BA) đồng hành chuẩn hóa quy trình trước khi số hóa.</p>
           </div>
           <div className="p-6 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                <HeadphonesIcon size={24} />
              </div>
              <h4 className="font-bold text-slate-900">Hỗ trợ Tận tâm</h4>
              <p className="text-xs text-slate-500 mt-2">Đội ngũ Customer Success hỗ trợ 1:1, đảm bảo doanh nghiệp ứng dụng thành công.</p>
           </div>
        </div>
      </div>
    </Section>
  );
};
