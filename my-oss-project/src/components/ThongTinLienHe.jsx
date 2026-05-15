import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ThongTinLienHe = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Thông tin liên hệ</h2>
        <p className="text-gray-600">Hãy liên hệ với đội ngũ hỗ trợ nếu bạn có bất kỳ câu hỏi nào</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="text-blue-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
          </div>
          <p className="text-gray-600">support@buoi2.vn</p>
          <p className="text-gray-600">info@buoi2.vn</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-green-600">
          <div className="flex items-center gap-3 mb-3">
            <Phone className="text-green-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Điện thoại</h3>
          </div>
          <p className="text-gray-600">+84 (0) 123-456-789</p>
          <p className="text-gray-600">+84 (0) 987-654-321</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-purple-600">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="text-purple-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Địa chỉ</h3>
          </div>
          <p className="text-gray-600">123 Nguyễn Chí Thanh, tân an</p>
          <p className="text-gray-600">TP.HCM, Việt Nam</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-orange-600">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="text-orange-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Giờ làm việc</h3>
          </div>
          <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
          <p className="text-gray-600">Thứ 7 - CN: 9:00 - 16:00</p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Gửi tin nhắn cho chúng tôi</h3>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Tên của bạn"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email của bạn"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <textarea
              placeholder="Nội dung tin nhắn..."
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            ></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Gửi tin nhắn
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThongTinLienHe;
