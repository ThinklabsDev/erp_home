import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['Tính năng', 'Giải pháp', 'Khách hàng', 'Bảng giá'];

export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">t</div>
                    <span className="text-xl font-bold text-slate-900 tracking-tight">tERP</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(link => (
                        <a key={link} href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                            {link}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Đăng nhập</button>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm shadow-indigo-200">
                        Dùng thử miễn phí
                    </button>
                </div>

                <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
                    {NAV_LINKS.map(link => (
                        <a key={link} href="#" className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">
                            {link}
                        </a>
                    ))}
                    <div className="flex flex-col gap-3 mt-2">
                        <button className="w-full py-3 text-center font-medium text-slate-600 bg-slate-50 rounded-lg">Đăng nhập</button>
                        <button className="w-full py-3 text-center font-medium text-white bg-indigo-600 rounded-lg">Dùng thử miễn phí</button>
                    </div>
                </div>
            )}
        </header>
    );
}
