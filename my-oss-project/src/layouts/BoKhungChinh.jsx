import React from 'react';
import MucSidebar from '../components/MucSidebar';
import { UserCircle2 } from 'lucide-react';

const BoKhungChinh = ({ children, menuItems = [], currentPage = 'dashboard', onPageChange = () => {} }) => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar bên trái - Cố định */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-blue-400">DAK.edu.vn</h2>
          <p className="text-[10px] text-gray-500 italic">GV: ThS. Hoàng Quốc Tuấn</p>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <MucSidebar
              key={item.key}
              Icon={item.icon}
              nhan={item.label}
              kichHoat={currentPage === item.key}
              onClick={() => onPageChange(item.key)}
            />
          ))}
        </nav>
      </aside>

      {/* Content bên phải - Header -> Content -> Footer */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 z-10">
          <h1 className="text-lg font-bold text-gray-700 uppercase tracking-wider">Hệ thống quản lý đào tạo</h1>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
              <UserCircle2 size={20} className="text-slate-600" />
              <span>Admin</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>

          <footer className="mt-20 py-8 border-t border-gray-200 text-center text-gray-400 text-sm">
            <p>© 2026 bài-tap-2</p>
            <p>Giảng viên hướng dẫn: <span className="font-semibold">ThS. Hoàng Quốc Tuấn</span></p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default BoKhungChinh;
