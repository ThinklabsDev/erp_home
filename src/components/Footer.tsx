import React from 'react';
import { Phone, Mail, Facebook, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">t</div>
                            <span className="text-xl font-bold text-slate-900 tracking-tight">tERP</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3 text-slate-600">
                                <MapPin className="text-indigo-600 shrink-0" size={18} />
                                <p className="text-sm leading-relaxed">
                                    Tầng 5 - Nhà Sách Lê Lợi, Số 51 Đại Lộ Lê Lợi, Phường Tân Sơn, Thành Phố Thanh Hóa
                                </p>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <Phone className="text-indigo-600 shrink-0" size={18} />
                                <a href="tel:+84944488868" className="text-sm hover:text-indigo-600 transition-colors">+849.444.888.68</a>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <Mail className="text-indigo-600 shrink-0" size={18} />
                                <a href="mailto:lienhe@thinklabs.com.vn" className="text-sm hover:text-indigo-600 transition-colors">lienhe@thinklabs.com.vn</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Sản phẩm</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Tính năng</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Giải pháp</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Bảng giá</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">API & Tích hợp</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Công ty</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Về ThinkLabs</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Khách hàng</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Liên hệ</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Tuyển dụng</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Theo dõi chúng tôi</h4>
                        <p className="text-sm text-slate-600 mb-4">Cập nhật những tin tức và giải pháp công nghệ mới nhất.</p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/ThinkLABs-JSC-162071664335712"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm"
                                title="Facebook ThinkLABs JSC"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} <span className="font-semibold text-slate-900">ThinkLabs JSC</span>. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-slate-500">
                        <a href="#" className="hover:text-indigo-600 text-sm transition-colors">Chính sách bảo mật</a>
                        <a href="#" className="hover:text-indigo-600 text-sm transition-colors">Điều khoản dịch vụ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
