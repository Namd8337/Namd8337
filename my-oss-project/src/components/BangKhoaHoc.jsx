import React from 'react';

const BangKhoaHoc = () => {
  const danhSach = [
    { id: 1, ten: "Lập trình React JS", sv: 150, trangThai: "Đang mở" },
    { id: 2, ten: "Cấu trúc dữ liệu", sv: 80, trangThai: "Đang mở" },
    { id: 3, ten: "Thiết kế Web nâng cao", sv: 120, trangThai: "Đã khóa" },
  ];

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-4 font-semibold text-gray-700">Tên môn học</th>
            <th className="p-4 font-semibold text-gray-700 text-center">Số sinh viên</th>
            <th className="p-4 font-semibold text-gray-700 text-right">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {danhSach.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-4 font-medium">{item.ten}</td>
              <td className="p-4 text-center text-gray-600">{item.sv}</td>
              <td className="p-4 text-right">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  item.trangThai === "Đang mở" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}>
                  {item.trangThai}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BangKhoaHoc;
