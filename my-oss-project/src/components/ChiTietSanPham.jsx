import React from 'react';
import { X, ShoppingCart } from 'lucide-react';

const ChiTietSanPham = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-800">Chi tiết Gói</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
            <ShoppingCart size={80} className="text-blue-600 opacity-50" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.desc}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase">Giá</p>
            <p className="text-4xl font-bold text-blue-600">{product.price}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase mb-2">Mô tả chi tiết</p>
            <p className="text-gray-700 leading-relaxed">{product.details}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Tình trạng</p>
              <p className="text-lg font-semibold text-green-600 mt-1">Còn hàng</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Đánh giá</p>
              <p className="text-lg font-semibold text-yellow-500 mt-1">★★★★★ (128 đánh giá)</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietSanPham;
