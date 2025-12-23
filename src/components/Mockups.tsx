import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { 
  Bell, Search, Menu, Users, DollarSign, Briefcase, 
  CheckCircle, Clock, AlertCircle, Calendar, MoreHorizontal,
  FileText, TrendingUp, LayoutDashboard
} from 'lucide-react';

// --- MOCK DATA ---
const REVENUE_DATA = [
  { name: 'T1', rev: 4000 },
  { name: 'T2', rev: 3000 },
  { name: 'T3', rev: 2000 },
  { name: 'T4', rev: 2780 },
  { name: 'T5', rev: 1890 },
  { name: 'T6', rev: 2390 },
  { name: 'T7', rev: 3490 },
];

const SALES_FUNNEL = [
  { name: 'Leads', val: 100 },
  { name: 'Qualify', val: 80 },
  { name: 'Prop', val: 60 },
  { name: 'Win', val: 40 },
];

// --- SHARED COMPONENTS ---

const WindowFrame: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title = "tERP Dashboard" }) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-full">
    <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
      </div>
      <div className="ml-4 bg-white border border-slate-200 text-slate-500 text-xs px-3 py-1 rounded-md flex-1 text-center font-mono">
        terp.thinklabs.vn/{title.toLowerCase().replace(/\s/g, '-')}
      </div>
    </div>
    <div className="flex-1 overflow-hidden bg-slate-50/50 relative">
      {children}
    </div>
  </div>
);

