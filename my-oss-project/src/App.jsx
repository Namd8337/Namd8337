import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, Users, Settings } from 'lucide-react';
import BoKhungChinh from './layouts/BoKhungChinh';
import TheThongKe from './components/TheThongKe';
import BangKhoaHoc from './components/BangKhoaHoc';
import ThongTinLienHe from './components/ThongTinLienHe';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const menuItems = [
    { label: 'Bảng điều khiển', icon: LayoutDashboard, key: 'dashboard' },
    { label: 'Khóa học', icon: BookOpen, key: 'courses' },
    { label: 'Sinh viên', icon: Users, key: 'students' },
    { label: 'Cài đặt', icon: Settings, key: 'settings' },
  ];

  return (
    <BoKhungChinh
      menuItems={menuItems}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    >
      {currentPage === 'dashboard' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Bảng điều khiển tổng quan</h2>
            <p className="text-gray-500">Giao diện dashboard quản lý đào tạo theo đúng yêu cầu bài tập.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TheThongKe tieuDe="Tổng sinh viên" conSo="1,250" mauSac="text-blue-600" />
            <TheThongKe tieuDe="Tổng khóa học" conSo="24" mauSac="text-green-600" />
            <TheThongKe tieuDe="Khóa học đang mở" conSo="12" mauSac="text-purple-600" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Danh sách môn học mới nhất</h3>
                  <p className="text-gray-500 text-sm">Bảng hiển thị trạng thái và số lượng sinh viên.</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
                  + Thêm môn học
                </button>
              </div>
              <BangKhoaHoc />
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <h4 className="text-lg font-semibold text-gray-800">Thông tin nhanh</h4>
                <p className="mt-3 text-gray-600">Quản lý khóa học, sinh viên và báo cáo đào tạo trong cùng một giao diện.</p>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                    Quản lý khóa học trực quan
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                    Theo dõi tình trạng học phần
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                    Thông tin liên hệ hỗ trợ
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <h4 className="text-lg font-semibold text-gray-800">Địa chỉ liên hệ</h4>
                <p className="mt-3 text-gray-600">DAK.edu.vn - Trung tâm đào tạo</p>
                <p className="mt-2 text-gray-600">Số 123 Lê Lợi, Quận 1, TP.HCM</p>
                <p className="mt-1 text-gray-600">Email: support@dak.edu.vn</p>
                <p className="mt-1 text-gray-600">Điện thoại: +84 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'courses' && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Quản lý khóa học</h2>
              <p className="text-gray-500">Danh sách môn học theo cấu trúc bài thầy yêu cầu.</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
              + Thêm môn học
            </button>
          </div>
          <BangKhoaHoc />
          <ThongTinLienHe />
        </div>
      )}

      {currentPage === 'students' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Quản lý sinh viên</h2>
            <p className="text-gray-500">Tổng hợp thông tin sinh viên và trạng thái đăng ký.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <TheThongKe tieuDe="Tổng sinh viên" conSo="1,250" mauSac="text-blue-600" />
            <TheThongKe tieuDe="Sinh viên mới" conSo="120" mauSac="text-green-600" />
            <TheThongKe tieuDe="Đang học" conSo="980" mauSac="text-purple-600" />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <p className="text-gray-600">Phần quản lý sinh viên có thể mở rộng cho chức năng tìm kiếm, lọc theo lớp và theo trạng thái.</p>
          </div>
        </div>
      )}

      {currentPage === 'settings' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Cài đặt hệ thống</h2>
            <p className="text-gray-500">Cấu hình cơ bản cho giao diện và thông tin liên hệ.</p>
          </div>
          <ThongTinLienHe />
        </div>
      )}
    </BoKhungChinh>
  );
}

export default App;
