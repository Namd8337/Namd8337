import React from 'react';

const BoKhungChinh = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* 1. Sidebar bên trái - Cố định */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-blue-400">DAK.edu.vn</h2>
          <p className="text-[10px] text-gray-500 italic">GV: ThS. Hoàng Quốc Tuấn</p>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {/* Chỗ này sẽ render các MucSidebar */}
          {/* Tạm thời để trống để file App.jsx điều khiển */}
          <div id="sidebar-content"></div>
        </nav>
      </aside>

      {/* 2. Content bên phải - Chia theo chiều dọc (Header -> Content -> Footer) */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 z-10">
          <h1 className="text-lg font-bold text-gray-700 uppercase tracking-wider">Hệ thống quản lý</h1>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600 italic">Chào mừng, Admin</span>
            <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-blue-200"></div>
          </div>
        </header>

        {/* Vùng nội dung cuộn */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>

          {/* Footer nằm ở cuối nội dung chính */}
          <footer className="mt-20 py-8 border-t border-gray-200 text-center text-gray-400 text-sm">
            <p>© 2026 Bản quyền thuộc về dự án bài-tap-2</p>
            <p>Giảng viên hướng dẫn: <span className="font-semibold">ThS. Hoàng Quốc Tuấn</span></p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default BoKhungChinh;