const Sidebar = () => (
  <div className="w-16 md:w-56 border-r border-slate-200 bg-white h-full flex flex-col p-4">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">t</div>
      <span className="hidden md:block font-bold text-slate-800">tERP</span>
    </div>
    <div className="space-y-1">
      {[
        { icon: LayoutDashboard, label: 'Tổng quan', active: true },
        { icon: Users, label: 'Nhân sự' },
        { icon: DollarSign, label: 'Tài chính' },
        { icon: Briefcase, label: 'Dự án' },
        { icon: FileText, label: 'Báo cáo' },
      ].map((item, i) => (
        <div key={i} className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${item.active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}>
          <item.icon size={18} />
          <span className="hidden md:block text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- HERO DASHBOARD MOCKUP ---

export const DashboardMockup = () => {
  return (
    <WindowFrame title="Dashboard">
      <div className="flex h-[550px] md:h-[550px]">
        <Sidebar />
        <div className="flex-1 p-6 flex flex-col overflow-y-auto mockup-scroll">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Tổng quan kinh doanh</h3>
              <p className="text-xs text-slate-500">Cập nhật: Vừa xong</p>
            </div>
            <div className="flex gap-3">
              <button className="p-2 text-slate-400 hover:text-slate-600"><Search size={20} /></button>
              <button className="p-2 text-slate-400 hover:text-slate-600 relative">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Doanh thu tháng', val: '4.2 tỷ', change: '+12%', color: 'text-indigo-600' },
              { label: 'Dự án đang chạy', val: '18', change: '+2', color: 'text-emerald-600' },
              { label: 'Nhân sự mới', val: '05', change: '0', color: 'text-slate-600' },
            ].map((m, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 mb-1">{m.label}</p>
                <div className="flex items-end justify-between">
                  <span className="text-xl font-bold text-slate-900">{m.val}</span>
                  <span className={`text-xs font-medium ${m.color}`}>{m.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col">
              <h4 className="text-sm font-medium text-slate-900 mb-4">Biểu đồ doanh thu</h4>
              <div className="flex-1 min-h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={REVENUE_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                    <Bar dataKey="rev" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col">
              <h4 className="text-sm font-medium text-slate-900 mb-4">Trạng thái công việc</h4>
              <div className="space-y-3">
                {[
                  { label: 'Triển khai ERP Corp A', progress: 75, status: 'Đúng hạn', color: 'bg-emerald-500' },
                  { label: 'Tích hợp API Bank', progress: 40, status: 'Chậm', color: 'bg-amber-500' },
                  { label: 'Báo cáo Q3/2024', progress: 90, status: 'Đúng hạn', color: 'bg-emerald-500' },
                ].map((task, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-700 font-medium">{task.label}</span>
                      <span className="text-slate-500">{task.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${task.color}`} style={{ width: `${task.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
};

// --- HR FEATURE MOCKUP ---

export const HRMockup = () => (
  <div className="bg-white rounded-lg border border-slate-200 shadow-lg p-5 w-full max-w-sm mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
        <img src="https://picsum.photos/100/100" alt="Avatar" className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900">Nguyễn Văn A</h4>
        <p className="text-xs text-slate-500">Senior Developer • Mã NV: 1024</p>
      </div>
      <span className="ml-auto px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase rounded-md border border-emerald-100">
        Chính thức
      </span>
    </div>
    
    <div className="space-y-4">
      <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-md">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-indigo-900">Yêu cầu nghỉ phép</span>
          <span className="text-[10px] text-indigo-500">20/05/2024</span>
        </div>
        <p className="text-sm text-indigo-800 mb-2">Lý do: Giải quyết việc gia đình</p>
        <div className="flex gap-2">
          <button className="flex-1 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded hover:bg-indigo-700">Chấp thuận</button>
          <button className="px-3 py-1.5 bg-white border border-indigo-200 text-indigo-600 text-xs font-medium rounded hover:bg-indigo-50">Từ chối</button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-slate-100 p-2 rounded bg-slate-50">
          <span className="text-[10px] text-slate-500 block">Ngày phép còn lại</span>
          <span className="text-lg font-bold text-slate-800">12.5</span>
        </div>
        <div className="border border-slate-100 p-2 rounded bg-slate-50">
          <span className="text-[10px] text-slate-500 block">KPI Tháng 5</span>
          <span className="text-lg font-bold text-emerald-600">98%</span>
        </div>
      </div>
    </div>
  </div>
);

// --- SALES/PROJECT MOCKUP ---

export const SalesMockup = () => (
  <WindowFrame title="Sales Pipeline">
    <div className="p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-slate-800">Phễu bán hàng (Q2/2024)</h4>
        <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700">Xuất báo cáo</button>
      </div>
      <div className="flex-1 bg-white border border-slate-100 rounded-lg p-2">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={REVENUE_DATA}>
             <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
            <YAxis tick={{fontSize: 10}} axisLine={false} tickLine={false} />
            <Area type="monotone" dataKey="rev" stroke="#4f46e5" fillOpacity={1} fill="url(#colorRev)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 space-y-2">
         <div className="flex justify-between items-center text-sm p-2 bg-white border border-slate-100 rounded shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-slate-700">Hợp đồng TechCorp</span>
            </div>
            <span className="font-medium text-slate-900">500.000.000 đ</span>
         </div>
         <div className="flex justify-between items-center text-sm p-2 bg-white border border-slate-100 rounded shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span className="text-slate-700">Tư vấn Logistic VN</span>
            </div>
            <span className="font-medium text-slate-900">120.000.000 đ</span>
         </div>
      </div>
    </div>
  </WindowFrame>
);

// --- KANBAN MOCKUP ---

export const KanbanMockup = () => (
  <div className="flex gap-3 h-64 w-full overflow-hidden p-2">
    {[
      { title: 'Mới ứng tuyển', count: 12, color: 'bg-slate-100' },
      { title: 'Phỏng vấn', count: 4, color: 'bg-indigo-50' },
      { title: 'Offer', count: 2, color: 'bg-emerald-50' }
    ].map((col, i) => (
      <div key={i} className={`${col.color} rounded-lg p-3 flex-1 min-w-[120px] flex flex-col`}>
        <div className="flex justify-between mb-3">
          <span className="text-xs font-bold text-slate-700">{col.title}</span>
          <span className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-200">{col.count}</span>
        </div>
        <div className="space-y-2">
          <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
             <div className="h-2 w-12 bg-slate-200 rounded mb-2"></div>
             <div className="h-1.5 w-full bg-slate-100 rounded mb-1"></div>
             <div className="h-1.5 w-2/3 bg-slate-100 rounded"></div>
          </div>
          {i === 1 && (
            <div className="bg-white p-2 rounded border border-slate-200 shadow-sm border-l-2 border-l-indigo-500">
               <div className="h-2 w-16 bg-slate-700 rounded mb-2"></div>
               <div className="flex gap-1 mt-2">
                  <div className="w-4 h-4 rounded-full bg-slate-300"></div>
                  <div className="text-[8px] text-slate-500 flex items-center">14:00 PM</div>
               </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);
